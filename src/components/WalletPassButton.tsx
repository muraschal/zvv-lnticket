"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

interface WalletPassButtonProps {
  ticketId: string;
}

export function WalletPassButton({ ticketId }: WalletPassButtonProps) {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 5.20;

  const handleDownload = async () => {
    try {
      // Hole die Formulardaten aus dem localStorage
      const formDataString = localStorage.getItem('ticketFormData');
      if (!formDataString) {
        throw new Error('Keine Formulardaten gefunden');
      }
      const formData = JSON.parse(formDataString);

      const response = await fetch('/api/generate-pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticketId,
          formData,
          amount,
        }),
      });

      if (!response.ok) throw new Error('Failed to generate pass');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ticket.pkpass';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading pass:', error);
      alert('Fehler beim Herunterladen des Passes. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      className="w-full"
    >
      In Apple Wallet hinzufügen
    </Button>
  );
} 