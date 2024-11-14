import { usdCurrencyFormatter } from "../../helpers/currencyHelper"

const categoryPriceRaw = [
  {
    id: 50,
    minPrice: 50,
    maxPrice: 100
  },
  {
    id: 100,
    minPrice: 100,
    maxPrice: 500
  },
  {
    id: 500,
    minPrice: 500,
    maxPrice: 1000
  },

]

export const categoryPrice = categoryPriceRaw.map((p) => {
  return {
    ...p,
    priceText: `${usdCurrencyFormatter(p.minPrice)} - ${usdCurrencyFormatter(p.maxPrice)}`,
  }
})