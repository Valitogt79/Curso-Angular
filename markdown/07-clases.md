# Clases en TypeScript

## ¿Qué es una Clase en TypeScript?

Una **clase** en TypeScript es una plantilla para crear objetos con propiedades y métodos específicos. Permite encapsular datos y comportamientos relacionados en una estructura organizada y reutilizable.

Las clases en TypeScript soportan:

- **Modificadores de acceso** (`public`, `private`, `protected`).
- **Herencia** (una clase puede extender otra).
- **Constructores** para inicializar propiedades.

## Explicación del Código

### 1. Definición de la Clase `Person`

```typescript
export class Person {
  constructor(
    public name: string,
    private address: string = "No Address",
  ) {}
}
```

#### Explicación:

- Se exporta la clase `Person`, lo que permite su uso en otros archivos.
- `name` es una propiedad **pública**, accesible desde fuera de la clase.
- `address` es una propiedad **privada**, solo accesible dentro de la clase.
- El constructor permite inicializar estas propiedades.
- Si no se proporciona un `address`, tomará el valor por defecto **"No Address"**.

### 2. Creación de la Clase `Hero`

```typescript
export class hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {}
}
```

#### Explicación:

- `hero` es una clase que representa un superhéroe.
- `alterEgo`: nombre de superhéroe (ej. "SpiderMan").
- `age`: edad del héroe.
- `realName`: nombre real de la persona.
- `person`: instancia de la clase `Person`.
- En lugar de extender `Person`, la clase `hero` contiene una instancia de `Person`.

### 3. Creación de Instancias y Uso de las Clases

```typescript
const spiderman = new Person("Peter Parker", "Filadelfia");
const ironman = new hero("SpiderMan", 45, "Tony", spiderman);
console.log(ironman);
```

#### Explicación:

1. Se crea un objeto `spiderman` de la clase `Person` con:
   - `name = "Peter Parker"`
   - `address = "Filadelfia"`
2. Se crea un objeto `ironman` de la clase `hero`, donde:
   - `alterEgo = "SpiderMan"`
   - `age = 45`
   - `realName = "Tony"`
   - `person` es la instancia de `spiderman` (se pasa el objeto `Person`).
3. Se imprime `ironman` en la consola, mostrando su estructura.

### 4. Salida Esperada en Consola

```json
{
  "alterEgo": "SpiderMan",
  "age": 45,
  "realName": "Tony",
  "person": {
    "name": "Peter Parker",
    "address": "Filadelfia"
  }
}
```

## Conclusión

- Se ha utilizado **clases** para modelar una persona y un superhéroe.
- Se han aplicado **modificadores de acceso** (`public`, `private`).
- Se ha demostrado el uso de **composición** (una clase dentro de otra).

Este enfoque facilita la organización y reutilización del código en TypeScript. 🚀
