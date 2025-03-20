# Explicación de los Componentes de la Página de DragonBall

A continuación, se presenta una explicación detallada de los componentes creados para la página de DragonBall. Estos componentes están desarrollados utilizando Angular, un framework de desarrollo web basado en TypeScript.

## 1. `dragonball-page.component.ts`

### Descripción

Este archivo es un componente de Angular que define la lógica y la estructura de la página de DragonBall. En este caso, el componente es bastante simple y no contiene ninguna lógica adicional, ya que solo se encarga de cargar la plantilla HTML asociada.

### Código

```typescript
import { Component } from "@angular/core";

@Component({
  templateUrl: "./dragonball-page.component.html",
})
export class DragonballPageComponent {}
```

### Explicación Paso a Paso

1. **Importación de `Component`**:

   - Se importa el decorador `Component` desde el paquete `@angular/core`. Este decorador se utiliza para definir metadatos que Angular necesita para crear y presentar el componente.

2. **Definición del Componente**:

   - Se utiliza el decorador `@Component` para definir el componente. Dentro de este decorador, se especifica la propiedad `templateUrl`, que indica la ruta del archivo HTML que se utilizará como plantilla para este componente.

3. **Clase `DragonballPageComponent`**:
   - Se define la clase `DragonballPageComponent`. En este caso, la clase está vacía, lo que significa que no contiene ninguna lógica adicional. Sin embargo, en un componente más complejo, aquí se definirían propiedades y métodos que interactúan con la plantilla HTML.

## 2. `dragonball-page.component.html`

### Descripción

Este archivo es la plantilla HTML asociada al componente `DragonballPageComponent`. Define la estructura y el contenido visual de la página de DragonBall.

### Código

```html
<h1>DragonBall Page</h1>
<hr />
<section class="row">
  <div class="col-12 col-sm-6">
    <h3>Agregar:</h3>
    <input type="text" class="form-control" placeholder="Nombre" />
    <input type="number" class="form-control mt-2" placeholder="Poder" />
    <button class="btn btn-primary mt-2">Agregar</button>
  </div>
  <div class="col-12 col-sm-6">
    <h3>Listado</h3>
    <ol>
      <li>Goku</li>
      <li>Goku</li>
      <li>Goku</li>
      <li>Goku</li>
    </ol>
  </div>
</section>
```

### Explicación Paso a Paso

1. **Título de la Página**:

   - Se define un título `<h1>` que dice "DragonBall Page". Este título es el encabezado principal de la página.

2. **Línea Horizontal**:

   - Se añade una línea horizontal `<hr />` para separar visualmente el título del contenido principal.

3. **Sección Principal**:

   - Se define una sección `<section>` con la clase `row`. Esta clase es de Bootstrap y se utiliza para crear una fila que contendrá dos columnas.

4. **Columna de Agregar**:

   - La primera columna `<div class="col-12 col-sm-6">` contiene un formulario para agregar nuevos personajes.
     - **Título**: `<h3>Agregar:</h3>` es el título de esta sección.
     - **Campo de Texto**: `<input type="text" class="form-control" placeholder="Nombre" />` es un campo de texto para ingresar el nombre del personaje.
     - **Campo de Número**: `<input type="number" class="form-control mt-2" placeholder="Poder" />` es un campo de número para ingresar el poder del personaje.
     - **Botón**: `<button class="btn btn-primary mt-2">Agregar</button>` es un botón que, cuando se implemente la lógica, permitirá agregar el personaje a la lista.

5. **Columna de Listado**:
   - La segunda columna `<div class="col-12 col-sm-6">` contiene una lista de personajes.
     - **Título**: `<h3>Listado</h3>` es el título de esta sección.
     - **Lista Ordenada**: `<ol>` contiene varios elementos `<li>` que representan los personajes. En este caso, se han añadido varios "Goku" como elementos de ejemplo.

## Relación entre los Componentes

- **Componente TypeScript (`dragonball-page.component.ts`)**: Este componente define la lógica y la estructura de la página. En este caso, no hay lógica adicional, pero el componente está configurado para cargar la plantilla HTML.

- **Plantilla HTML (`dragonball-page.component.html`)**: Esta plantilla define la estructura visual de la página. El componente TypeScript utiliza esta plantilla para renderizar la página en el navegador.

- **Integración**: Cuando Angular carga la página, el componente `DragonballPageComponent` se instancia y se renderiza utilizando la plantilla HTML asociada. Esto permite que la página muestre el contenido definido en el archivo HTML.

## Próximos Pasos

1. **Agregar Lógica al Componente**:

   - Se puede agregar lógica al componente TypeScript para manejar la entrada del usuario, como agregar nuevos personajes a la lista.

2. **Conectar con un Servicio**:

   - Si se desea almacenar los datos de los personajes en una base de datos o en un servicio backend, se puede crear un servicio Angular para manejar estas operaciones.

3. **Mejorar la Interfaz de Usuario**:
   - Se pueden agregar más estilos y funcionalidades a la interfaz de usuario, como validaciones de formulario, mensajes de error, etc.

Este es un buen punto de partida para una página de DragonBall en Angular. Con estos componentes básicos, se puede seguir construyendo y expandiendo la funcionalidad según sea necesario.
