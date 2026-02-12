export function CommaOnNumbers(total?: number) {
  if (total === undefined || total === null) return "0";

  return new Intl.NumberFormat('en-US').format(total);
}
