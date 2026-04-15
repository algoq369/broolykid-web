import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales — BROOLYKID",
  description: "Mentions légales du site BROOLYKID",
};

export default function Mentions() {
  return (
    <div className="flex flex-1 flex-col max-w-[900px] w-full mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-[20px] font-semibold text-text-bright mb-8">
        Mentions Légales
      </h1>

      <div className="space-y-6 text-[14px] leading-[1.8] text-text-primary">
        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Éditeur
          </h2>
          <p>
            Ce site est édité par AlgoQ.
            <br />
            Projet BROOLYKID — Protocole de Genèse Sacrée.
            <br />
            Année de publication : 2025.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Contenu
          </h2>
          <p>
            Le contenu présenté sur ce site est basé sur le protocole BROOLYKID,
            un document de 82 pages couvrant le développement holistique de
            l&apos;enfant de la préconception à l&apos;âge de 7 ans.
          </p>
          <p className="mt-2">
            Les informations fournies sont à titre éducatif et ne constituent
            pas un avis médical. Consultez toujours un professionnel de santé
            qualifié pour toute décision médicale.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
        </section>

        <section>
          <h2 className="text-[16px] font-semibold text-accent mb-2">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, structure, design)
            est protégé par le droit d&apos;auteur. Toute reproduction,
            même partielle, est soumise à autorisation préalable.
          </p>
          <p className="mt-2">
            &copy; AlgoQ 2025. Tous droits réservés.
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
