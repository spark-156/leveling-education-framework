import { skills } from "../../types/Vaardigheid";

describe("Vaardigheid", () => {
  const SKILLS = [
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
  ];
  it("should not change from predefined definitions", () => {
    expect(skills).toEqual(SKILLS);
  });
});
