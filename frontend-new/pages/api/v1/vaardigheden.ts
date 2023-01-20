// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BeroepstakenOrVaardigheden } from "../../../types/BeroepstakenOrVaardigheden";
import { getBeroepstakenOrVaardigheden } from "../../../util/getBeroepstakenOrVaardigheden";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeroepstakenOrVaardigheden | { error: string }>
) {
  res.status(200).json(await getBeroepstakenOrVaardigheden("vaardigheden"));
}
