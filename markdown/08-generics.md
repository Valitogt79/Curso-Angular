# Función genérica `whatsMyType`

## Descripción

Esta función en TypeScript utiliza **genéricos** para aceptar y devolver valores del mismo tipo. Su principal ventaja es que permite escribir código reutilizable y seguro, garantizando que el tipo de dato de entrada se mantenga en la salida.

## Implementación

```ts
export function whatsMyType<T>(argument: T): T {
  return argument;
}
```

- `<T>`: Define un **parámetro de tipo genérico**.
- `argument: T`: Recibe un argumento de cualquier tipo `T`.
- `: T`: Retorna un valor del mismo tipo que el argumento.

## Ejemplos de uso

### Uso con `string`

```ts
const amIString = whatsMyType<string>("Hello World!");
console.log(amIString.split(" ")); // ["Hello", "World!"]
```

### Uso con `number`

```ts
const amINumber = whatsMyType<number>(100);
console.log(amINumber.toFixed()); // "100"
```

### Uso con `Array<number>`

```ts
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);
console.log(amIArray.join(" - ")); // "1 - 2 - 3 - 4 - 5"
```

## Ventajas de los genéricos

- **Reutilización de código**: Se puede usar la misma función con diferentes tipos.
- **Seguridad de tipos**: Previene errores en tiempo de compilación.
- **Mejor legibilidad y mantenimiento**.

## Conclusión

Los genéricos en TypeScript son una herramienta poderosa que permite escribir funciones flexibles y seguras, adaptándose a distintos tipos sin perder la validación de tipos del lenguaje.
