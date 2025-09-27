import LinguiProvider from "@/components/i18n-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokenist - Enterprise Software Solutions",
  description:
    "Transform Your Business with ERP, Big Data, Website Design, and AI Solutions",
  generator: "Tokenist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <LinguiProvider>{children}</LinguiProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
