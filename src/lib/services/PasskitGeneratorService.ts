interface TicketData {
  id: string;
  name: string;
  email: string;
  amount: number;
}

export class PasskitGeneratorService {
  private static instance: PasskitGeneratorService;

  private constructor() {}

  public static getInstance(): PasskitGeneratorService {
    if (!PasskitGeneratorService.instance) {
      PasskitGeneratorService.instance = new PasskitGeneratorService();
    }
    return PasskitGeneratorService.instance;
  }

  public async initialize() {
    // Mock-Initialisierung
    return Promise.resolve();
  }

  public async generatePass(ticketData: TicketData): Promise<Buffer> {
    // Erstelle einen Mock-Pass als JSON
    const mockPass = {
      formatVersion: 1,
      passTypeIdentifier: "pass.com.zvv.ticket",
      serialNumber: ticketData.id,
      teamIdentifier: "DEMO123",
      organizationName: "ZVV",
      description: "ZVV Ticket",
      foregroundColor: "rgb(255, 255, 255)",
      backgroundColor: "rgb(60, 0, 160)",
      labelColor: "rgb(255, 255, 255)",
      primaryFields: [
        {
          key: "amount",
          label: "BETRAG",
          value: `${ticketData.amount.toFixed(2)} CHF`,
        },
      ],
      secondaryFields: [
        {
          key: "name",
          label: "NAME",
          value: ticketData.name,
        },
      ],
      auxiliaryFields: [
        {
          key: "email",
          label: "E-MAIL",
          value: ticketData.email,
        },
      ],
      barcodes: [
        {
          message: ticketData.id,
          format: "PKBarcodeFormatQR",
          messageEncoding: "iso-8859-1",
        },
      ],
    };

    // Konvertiere das JSON in einen Buffer
    return Buffer.from(JSON.stringify(mockPass, null, 2));
  }
} 