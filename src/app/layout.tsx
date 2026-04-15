import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "BROOLYKID — Protocole de Genèse Sacrée",
  description:
    "Protocole holistique de développement sacré de l'enfant. 82 pages couvrant préconception, gestation, naissance et développement jusqu'à 7 ans.",
  openGraph: {
    title: "BROOLYKID — Protocole de Genèse Sacrée",
    description:
      "Protocole holistique de développement sacré de l'enfant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${firaCode.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
