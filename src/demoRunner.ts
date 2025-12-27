import fs from "fs";
import { recall } from "./engine/recall";
import { apply } from "./engine/apply";
import { decide } from "./engine/decide";

const invoices = JSON.parse(
  fs.readFileSync("./data/invoices_extracted.json", "utf-8")
);

const invoice = invoices[0];
const audit: any[] = [];

audit.push({
  step: "recall",
  timestamp: new Date().toISOString(),
  details: "Recalling memories"
});

const memories = recall(invoice);
const proposedCorrections = apply(invoice, memories, audit);
const requiresHumanReview = decide(invoice.confidence);

const output = {
  normalizedInvoice: invoice.fields,
  proposedCorrections,
  requiresHumanReview,
  reasoning: "Decision based on learned memory",
  confidenceScore: invoice.confidence,
  memoryUpdates: [],
  auditTrail: audit
};

console.log(JSON.stringify(output, null, 2));
