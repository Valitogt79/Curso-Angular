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

### 7. Definición de una Interfaz para un Personaje

```typescript
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
```

- `Character` es una interfaz que define:
  - `name`: una cadena que representa el nombre del personaje.
  - `hp`: un número que indica los puntos de vida.
  - `showHp`: una función que no recibe parámetros y no retorna un valor explícito (`void`).

### 8. Función para Curar un Personaje

```typescript
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};
```

- `healCharacter` es una función que:
  - Recibe un objeto de tipo `Character` y un `amount` (cantidad a curar).
  - Incrementa los puntos de vida (`hp`) del personaje en la cantidad indicada.

### 9. Creación de un Personaje y Uso de la Función

```typescript
const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de Vida ${this.hp}`);
  },
};
```

- Se crea `strider` con:
  - `name` como "Strider".
  - `hp` inicial de 50.
  - `showHp` como un método que imprime los puntos de vida actuales.

### 10. Curación del Personaje y Mostrado de Vida

```typescript
healCharacter(strider, 10);
strider.showHp();
```

- Se llama a `healCharacter(strider, 10)`, aumentando su `hp` en 10 (total de 60).
- Se ejecuta `strider.showHp()`, imprimiendo:

```
Puntos de Vida 60
```

### Conclusión

Este código demuestra:

- Uso de interfaces para estructurar objetos en TypeScript.
- Creación y modificación de propiedades de un objeto.
- Uso de funciones con objetos como parámetros.
- Métodos dentro de objetos para manipular sus propios datos.
