import path from "path";
import fsPromises from "fs/promises";
import { BeroepstakenOrVaardigheden } from "../types/BeroepstakenOrVaardigheden";

export async function getBeroepstakenOrVaardigheden(
  type: "vaardigheden" | "hboi",
  locale?: "nl" | "en"
): Promise<BeroepstakenOrVaardigheden> {
  let file = `${type}-nl.json`;
  if (locale === "en") file = `${type}-en.json`;

  const filePath = path.join(process.cwd(), `data/${file}`);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
