import path from "path";
import fsPromises from "fs/promises";
import { Beroepstaken } from "../types/Beroepstaken";

export async function getBeroepstaken(): Promise<Beroepstaken> {
  const filePath = path.join(process.cwd(), "data/hboi.json");
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}
