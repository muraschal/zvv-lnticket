import { NextRequest, NextResponse } from 'next/server';
import { PKPass } from "passkit-generator";
import path from "path";
import fs from "fs/promises";

export async function POST(request: NextRequest) {
  try {
    const { ticketId, formData, amount } = await request.json();

    if (!ticketId || !formData) {
      return NextResponse.json(
        { error: 'Ticket ID und Formulardaten sind erforderlich' },
        { status: 400 }
      );
    }

    // Pfade zu den Zertifikaten
    const certPath = path.join(process.cwd(), "certificates", "signerCert.pem");
    const keyPath = path.join(process.cwd(), "certificates", "signerKey.pem");
    const wwdrPath = path.join(process.cwd(), "certificates", "wwdr.pem");

    // Lese die Zertifikate
    const [signerCert, signerKey, wwdr] = await Promise.all([
      fs.readFile(certPath),
      fs.readFile(keyPath),
      fs.readFile(wwdrPath),
    ]);

    // Erstelle den Pass
    const pass = await PKPass.from({
      model: path.join(process.cwd(), "certificates", "pass.json"),
      certificates: {
        wwdr,
        signerCert,
        signerKey,
      },
    }, {
      serialNumber: ticketId,
      description: "ZVV Ticket",
      organizationName: "ZVV",
      teamIdentifier: "zvvit",
      passTypeIdentifier: "zvv.ch",
      backgroundColor: "rgb(255, 255, 255)",
      foregroundColor: "rgb(0, 0, 0)",
      labelColor: "rgb(0, 0, 0)",
      logoText: "ZVV Ticket",
      generic: {
        primaryFields: [
          {
            key: "amount",
            label: "Betrag",
            value: `CHF ${amount.toFixed(2)}`
          }
        ],
        secondaryFields: [
          {
            key: "name",
            label: "Name",
            value: formData.name
          }
        ],
        auxiliaryFields: [
          {
            key: "email",
            label: "E-Mail",
            value: formData.email
          },
          {
            key: "ticketId",
            label: "Ticket ID",
            value: ticketId
          }
        ],
        barcode: {
          message: ticketId,
          format: "PKBarcodeFormatQR",
          messageEncoding: "iso-8859-1"
        }
      }
    });

    // Generiere den Pass
    const buffer = await pass.generate();

    // Sende den Pass als Antwort
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.apple.pkpass",
        "Content-Disposition": `attachment; filename=${ticketId}.pkpass`,
      },
    });
  } catch (error) {
    console.error("Error generating pass:", error);
    return NextResponse.json(
      { error: "Failed to generate pass" },
      { status: 500 }
    );
  }
} 