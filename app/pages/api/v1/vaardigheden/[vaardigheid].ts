// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BeroepstaakOrVaardigheid } from "../../../../types/BeroepstakenOrVaardigheden";
import { getBeroepstakenOrVaardigheden } from "../../../../util/getBeroepstakenOrVaardigheden";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BeroepstaakOrVaardigheid | { error: string }>
) {
  const { vaardigheid } = req.query as { [key: string]: string };
  const locale = req.headers["accept-language"]?.startsWith("en") ? "en" : "nl";

  if (locale === "en")
    // disable english translations whilst there are none
    return res.status(501).json({ error: "Locale not implemented yet" });

  const vaardigheden = await getBeroepstakenOrVaardigheden(
    "vaardigheden",
    "nl"
  );

  // if (!(vaardigheid in vaardigheden)) {
  //   res.status(404).json({ error: `Vaardigheid: ${vaardigheid} not found` });
  // }

  res.status(200).json(vaardigheden[vaardigheid]);
}
