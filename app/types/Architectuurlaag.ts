export const architecture_layers = [
  "Gebruikersinteractie",
  "Organisatieprocessen",
  "Infrastructuur",
  "Software",
  "Hardwareinterfacing",
] as const;

export type Architectuurlaag = typeof architecture_layers[number];
