import { NextRequest, NextResponse } from 'next/server';
import { PasskitGeneratorService } from '@/lib/services/PasskitGeneratorService';

export async function POST(request: NextRequest) {
  try {
    const { ticketId, formData, amount } = await request.json();

    if (!ticketId || !formData) {
      return NextResponse.json(
        { error: 'Ticket ID und Formulardaten sind erforderlich' },
        { status: 400 }
      );
    }

    const ticketData = {
      id: ticketId,
      name: formData.name,
      email: formData.email,
      amount: amount || 5.20,
    };

    const passkitService = PasskitGeneratorService.getInstance();
    await passkitService.initialize();
    const passBuffer = await passkitService.generatePass(ticketData);

    return new NextResponse(passBuffer, {
      headers: {
        'Content-Type': 'application/vnd.apple.pkpass',
        'Content-Disposition': 'attachment; filename=ticket.pkpass',
      },
    });
  } catch (error) {
    console.error('Error generating pass:', error);
    return NextResponse.json(
      { error: 'Failed to generate pass' },
      { status: 500 }
    );
  }
} 