## Explicación Paso a Paso del Código en TypeScript

```typescript
function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2,
) {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult });

export {};
```

Este código en TypeScript define funciones para realizar operaciones matemáticas, mostrando diferentes formas de declarar funciones y el uso de valores por defecto y opcionales.

### 1. Declaración de una Función Tradicional

```typescript
function addNumbers(a: number, b: number) {
  return a + b;
}
```

- `addNumbers` es una función que:
  - Recibe dos argumentos de tipo `number` (`a` y `b`).
  - Retorna la suma de ambos.
- TypeScript infiere que el tipo de retorno es `number`.

### 2. Declaración de una Función Flecha con Retorno en String

```typescript
const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};
```

- `addNumbersArrow` es una función flecha que:
  - Toma dos argumentos de tipo `number`.
  - Retorna un `string`, indicado por `: string`.
  - Usa plantillas de cadena (`${}`) para convertir el resultado a `string`.

### 3. Función con Parámetros Opcionales y Valor por Defecto

```typescript
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2,
) {
  return firstNumber * base;
}
```

- `multiply` es una función que:
  - Recibe `firstNumber` como `number` (obligatorio).
  - `secondNumber` es opcional (`?` indica que puede estar ausente).
  - `base` tiene un valor por defecto de `2`, lo que significa que si no se proporciona, tomará `2` como valor predeterminado.
  - Retorna el resultado de multiplicar `firstNumber` por `base`.

### 4. Llamadas a las Funciones

```typescript
const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);
```

- `addNumbers(1, 2)` devuelve `3`, almacenado en `result`.
- `addNumbersArrow(1, 2)` devuelve `'3'` (como cadena), almacenado en `result2`.
- `multiply(5)` multiplica `5 * 2` (base por defecto), almacenado en `multiplyResult`.

### 5. Imprimir Resultados en la Consola

```typescript
console.log({ result, result2, multiplyResult });
```

- `console.log()` imprime un objeto con las variables calculadas.
- La salida esperada es:

```json
{
  "result": 3,
  "result2": "3",
  "multiplyResult": 10
}
```

### 6. Exportación Vacía

```typescript
export {};
```

- Define el archivo como un módulo independiente.
- Previene conflictos de nombres en proyectos grandes.

### Conclusión

Este código demuestra:

- Uso de funciones tradicionales y funciones flecha.
- Tipado explícito y retorno de diferentes tipos (`number`, `string`).
- Parámetros opcionales y valores por defecto.
- Manejo adecuado de la impresión en consola para depuración.
