// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { filterBeroepstaken } from "../../../util/filterBeroepstaken";
import { BeroepstakenOrVaardigheden } from "../../../types/BeroepstakenOrVaardigheden";
import { getBeroepstakenOrVaardigheden } from "../../../util/getBeroepstakenOrVaardigheden";
import {
  architecture_layers,
  Architectuurlaag,
} from "../../../types/Architectuurlaag";
import { Niveau, niveaus } from "../../../types/Niveau";
import { Activiteit, activities } from "../../../types/Activiteit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeroepstakenOrVaardigheden | { error: string }>
) {
  const { architectuurlaag, activiteit, niveau } = req.query;

  if (
    architectuurlaag &&
    !Array.isArray(architectuurlaag) &&
    !architecture_layers.includes(architectuurlaag as Architectuurlaag)
  ) {
    return res.status(400).json({
      error: `Architectuurlaag: ${architectuurlaag} not in: ${architecture_layers}`,
    });
  }

  if (
    activiteit &&
    !Array.isArray(activiteit) &&
    !activities.includes(activiteit as Activiteit)
  ) {
    return res.status(400).json({
      error: `Activiteit: ${activiteit} not in: ${activities}`,
    });
  }

  if (niveau && !Array.isArray(niveau) && niveaus.includes(niveau as Niveau)) {
    return res.status(400).json({
      error: `Niveau: ${niveau} not in: ${niveaus}`,
    });
  }

  return res.status(200).json(
    filterBeroepstaken(await getBeroepstakenOrVaardigheden("hboi"), {
      architectuurlaag,
      activiteit,
      niveau,
    } as { architectuurlaag?: Architectuurlaag; activiteit?: Activiteit; niveau?: Niveau })
  );
}
