"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QRCodeDisplayProps {
  data: string;
  title?: string;
}

export function QRCodeDisplay({ data, title = "Ihr Ticket" }: QRCodeDisplayProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="p-4 bg-white rounded-lg">
          <QRCodeSVG
            value={data}
            size={200}
            level="H"
            includeMargin={true}
            className="mx-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
} 