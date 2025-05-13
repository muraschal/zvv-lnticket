"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { QRCodeDisplay } from "@/components/QRCodeDisplay";
import { WalletPassButton } from "@/components/WalletPassButton";

function SuccessContent() {
  const searchParams = useSearchParams();
  const ticketId = searchParams.get("ticketId") || "";

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ticket erfolgreich gekauft!
        </h1>
        <div className="space-y-8">
          <QRCodeDisplay
            data={ticketId}
            title="Ihr digitales Ticket"
          />
          <div className="max-w-md mx-auto">
            <WalletPassButton ticketId={ticketId} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Laden...
          </h1>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
} 