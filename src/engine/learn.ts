import { saveVendorMemory } from "../memory/vendorMemory";

export function learn(invoice: any, correction: any) {
  if (!invoice?.vendor) return;

  saveVendorMemory(
    invoice.vendor,
    correction.pattern,
    correction.targetField
  );
}
