import { recall } from "./engine/recall";
import { apply } from "./engine/apply";
import { decide } from "./engine/decide";
import { learn } from "./engine/learn";

// --------------------
// DEMO INVOICE #1
// --------------------
const invoice1 = {
  invoiceId: "INV-A-001",
  vendor: "Supplier GmbH",
  fields: { serviceDate: null },
  rawText:
    "Rechnungsnr: INV-2024-001\nLeistungsdatum: 01.01.2024",
  confidence: 0.75
};

const audit1: any[] = [];
const memories1 = recall(invoice1);
const suggestions1 = apply(invoice1, memories1, audit1);
const review1 = decide(invoice1.confidence);

console.log("\n=== RUN #1 (Before Learning) ===");
console.log({
  invoiceId: invoice1.invoiceId,
  proposedCorrections: suggestions1,
  requiresHumanReview: review1
});

// --------------------
// HUMAN CORRECTION
// --------------------
learn(invoice1, {
  pattern: "Leistungsdatum",
  targetField: "serviceDate"
});

// --------------------
// DEMO INVOICE #2
// --------------------
const invoice2 = {
  invoiceId: "INV-A-002",
  vendor: "Supplier GmbH",
  fields: { serviceDate: null },
  rawText:
    "Rechnungsnr: INV-2024-002\nLeistungsdatum: 15.01.2024",
  confidence: 0.85
};

const audit2: any[] = [];
const memories2 = recall(invoice2);
const suggestions2 = apply(invoice2, memories2, audit2);
const review2 = decide(invoice2.confidence);

console.log("\n=== RUN #2 (After Learning) ===");
console.log({
  invoiceId: invoice2.invoiceId,
  proposedCorrections: suggestions2,
  requiresHumanReview: review2
});
