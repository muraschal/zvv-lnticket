"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { LightningMock } from "@/components/LightningMock";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 5.20; // Standardbetrag falls nicht angegeben

  const handlePaymentComplete = () => {
    // Verzögere die Navigation um einen Frame, um setState-Konflikte zu vermeiden
    setTimeout(() => {
      const ticketId = "mock-" + Date.now();
      router.push(`/success?ticketId=${ticketId}&amount=${amount}`);
    }, 0);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Zahlung
        </h1>
        <LightningMock
          amount={amount}
          onPaymentComplete={handlePaymentComplete}
        />
      </div>
    </main>
  );
} 