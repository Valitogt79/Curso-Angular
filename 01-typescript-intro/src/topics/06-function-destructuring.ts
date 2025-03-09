// Desestructuración de funciones
interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Samsung Galaxy S10",
  price: 1000.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 500.0,
};

interface taxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: taxCalculationOptions): [number, number] {
// function taxCalculation({ tax, products }: taxCalculationOptions): [number, number] {

function taxCalculation(options: taxCalculationOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}
const shoppingCart = [phone, tablet];

const tax = 0.16;

const [total, taxTotal] = taxCalculation({
  tax: tax,
  products: shoppingCart,
});

console.log("Total", total);
console.log("tax", taxTotal);

export {};
