import { db } from "../db";

export function saveResolution(
  vendor: string,
  issue: string,
  decision: string
) {
  db.prepare(
    "INSERT INTO resolution_memory (vendor, issue, decision) VALUES (?, ?, ?)"
  ).run(vendor, issue, decision);
}
