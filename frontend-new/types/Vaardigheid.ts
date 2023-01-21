export const skills = [
  "Juiste kennis ontwikkelen",
  "Kwalitatief product maken",
  "Overzicht creëren",
  "Kritisch oordelen",
  "Samenwerken",
  "Boodschap delen",
  "Plannen",
  "Flexibel opstellen",
  "Pro-actief handelen",
  "Reflecteren",
] as const;

export type Skill = typeof skills[number];
