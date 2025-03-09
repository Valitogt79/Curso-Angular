## Explicación Paso a Paso del Código en TypeScript

```typescript
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
```

## Desestructuración de Funciones en TypeScript

### 1. Definición de la Interfaz `Product`

```typescript
interface Product {
  description: string;
  price: number;
}
```

- Define la estructura de un producto con:
  - `description`: una cadena con la descripción del producto.
  - `price`: un número que representa su precio.

### 2. Creación de Objetos `phone` y `tablet`

```typescript
const phone: Product = {
  description: "Samsung Galaxy S10",
  price: 1000.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 500.0,
};
```

- Se crean dos objetos `phone` y `tablet` basados en la interfaz `Product`.

### 3. Definición de la Interfaz `taxCalculationOptions`

```typescript
interface taxCalculationOptions {
  tax: number;
  products: Product[];
}
```

- Esta interfaz modela los datos requeridos por la función `taxCalculation`.
  - `tax`: representa el impuesto como número decimal.
  - `products`: un arreglo de productos.

### 4. Implementación de `taxCalculation`

```typescript
function taxCalculation(options: taxCalculationOptions): [number, number] {
  const { tax, products } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}
```

- Recibe un objeto `options` que contiene `tax` y `products`.
- Usa **desestructuración** para extraer `tax` y `products` dentro de la función.
- Calcula el `total` sumando los precios de todos los productos.
- Retorna una **tupla** con dos valores:
  - El total de los productos.
  - El impuesto calculado (`total * tax`).

### 5. Llamada a la Función y Almacenamiento de Resultados

```typescript
const shoppingCart = [phone, tablet];
const tax = 0.16;
const [total, taxTotal] = taxCalculation({ tax: tax, products: shoppingCart });
```

- Se define `shoppingCart` con los productos creados.
- Se establece la tasa de impuesto en `0.16` (16%).
- Se llama a `taxCalculation`, y el resultado se desestructura en `total` y `taxTotal`.

### 6. Impresión de Resultados

```typescript
console.log("Total", total);
console.log("tax", taxTotal);
```

- Imprime en consola los valores calculados.

### 📌 Resumen

✅ Uso de **interfaces** para estructurar datos.  
✅ **Desestructuración** en parámetros de funciones.  
✅ Uso de **tuplas** (`[number, number]`) como retorno.  
✅ **Iteración con `forEach`** para calcular el total.  
✅ **Almacenamiento e impresión** de valores calculados.
