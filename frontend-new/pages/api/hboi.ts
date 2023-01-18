// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { filterBeroepstaken } from "../../util/filterBeroepstaken";
import { Beroepstaken } from "../../types/Beroepstaken";
import { getBeroepstaken } from "../../util/getBeroepstaken";
import { Architectuurlaag } from "../../types/Architectuurlaag";
import { Niveau } from "../../types/Niveau";
import { Activiteit } from "../../types/Activiteit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Beroepstaken | { error: string }>
) {
  const { architectuurlaag, activiteit, niveau } = req.query as {
    architectuurlaag: Architectuurlaag;
    activiteit: Activiteit;
    niveau: Niveau;
  };

  // Todo check types of query params

  res.status(200).json(
    filterBeroepstaken(await getBeroepstaken(), {
      architectuurlaag,
      activiteit,
      niveau,
    })
  );
}
