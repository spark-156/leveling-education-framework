export const activities = [
  "Analyseren",
  "Adviseren",
  "Ontwerpen",
  "Realiseren",
  "Manage & Control",
] as const;

export type Activiteit = typeof activities[number];
