# zvv-lnticket

## Projektüberblick

**zvv-lnticket** ist eine moderne Demo-Webapp für den einfachen Ticketkauf mit Bitcoin Lightning (mocked) und Apple Wallet Integration. Ziel ist es, einen reibungslosen, sicheren und UX-fokussierten Ticketprozess zu demonstrieren – von der Auswahl bis zum digitalen Ticket in der Apple Wallet.

## Live Demo

Die App ist als Demo-Version verfügbar unter: [Link folgt]

## Features
- **Ticketkauf mit Bitcoin Lightning** (Zahlung wird gemockt)
- **Apple Wallet Integration**: Ticket als .pkpass mit personalisiertem QR-Code
- **Modernes, responsives UI** mit shadcn/ui und TailwindCSS
- **Klares, skalierbares Komponenten- und API-Design**
- **Deployment auf Vercel**

## Installation & Entwicklung

1. **Repository klonen**
   ```bash
   git clone https://github.com/muraschal/zvv-lnticket.git
   cd zvv-lnticket
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **Development Server starten**
   ```bash
   npm run dev
   ```

4. **App öffnen**
   - Browser öffnen: [http://localhost:3000](http://localhost:3000)

## Tech Stack

| Bereich                | Technologie/Service         | Beschreibung                                  |
|------------------------|----------------------------|-----------------------------------------------|
| Frontend               | Next.js, shadcn/ui         | Modernes React-Framework, UI-Komponenten      |
| Deployment             | Vercel                     | Einfaches, schnelles Hosting                  |
| Styling                | TailwindCSS (shadcn/ui)    | Utility-first, flexibel, modern               |
| State Management       | React Hooks                | Einfach, performant, für kleine Apps optimal  |
| QR-Code                | qrcode.react               | QR-Code für Ticket, einfach zu integrieren    |
| Apple Wallet Pass      | Mock-Implementation        | Generierung von .pkpass-Dateien (Demo)        |
| Backend (API)          | Next.js API Routes         | Für Ticket- und Pass-Generierung              |

## Projektstruktur

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Startseite mit Ticketformular
│   ├── checkout/          # Zahlungsseite
│   ├── success/           # Erfolgsseite mit Ticket
│   └── api/               # API Routes
├── components/            # React Komponenten
│   ├── TicketForm.tsx     # Formular für Ticketkauf
│   ├── LightningMock.tsx  # Simulierte Lightning-Zahlung
│   ├── QRCodeDisplay.tsx  # QR-Code Anzeige
│   └── WalletPassButton.tsx # Apple Wallet Integration
└── lib/                   # Utilities & Services
    └── services/          # Backend Services
```

## Entwicklungs-Workflow

1. **Feature Branch erstellen**
   ```bash
   git checkout -b feature/neue-funktion
   ```

2. **Änderungen committen**
   ```bash
   git add .
   git commit -m "Beschreibung der Änderungen"
   ```

3. **Push zu GitHub**
   ```bash
   git push origin feature/neue-funktion
   ```

4. **Pull Request erstellen**
   - Auf GitHub Pull Request erstellen
   - Review anfordern
   - Nach Approval mergen

## Lokales Testing

Die App enthält verschiedene Mock-Implementierungen:
- Lightning-Zahlung wird simuliert (5-Sekunden-Countdown)
- Apple Wallet Pass wird als JSON generiert
- Keine echte Datenbank-Anbindung

## Deployment

Die App ist für Vercel optimiert:
1. Vercel-Projekt erstellen
2. GitHub-Repository verbinden
3. Automatisches Deployment bei Push auf Main

## Lizenz

MIT

## Beitragen

Beiträge sind willkommen! Bitte erst Issue erstellen und diskutieren.

---

## Architektur & Struktur

### Views/Pages
- `/` – Home, Eventübersicht, Ticketkauf starten
- `/checkout` – Ticketkauf, Lightning Invoice (mocked)
- `/success` – Bestätigung, Download-Link für Apple Wallet Ticket
- `/admin` (optional) – Übersicht verkaufter Tickets

### Komponenten
- `components/TicketForm.tsx` – Formular für Ticketkauf
- `components/LightningMock.tsx` – Mock für Lightning-Zahlung
- `components/QRCodeDisplay.tsx` – QR-Code-Anzeige
- `components/WalletPassButton.tsx` – Button für Apple Wallet Download
- `api/generate-pass.ts` – API-Route für Pass-Generierung

### Beispiel-Klassennamen
- `TicketPurchaseView`
- `LightningPaymentMock`
- `AppleWalletPassService`
- `QRCodeGenerator`
- `PasskitGeneratorService`

---

## Apple Wallet Integration
- **.pkpass-Datei**: Apple Wallet verwendet das PassKit-Format (.pkpass), ein signiertes ZIP mit JSON, Bildern, Zertifikat.
- **Personalisierter QR-Code**: Ja, du kannst einen QR-Code mit beliebigen Daten (z.B. Ticket-ID, User-ID, Event-Infos) einbinden.
- **Personalisierung**: Name, Ticketnummer, Sitzplatz, Event-Infos, Farben, Logo, etc.
- **Validierung**: QR kann z.B. auf eine API zeigen oder verschlüsselte Infos enthalten.
- **Serverseitige Generierung**: Mit Node.js-Library wie passkit-generator.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
