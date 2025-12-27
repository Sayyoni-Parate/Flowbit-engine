import { getVendorMemories, VendorMemory } from "../memory/vendorMemory";

export function recall(invoice: any) {
  const memories = getVendorMemories(invoice.vendor);

  for (const m of memories) {
    if (
      typeof m.pattern === "string" &&
      invoice.rawText.includes(m.pattern)
    ) {
      return {
        field: m.targetField,
        confidence: m.confidence,
        source: "memory"
      };
    }
  }

  return null;
}
