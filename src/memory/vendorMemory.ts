import { db } from "../db";

export interface VendorMemory {
  id: number;
  vendor: string;
  pattern: string;
  targetField: string;
  confidence: number;
}

export function getVendorMemories(vendor: string): VendorMemory[] {
  return db
    .prepare("SELECT * FROM vendor_memory WHERE vendor = ?")
    .all(vendor) as VendorMemory[];
}

export function saveVendorMemory(
  vendor: string,
  pattern: string,
  targetField: string
) {
  const existing = db
    .prepare(
      "SELECT * FROM vendor_memory WHERE vendor = ? AND pattern = ?"
    )
    .get(vendor, pattern) as VendorMemory | undefined;

  if (existing) {
    db.prepare(
      "UPDATE vendor_memory SET confidence = confidence + 0.1 WHERE id = ?"
    ).run(existing.id);
  } else {
    db.prepare(
      "INSERT INTO vendor_memory (vendor, pattern, targetField, confidence) VALUES (?, ?, ?, ?)"
    ).run(vendor, pattern, targetField, 0.6);
  }
}
