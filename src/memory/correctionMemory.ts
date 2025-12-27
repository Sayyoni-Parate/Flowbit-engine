import { db } from "../db";

export function saveCorrectionMemory(
  vendor: string,
  issue: string,
  action: string
) {
  db.prepare(
    "INSERT INTO correction_memory (vendor, issue, action, confidence) VALUES (?, ?, ?, ?)"
  ).run(vendor, issue, action, 0.6);
}
