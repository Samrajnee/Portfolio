export function levelToFill(level: string): number {
  const order = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const matches = level.match(/[ABC][12]/g) || [];
  const highest = matches.reduce((max, code) => {
    const index = order.indexOf(code);
    return index > max ? index : max;
  }, -1);
  return highest + 1;
}