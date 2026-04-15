export interface Phase {
  id: string;
  sigle: string;
  title: string;
  subtitle: string;
  pages: string;
  content: string;
}

export const PHASE_ORDER = [
  "intro",
  "alpha",
  "bravo",
  "charlie",
  "delta",
  "echo",
  "foxtrot",
  "golf",
  "conclusion",
] as const;

export type PhaseId = (typeof PHASE_ORDER)[number];

export const BOOK_PHASES: Record<PhaseId, Phase> = {
  intro: {
    id: "intro",
    sigle: "◇",
    title: "INTRODUCTION GÉNÉRALE",
    subtitle: "Vision holistique & origine du protocole",
    pages: "1-14",
    content: `Ce protocole représente une approche révolutionnaire pour l'optimisation du développement humain. Il demande engagement, patience et adaptation constante.

L'enfant n'est pas une page blanche, mais un champ unifié de mémoire, d'intention et de potentiel.

OBJECTIF DU PROTOCOLE:
→ Harmonie entre plans physique, émotionnel, mental, énergétique, spirituel
→ Re-sacraliser la parentalité
→ Honorer la conception comme initiation alchimique

PRINCIPES FONDAMENTAUX:
1. Naturel Avant Synthétique
2. Hygiène Énergétique
3. Intention Sacrée
4. Sagesse Ancestrale + Science Moderne
5. Individualisation`,
  },

  alpha: {
    id: "alpha",
    sigle: "α",
    title: "PHASE ALPHA",
    subtitle: "Fondation Préconceptionnelle",
    pages: "15-31",
    content: `DÉTOXIFICATION BIOLOGIQUE:
→ Foie, reins, lymphe
→ Élimination métaux lourds
→ Nettoyage intestinal

NUTRITION QUANTIQUE:
→ Oméga-3 (DHA + EPA)
→ Folate naturel (L-5-MTHF)
→ Probiotiques fermentés

PROTECTION ÉNERGÉTIQUE:
→ Purification EMF
→ Protection ondes électromagnétiques
→ Cristaux de protection

ACTIVATION:
→ ADN 12 brins subtils
→ Glande pinéale (décalcification)
→ Vision intérieure

FRÉQUENCES:
432 Hz = alignement cosmique
528 Hz = réparation ADN`,
  },

  bravo: {
    id: "bravo",
    sigle: "β",
    title: "PHASE BRAVO",
    subtitle: "Gestation Sacrée",
    pages: "32-40",
    content: `PREMIER TRIMESTRE:
→ Implantation consciente
→ Communication avec l'âme
→ Nutrition ciblée

DEUXIÈME TRIMESTRE:
→ Optimisation réseau neural
→ Oméga-3 DHA augmenté (900mg/jour)
→ Cérémonie sélection nom sacré

TROISIÈME TRIMESTRE:
→ Préparation accouchement
→ Environnement sonore 432Hz
→ Méditations guidées`,
  },

  charlie: {
    id: "charlie",
    sigle: "γ",
    title: "PHASE CHARLIE",
    subtitle: "Naissance Sacrée & Premiers 3 Jours",
    pages: "40-48",
    content: `ENVIRONNEMENT DE NAISSANCE:
→ Éclairage minimal (bougies, lampes sel)
→ Son ambiant 432Hz
→ Huiles essentielles (lavande, encens)
→ Grille cristaux

PREMIÈRES 72 HEURES:
→ Clampage retardé cordon (1-3h)
→ Contact peau-à-peau immédiat
→ Premier allaitement (heure dorée)
→ Vernix intact

BAIN SONORE GUÉRISSEUR:
Jour 1: 417 Hz (nettoyer traumatismes)
Jour 2: 528 Hz (harmonisation ADN)
Jour 3: 639 Hz (connexion cœur)`,
  },

  delta: {
    id: "delta",
    sigle: "δ",
    title: "PHASE DELTA",
    subtitle: "Fondation Quantique (Jours 1-3)",
    pages: "48-49",
    content: `PROTOCOLE COLOSTRUM:
→ Or liquide maternel
→ Première immunisation
→ Lien microbiome

MASSAGE SACRÉ:
→ Huiles: sésame, jojoba, coco
→ Huiles essentielles: lavande, camomille
→ Mouvement circulaire cœur → extrémités

CALIBRATION SYSTÈME NERVEUX:
→ Stimulation vestibulaire
→ Contact 12h+/jour
→ Respiration 3-6-9`,
  },

  echo: {
    id: "echo",
    sigle: "ε",
    title: "PHASE ECHO",
    subtitle: "Éveil Sensoriel (Jours 4-10)",
    pages: "70-76",
    content: `EAU & LUMIÈRE:
→ Eau structurée (hexagonale)
→ Thérapie lumière rouge (660nm/850nm)
→ Exposition solaire douce (matin)

SONOTHÉRAPIE:
→ 528 Hz: régénération cellulaire
→ 432 Hz: alignement vibratoire
→ 396 Hz: sécurité et ancrage

CRISTAUX PROGRAMMATEURS:
→ Quartz rose: amour inconditionnel
→ Améthyste: protection
→ Calcite bleue: sommeil profond`,
  },

  foxtrot: {
    id: "foxtrot",
    sigle: "ζ",
    title: "PHASE FOXTROT",
    subtitle: "Conscience Élargie (Mois 2-12)",
    pages: "49-51",
    content: `GRILLE CRISTALLINE:
→ Quartz rose (amour): 20 cm au-dessus
→ Améthyste (protection): sous matelas
→ Calcite bleue (sommeil): coin chambre
→ Agate mousse (croissance): pendentif

ARCHITECTURE SONORE:
→ 432 Hz: relaxation profonde
→ 528 Hz: réparation ADN (10 min max)
→ 639 Hz: chakra du cœur

DESIGN ENVIRONNEMENTAL:
→ Zéro matériaux artificiels
→ Jouets bois/fibres naturelles
→ Lumière naturelle optimisée`,
  },

  golf: {
    id: "golf",
    sigle: "η",
    title: "PHASE GOLF",
    subtitle: "Développement Avancé (Âge 1-7 ans)",
    pages: "51-58, 79-82",
    content: `LANGAGE SACRÉ & GÉOMÉTRIE:
→ Sons + formes géométriques
→ O = cercle, A = triangle, E = carré
→ Mandalas alphabétiques

ÉDUCATION VIBRATOIRE:
→ Chanter mots nouveaux
→ Instruments rythmiques
→ Gammes pentatoniques

ÉCOLE FORESTIÈRE:
→ 3-4h/jour en nature
→ Apprentissage par expérience
→ Land art, jardinage, cabanes

NUTRITION QUANTIQUE:
→ Superaliments (spiruline, graines germées)
→ Alignement saisonnier
→ Eau chargée soleil/lune`,
  },

  conclusion: {
    id: "conclusion",
    sigle: "✧",
    title: "CONCLUSION SACRÉE",
    subtitle: "Offrande à l'avenir de l'humanité",
    pages: "58",
    content: `Ce protocole est une offrande à l'avenir de l'humanité, une invitation à engendrer non seulement des enfants, mais des consciences libres, alignées, souveraines.

« Soyez parfaits comme votre Père céleste est parfait. »
— Matthieu 5:48

« En vérité, Allah ne modifie point l'état d'un peuple, tant que les individus qui le composent ne modifient pas ce qui est en eux-mêmes. »
— Sourate Ar-Ra'd, 13:11

AlgoQ — 2025`,
  },
};

export function getPhase(id: PhaseId): Phase {
  return BOOK_PHASES[id];
}

export function getPhaseIndex(id: PhaseId): number {
  return PHASE_ORDER.indexOf(id);
}

export function getAdjacentPhases(id: PhaseId): {
  prev: PhaseId | null;
  next: PhaseId | null;
} {
  const index = getPhaseIndex(id);
  return {
    prev: index > 0 ? PHASE_ORDER[index - 1] : null,
    next: index < PHASE_ORDER.length - 1 ? PHASE_ORDER[index + 1] : null,
  };
}
