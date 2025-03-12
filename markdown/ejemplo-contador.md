# Explicación Paso a Paso del Componente Angular `CounterPageComponent`

## 1. Importación del Decorador `Component`

```typescript
import { Component } from "@angular/core";
```

Angular proporciona el decorador `@Component` para definir un componente. Este decorador permite asociar una plantilla HTML, estilos y la lógica del componente.

## 2. Decorador `@Component`

```typescript
@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
```

### Explicación:

- `templateUrl`: Define el archivo HTML que contiene la estructura del componente.
- `styleUrls`: Especifica los archivos CSS que estilizan el componente.

## 3. Definición de la Clase `CounterPageComponent`

```typescript
export class CounterPageComponent {
  counter = 10;
```

- Se define la clase `CounterPageComponent` que representa la lógica del componente.
- Se inicializa una propiedad `counter` con el valor `10`.

## 4. Método `increaseBy`

```typescript
  increaseBy(value: number) {
    this.counter += value;
  }
```

- Este método incrementa el valor de `counter` en la cantidad especificada por `value`.
- Se accede a `this.counter` para modificar su valor.

## 5. Método `resetCounter`

```typescript
  resetCounter() {
    this.counter = 10;
  }
```

- Restablece el valor de `counter` a `10`.
- Se puede utilizar para reiniciar el contador a su estado inicial.

## 6. Estructura del Template HTML

```html
<h1>Counter {{ counter }}</h1>
<hr />
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">Reset</button>
```

### Explicación:

- `<h1>Counter {{ counter }}</h1>`: Muestra el valor actual del contador.
- `<hr />`: Agrega una línea divisoria para mejorar la visualización.
- `<button (click)="increaseBy(1)">+1</button>`: Aumenta el contador en `1` al hacer clic.
- `<button (click)="increaseBy(-1)">-1</button>`: Disminuye el contador en `1` al hacer clic.
- `<button (click)="resetCounter()">Reset</button>`: Reinicia el contador a `10`.

## 7. Estilos Aplicados (`counter-page.component.css`)

```css
button {
  padding: 5px;
  margin: 5px 10px;
  width: 75px;
}
```

### Explicación:

- `padding: 5px;` → Agrega espacio interno dentro de los botones.
- `margin: 5px 10px;` → Agrega espacio externo: `5px` arriba/abajo y `10px` a los lados.
- `width: 75px;` → Define un ancho fijo de `75px` para todos los botones.

## 8. Configuración de Rutas (`app.routes.ts`)

```typescript
import { Routes } from "@angular/router";
import { CounterPageComponent } from "./pages/counter/counter-page.component";

export const routes: Routes = [
  {
    path: "",
    component: CounterPageComponent,
  },
];
```

### Explicación:

- Se define un arreglo de rutas `routes` de tipo `Routes`.
- La ruta `path: ''` (ruta vacía) indica que este componente se mostrará en la raíz de la aplicación.
- `component: CounterPageComponent` define que el componente a renderizar en esta ruta es `CounterPageComponent`.
- Esta configuración permite que cuando un usuario acceda a la URL base de la aplicación (`/`), se muestre directamente el contador.

## 9. Resumen

El componente `CounterPageComponent` en Angular maneja un contador que:

1. Se inicializa en `10`.
2. Puede incrementarse o decrementarse mediante los botones `+1` y `-1`.
3. Puede reiniciarse a `10` mediante el botón `Reset`.
4. Usa estilos CSS para mejorar la apariencia de los botones.
5. Está integrado en la configuración de rutas de la aplicación para que se muestre en la página principal.

Este comportamiento está vinculado a la interfaz de usuario, permitiendo a los usuarios interactuar con el contador de manera sencilla.
