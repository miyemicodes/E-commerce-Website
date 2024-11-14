export const usdCurrencyFormatter = (amount) => {
  const intPrice = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(amount);

  return intPrice
}