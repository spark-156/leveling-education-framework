// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BeroepstakenOrVaardigheden } from "../../../types/BeroepstakenOrVaardigheden";
import { getBeroepstakenOrVaardigheden } from "../../../util/getBeroepstakenOrVaardigheden";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeroepstakenOrVaardigheden | { error: string }>
) {
  const locale = req.headers["accept-language"]?.startsWith("en") ? "en" : "nl";

  // if (locale === "en")
  //   // disable english translations whilst there are none
  //   return res.status(501).json({ error: "Locale not implemented yet" });

  return res
    .status(200)
    .json(await getBeroepstakenOrVaardigheden("vaardigheden", "nl"));
}
