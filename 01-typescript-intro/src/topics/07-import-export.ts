import { Product, taxCalculation } from "./06-function-destructuring.ts";
const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100.0,
  },
  {
    description: "Ipad",
    price: 500.0,
  },
];

//Tax = 0.15
const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log("Total", total);
console.log("Tax", tax);
