export type ErrorCategory = "rate_limit" | "auth" | "server" | "network" | "unknown";

export function classifyError(status: number): ErrorCategory {
  if (status === 429) return "rate_limit";
  if (status === 401 || status === 403) return "auth";
  if (status >= 500) return "server";
  return "unknown";
}

export function userMessage(category: ErrorCategory): string {
  switch (category) {
    case "rate_limit":
      return "Trop de requêtes. Veuillez patienter un moment.";
    case "auth":
      return "Erreur d'authentification. Contactez l'administrateur.";
    case "server":
      return "Le serveur est temporairement indisponible. Réessayez.";
    case "network":
      return "Erreur de connexion. Vérifiez votre réseau.";
    default:
      return "Une erreur est survenue. Réessayez.";
  }
}
