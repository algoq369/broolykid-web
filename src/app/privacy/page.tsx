import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — BROOLYKID",
  description: "Politique de confidentialité du site BROOLYKID",
};

export default function Privacy() {
  return (
    <div className="flex flex-1 flex-col max-w-[900px] w-full mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-[20px] font-semibold text-text-bright mb-8">
        Politique de Confidentialité
      </h1>

      <div className="space-y-6 text-[14px] leading-[1.8] text-text-primary">
        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Cookies
          </h2>
          <p>
            Ce site n&apos;utilise aucun cookie de suivi, cookie publicitaire
            ou cookie tiers. Aucun identifiant persistant n&apos;est stocké
            sur votre appareil.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Chat IA
          </h2>
          <p>
            Les questions posées via le chat IA sont envoyées à un service
            tiers (Groq) pour générer les réponses. Ces messages ne sont pas
            stockés de manière permanente sur nos serveurs.
          </p>
          <p className="mt-2">
            Aucune donnée personnelle n&apos;est collectée, stockée ou
            partagée via le chat. Les conversations ne sont pas enregistrées
            et sont perdues à la fermeture de la page.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Analytiques
          </h2>
          <p>
            Ce site peut utiliser Vercel Analytics, un service d&apos;analyse
            respectueux de la vie privée qui ne collecte aucune donnée
            personnelle identifiable.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès,
            de rectification et de suppression de vos données. Étant donné
            qu&apos;aucune donnée personnelle n&apos;est collectée, ces droits
            sont satisfaits par défaut.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Contact
          </h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            veuillez contacter AlgoQ.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-border pt-4">
        <Link
          href="/"
          className="text-[13px] text-text-secondary hover:text-accent"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
