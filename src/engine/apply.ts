export function apply(invoice: any, memories: any[], audit: any[]) {
  const suggestions: any[] = [];

  if (!invoice?.fields) return suggestions;

  for (const memory of memories) {
    const field = memory.targetField;

    if (invoice.fields[field] == null) {
      suggestions.push({
        field,
        value: "AUTO_FILLED",
        reason: `Vendor memory: '${memory.pattern}' → ${field}`,
        confidence: memory.confidence
      });

      audit.push({
        step: "apply",
        timestamp: new Date().toISOString(),
        details: `Suggested ${field} from vendor memory`
      });
    }
  }

  return suggestions;
}
