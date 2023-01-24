import { activities } from "../../types/Activiteit";

describe("Activiteit", () => {
  const ACTIVITIES = [
    "Analyseren",
    "Adviseren",
    "Ontwerpen",
    "Realiseren",
    "Manage & Control",
  ];
  it("should not change from predefined definitions", () => {
    expect(activities).toEqual(ACTIVITIES);
  });
});
