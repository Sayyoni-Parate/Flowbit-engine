export function decide(memoryResult: any) {
  if (!memoryResult) return "ask_human";

  if (memoryResult.confidence > 0.75) {
    return "auto_apply";
  }

  return "ask_human";
}
