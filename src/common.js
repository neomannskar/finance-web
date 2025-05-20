export function formatCurrency(x) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  }).format(x);
}
