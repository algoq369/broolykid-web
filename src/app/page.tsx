export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1
        className="text-2xl tracking-[8px] text-text-bright"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        BROOLYKID
      </h1>
      <p className="mt-2 text-sm text-text-muted">
        protocole de genèse sacrée
      </p>
      <div className="mt-8 h-px w-16 bg-accent" />
      <p className="mt-4 text-xs text-text-secondary">
        chargement en cours...
      </p>
    </div>
  );
}
