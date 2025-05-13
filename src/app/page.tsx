import { TicketForm } from "@/components/TicketForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          ZVV Ticket kaufen
        </h1>
        <TicketForm />
      </div>
    </main>
  );
}
