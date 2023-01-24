import { niveaus } from "../../types/Niveau";

describe("Niveau", () => {
  const NIVEAUS = ["1", "2", "3", "4"];
  it("should not change from predefined definitions", () => {
    expect(niveaus).toEqual(NIVEAUS);
  });
});
