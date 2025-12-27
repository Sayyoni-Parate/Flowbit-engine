export interface VendorMemory {
  id: number;
  vendor: string;
  pattern: string;
  targetField: string;
  confidence: number;
  usageCount: number;
}

import { db } from "../db";

export function getVendorMemories(vendor: string): VendorMemory[] {
  return db.prepare(
    "SELECT * FROM vendor_memory WHERE vendor = ?"
  ).all(vendor) as VendorMemory[];
}


export function saveVendorMemory(
  vendor: string,
  pattern: string,
  targetField: string
) {
  const existing = db.prepare(
  "SELECT * FROM vendor_memory WHERE vendor = ? AND pattern = ?"
).get(vendor, pattern) as VendorMemory | undefined;


  db.prepare(`
  CREATE TABLE IF NOT EXISTS vendor_memory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vendor TEXT NOT NULL,
    pattern TEXT NOT NULL,
    targetField TEXT NOT NULL,
    confidence REAL DEFAULT 0.5,
    usageCount INTEGER DEFAULT 0
  )
`).run();

}
