export const niveaus = ["1", "2", "3", "4"] as const;

export type Niveau = typeof niveaus[number];
