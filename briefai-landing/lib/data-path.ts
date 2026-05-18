import path from "path";
import { promises as fs } from "fs";

function getDataDir(): string {
  if (process.env.VERCEL) {
    return "/tmp/data";
  }
  return path.join(process.cwd(), "data");
}

export const DATA_DIR = getDataDir();

export function getDataFile(filename: string): string {
  return path.join(DATA_DIR, filename);
}

export async function ensureDataDir(): Promise<void> {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

export async function readJsonFile<T>(filename: string, fallback: T): Promise<T> {
  try {
    const filePath = getDataFile(filename);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return fallback;
  }
}

export async function writeJsonFile<T>(filename: string, data: T): Promise<void> {
  await ensureDataDir();
  const filePath = getDataFile(filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}
