"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LightningMockProps {
  amount: number;
  onPaymentComplete: () => void;
}

export function LightningMock({ amount, onPaymentComplete }: LightningMockProps) {
  const [isPaying, setIsPaying] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPaying) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onPaymentComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPaying, onPaymentComplete]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Lightning Zahlung</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <p className="text-2xl font-bold">{amount.toFixed(2)} CHF</p>
          <p className="text-sm text-gray-500">
            {isPaying
              ? `Zahlung wird verarbeitet... ${countdown}s`
              : "Klicken Sie auf den Button um die Zahlung zu simulieren"}
          </p>
        </div>
        <Button
          onClick={() => setIsPaying(true)}
          disabled={isPaying}
          className="w-full"
        >
          {isPaying ? "Zahlung läuft..." : "Jetzt bezahlen"}
        </Button>
      </CardContent>
    </Card>
  );
} 