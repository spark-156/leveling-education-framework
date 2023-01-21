import { BeroepstakenOrVaardigheden } from "../types/BeroepstakenOrVaardigheden";

export function filterBeroepstaken(
  beroepstaken: BeroepstakenOrVaardigheden,
  {
    architectuurlaag,
    activiteit,
    niveau,
  }: {
    architectuurlaag?: string;
    activiteit?: string;
    niveau?: string;
  }
) {
  // Filter beroepstaken based on query paramaters
  let filteredBeroepstaken = beroepstaken;
  if (architectuurlaag) {
    filteredBeroepstaken = Object.fromEntries(
      Object.entries(filteredBeroepstaken).filter(([key]) =>
        key.includes(architectuurlaag)
      )
    );
  }

  if (activiteit) {
    filteredBeroepstaken = Object.fromEntries(
      Object.entries(filteredBeroepstaken).filter(([key]) =>
        key.includes(activiteit)
      )
    );
  }

  if (niveau) {
    for (const key in filteredBeroepstaken) {
      filteredBeroepstaken[key] = {
        [niveau]: filteredBeroepstaken[key][niveau],
      };
    }
  }
  return filteredBeroepstaken;
}
