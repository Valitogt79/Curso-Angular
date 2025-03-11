# Encadenamiento Opcional en TypeScript

## Introducción

Este documento explica el uso del **encadenamiento opcional (`?.`)** en TypeScript a través de un ejemplo práctico.

## Código

```typescript
// Definición de la interfaz Passenger
export interface Passenger {
  name: string;
  children?: string[];
}

// Creación de objetos Passenger
const passenger1: Passenger = {
  name: "Juan",
};

const passenger2: Passenger = {
  name: "Pedro",
  children: ["Laura", "Jose"],
};

// Función para imprimir la cantidad de hijos
const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

// Llamadas a la función
printChildren(passenger1); // Output: "Juan 0"
printChildren(passenger2); // Output: "Pedro 2"
```

## Explicación Paso a Paso

### 1. Definición de la Interfaz `Passenger`

La interfaz `Passenger` define un pasajero con:

- `name`: Un nombre obligatorio de tipo `string`.
- `children`: Una propiedad opcional (`?`) que, si está presente, es un array de `string`.

### 2. Creación de Objetos `Passenger`

Se crean dos objetos:

- `passenger1` solo tiene un nombre.
- `passenger2` tiene un nombre y una lista de hijos.

### 3. Uso del Encadenamiento Opcional (`?.`)

En la función `printChildren`, usamos `passenger.children?.length` para obtener la cantidad de hijos:

- Si `children` existe, devuelve la cantidad de elementos.
- Si `children` es `undefined`, devuelve `0` gracias a `|| 0`.

### 4. Salida Esperada

```plaintext
Juan 0
Pedro 2
```

## Beneficios del Encadenamiento Opcional

- Evita errores al acceder a propiedades opcionales.
- Reduce el uso de comprobaciones manuales (`if` o `ternarios`).
- Hace el código más limpio y legible.
