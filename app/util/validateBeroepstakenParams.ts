import {
  architecture_layers,
  Architectuurlaag,
} from "../types/Architectuurlaag";
import { Activiteit, activities } from "../types/Activiteit";
import { Niveau, niveaus } from "../types/Niveau";

export function validateBeroepstakenParams({
  architectuurlaag,
  activiteit,
  niveau,
}: {
  architectuurlaag?: string | string[];
  activiteit?: string | string[];
  niveau?: string | string[];
}) {
  if (
    architectuurlaag &&
    !Array.isArray(architectuurlaag) &&
    !architecture_layers.includes(architectuurlaag as Architectuurlaag)
  )
    throw new Error(`${architectuurlaag} is not in ${architecture_layers}`);
  else if (Array.isArray(architectuurlaag))
    throw new Error(`${architectuurlaag} is not allowed to be a list`);

  if (
    activiteit &&
    !Array.isArray(activiteit) &&
    !activities.includes(activiteit as Activiteit)
  )
    throw new Error(`${activiteit} is not in ${activities}`);
  else if (Array.isArray(activiteit))
    throw new Error(`${activiteit} is not allowed to be a list`);

  if (niveau && !Array.isArray(niveau) && !niveaus.includes(niveau as Niveau))
    throw new Error(`${niveau} is not in ${niveaus}`);
  else if (Array.isArray(niveau))
    throw new Error(`${niveau} is not allowed to be a list`);
}
