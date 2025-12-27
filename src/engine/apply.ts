// export function apply(invoice: any, memories: any[], audit: any[]) {
//   const proposedCorrections: string[] = [];

//   for (const mem of memories) {
//     if (mem.confidence >= 0.7) {
//       invoice.fields[mem.targetField] = "AUTO_FILLED";

//       proposedCorrections.push(
//         `Filled ${mem.targetField} using '${mem.pattern}'`
//       );

//       audit.push({
//         step: "apply",
//         timestamp: new Date().toISOString(),
//         details: `Applied vendor memory ${mem.pattern}`
//       });
//     }
//   }

//   return proposedCorrections;
// }

export function apply(invoice: any, memoryResult: any, audit: any[]) {
  if (!memoryResult) return;

  invoice[memoryResult.field] = "AUTO_FILLED";
}
