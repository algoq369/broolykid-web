import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BROOLYKID — Livre PDF",
  description:
    "Lire le protocole BROOLYKID complet — 82 pages de développement sacré de l'enfant.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
