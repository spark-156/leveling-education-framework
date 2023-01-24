import { getBeroepstakenOrVaardigheden } from "../../util/getBeroepstakenOrVaardigheden";
import { skills } from "../../types/Vaardigheid";
import { niveaus } from "../../types/Niveau";
import { BeroepstakenOrVaardigheden } from "../../types/BeroepstakenOrVaardigheden";
import { architecture_layers } from "../../types/Architectuurlaag";
import { activities } from "../../types/Activiteit";

describe("getBeroepstakenOrVaardigheden", () => {
  const sortedHBOI: string[] = architecture_layers
    .map((architecture_layer) =>
      activities.map((activity) => `${architecture_layer} ${activity}`)
    )
    .flat()
    .sort();
  const sortedSkills = [...skills].sort();
  const sortedNiveaus = [...niveaus].sort();

  function testVaardighedenJSONStructure(result: BeroepstakenOrVaardigheden) {
    const sortedKeys = Object.keys(result).sort();

    expect(sortedKeys.length).toEqual(10);
    expect(sortedKeys).toEqual(sortedSkills);

    for (const [_, skill] of Object.entries(result)) {
      expect(Object.keys(skill).sort()).toEqual(sortedNiveaus);
      for (const [_, niveau] of Object.entries(skill)) {
        expect(typeof niveau.info).toBe("string");
        expect(typeof niveau.title).toBe("string");
      }
    }
  }

  function testHBOIJSONStructure(result: BeroepstakenOrVaardigheden) {
    const sortedKeys = Object.keys(result).sort();

    expect(sortedKeys.length).toEqual(25);
    expect(sortedKeys).toEqual(sortedHBOI);

    for (const [_, hboi] of Object.entries(result)) {
      expect(Object.keys(hboi).sort()).toEqual(sortedNiveaus);
      for (const [_, niveau] of Object.entries(hboi)) {
        expect(typeof niveau.info).toBe("string");
        expect(typeof niveau.title).toBe("string");
      }
    }
  }

  it("should return vaardigheden data in Dutch when no locale is provided", async () => {
    const result = await getBeroepstakenOrVaardigheden("vaardigheden");
    testVaardighedenJSONStructure(result);
    // TODO check if dutch
  });

  it("should return vaardigheden data in English when locale is set to 'en'", async () => {
    const result = await getBeroepstakenOrVaardigheden("vaardigheden", "en");
    testVaardighedenJSONStructure(result);
    // TODO check if english
  });

  it("should return hboi data in Dutch when no locale is provided", async () => {
    const result = await getBeroepstakenOrVaardigheden("hboi");
    testHBOIJSONStructure(result);
    // TODO check if dutch
  });

  it("should return hboi data in English when locale is set to 'en'", async () => {
    const result = await getBeroepstakenOrVaardigheden("hboi", "en");
    testHBOIJSONStructure(result);
    // TODO check if english
  });
});
