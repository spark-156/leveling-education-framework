import { architecture_layers } from "../../types/Architectuurlaag";

describe("Architectuurlaag", () => {
  const ARCHITECTURE_LAYERS = [
    "Gebruikersinteractie",
    "Organisatieprocessen",
    "Infrastructuur",
    "Software",
    "Hardwareinterfacing",
  ];
  it("should not change from predefined definitions", () => {
    expect(architecture_layers).toEqual(ARCHITECTURE_LAYERS);
  });
});
