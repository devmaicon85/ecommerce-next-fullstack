export function CalculatePriceDiscount(price: number, discountPercentage: number) {
  if (discountPercentage === 0) {
    return price;
  }

  return (price * (100 - discountPercentage)) / 100;
}
