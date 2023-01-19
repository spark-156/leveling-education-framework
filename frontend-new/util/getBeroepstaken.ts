import path from "path";
import fsPromises from "fs/promises";
import { BeroepstakenOrVaardigheden } from "../types/BeroepstakenOrVaardigheden";

export async function getBeroepstaken(
  locale?: string
): Promise<BeroepstakenOrVaardigheden> {
  let file = "hboi-nl.json";
  if (locale === "en") file = "hboi-en.json";

  const filePath = path.join(process.cwd(), `data/${file}`);
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
