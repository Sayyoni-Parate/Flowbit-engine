import Database from "better-sqlite3";

export const db = new Database("memory.db");

// Vendor Memory
db.prepare(`
  CREATE TABLE IF NOT EXISTS vendor_memory (
    id INTEGER PRIMARY KEY,
    vendor TEXT,
    pattern TEXT,
    targetField TEXT,
    confidence REAL,
    usageCount INTEGER DEFAULT 0
  )
`).run();

// Correction Memory
db.prepare(`
  CREATE TABLE IF NOT EXISTS correction_memory (
    id INTEGER PRIMARY KEY,
    vendor TEXT,
    issue TEXT,
    action TEXT,
    confidence REAL
  )
`).run();

// Resolution Memory
db.prepare(`
  CREATE TABLE IF NOT EXISTS resolution_memory (
    id INTEGER PRIMARY KEY,
    vendor TEXT,
    issue TEXT,
    decision TEXT
  )
`).run();
