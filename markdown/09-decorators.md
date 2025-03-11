# Decoradores en TypeScript

## Introducción

Este documento explica el uso de **decoradores de clase** en TypeScript, tomando como referencia el siguiente código:

```ts
// Decorators
function classDecorator<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
export class SuperClase {
  public myProperty: string = "Hello123";
  print() {
    console.log("Hola Mundo!");
  }
}

// Mostrando la definición de la clase
console.log(SuperClase);

const myClass = new SuperClase();
console.log(myClass);
```

## Explicación del código

### 1. Decorador `classDecorator`

El decorador `classDecorator` es una función que:

- Recibe como parámetro el **constructor** de la clase decorada.
- Retorna una nueva clase que extiende la original.
- Agrega dos propiedades nuevas: `newProperty` y `hello`.

**Código del decorador:**

```ts
function classDecorator<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}
```

### 2. Aplicación del decorador a `SuperClase`

Se usa `@classDecorator` para modificar la clase `SuperClase`. Esto hace que cuando se instancie `SuperClase`, tenga las nuevas propiedades agregadas por el decorador.

```ts
@classDecorator
export class SuperClase {
  public myProperty: string = "Hello123";
  print() {
    console.log("Hola Mundo!");
  }
}
```

### 3. Verificación de la clase decorada

Se imprime `SuperClase` para ver su definición modificada.

```ts
console.log(SuperClase);
```

### 4. Creación de una instancia de `SuperClase`

```ts
const myClass = new SuperClase();
console.log(myClass);
```

Esto imprime un objeto con las siguientes propiedades:

- `myProperty = "Hello123"` (original)
- `newProperty = "new property"` (agregada por el decorador)
- `hello = "override"` (agregada por el decorador)

## Conclusión

Los decoradores en TypeScript permiten modificar el comportamiento de las clases de manera flexible. En este caso:

- `classDecorator` añade nuevas propiedades a `SuperClase`.
- La instancia de `SuperClase` creada con `new` ya incluye estas propiedades.
- Los decoradores son muy útiles en frameworks como Angular para inyección de dependencias y metaprogramación.
