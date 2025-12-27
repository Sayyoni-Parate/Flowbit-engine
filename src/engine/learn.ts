import { saveVendorMemory } from "../memory/vendorMemory";

// import { saveVendorMemory } from "../memory/vendorMemory";
// import { saveResolution } from "../memory/resolutionMemory";

// export function learn(invoice: any, corrections: any[]) {
//   for (const c of corrections) {
//     if (c.reason.includes("Leistungsdatum")) {
//       saveVendorMemory(
//         invoice.vendor,
//         "Leistungsdatum",
//         "serviceDate"
//       );
//     }
//   }

//   saveResolution(invoice.vendor, "manual_review", "approved");
// }

export function learn(invoice: any, correction: any) {
  if (
    !invoice?.vendor ||
    !correction?.pattern ||
    !correction?.targetField
  ) {
    console.warn("Invalid learning input, skipping");
    return;
  }

  saveVendorMemory(
    invoice.vendor,
    correction.pattern,
    correction.targetField
  );
}
