import { getVendorMemories } from "../memory/vendorMemory";

export function recall(invoice: any) {
  if (!invoice?.vendor || !invoice?.rawText) return [];

  return getVendorMemories(invoice.vendor).filter((m) =>
    invoice.rawText.includes(m.pattern)
  );
}
