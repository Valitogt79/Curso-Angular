# Explicación del Código Angular - Hero Page Component

## 1. Introducción

Este documento explica la relación entre los diferentes archivos del código de Angular presentados. Se analizará el componente `HeroPageComponent`, su plantilla HTML, y las rutas configuradas en la aplicación.

---

## 2. Explicación del Componente `HeroPageComponent`

### **2.1 Importaciones y Decorador `@Component`**

```typescript
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
})
```

- Se importa `Component` desde `@angular/core` para definir el componente.
- Se importa `signal`, que es una nueva API de Angular para manejar estado reactivo.
- `@Component` define un componente y usa la propiedad `templateUrl` para enlazar su archivo de plantilla HTML (`hero-page.component.html`).

### **2.2 Propiedades del Componente**

```typescript
export class HeroPageComponent {
  name = signal('IronMan');
  age = signal(45);
```

- `name` y `age` son variables de estado (`signal`) que almacenan el nombre y la edad del héroe.
- `signal` permite actualizar el valor y hacer que la vista se re-renderice automáticamente cuando cambia.

### **2.3 Métodos del Componente**

```typescript
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }
```

- `getHeroDescription` devuelve una cadena con el nombre y la edad del héroe.

```typescript
  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }
```

- `changeHero` cambia el nombre y la edad del héroe a `Spiderman` y `22` respectivamente.

```typescript
  changeAge() {
    this.age.set(60);
  }
```

- `changeAge` cambia la edad del héroe a `60`.

```typescript
  resetForm() {
    this.name.set('IronMan');
    this.age.set(45);
  }
```

- `resetForm` restablece el nombre y la edad a sus valores iniciales (`IronMan`, `45`).

---

## 3. Explicación de la Plantilla HTML

```html
<h1>{{ name() }}</h1>
```

- Se muestra el nombre del héroe en un encabezado `<h1>`.

### **3.1 Lista de Descripciones**

```html
<dl>
  <td>Nombre:</td>
  <dd>{{ name() }}</dd>

  <td>Edad:</td>
  <dd>{{ age() }}</dd>

  <td>Método:</td>
  <dd>{{ getHeroDescription() }}</dd>

  <td>Capitalizado:</td>
  <dd>{{ name().toUpperCase() }}</dd>
</dl>
```

- Se muestra el nombre, edad, descripción y nombre en mayúsculas.

### **3.2 Botones para Interacciones**

```html
<button (click)="changeHero()" class="btn btn-primary mx-2">
  Cambiar nombre
</button>
```

- Llama al método `changeHero` cuando se hace clic, cambiando el nombre y la edad del héroe.

```html
<button (click)="changeAge()" class="btn btn-primary">Cambiar edad</button>
```

- Llama a `changeAge` para modificar solo la edad.

```html
<button (click)="resetForm()" class="btn btn-primary mx-2">Reset</button>
```

- Llama a `resetForm` para restablecer los valores iniciales.

---

## 4. Configuración de Rutas

### **4.1 Importación de Rutas y Componentes**

```typescript
import { Routes } from "@angular/router";
import { CounterPageComponent } from "./pages/counter/counter-page.component";
import { HeroPageComponent } from "./pages/hero/hero-page.component";
```

- Se importa `Routes` de `@angular/router` para definir las rutas.
- Se importan los componentes `CounterPageComponent` y `HeroPageComponent`.

### **4.2 Definición de las Rutas**

```typescript
export const routes: Routes = [
  {
    path: "",
    component: CounterPageComponent,
  },
  {
    path: "hero",
    component: HeroPageComponent,
  },
];
```

- Se define una ruta principal `''` que carga `CounterPageComponent`.
- Se define la ruta `/hero`, que carga `HeroPageComponent`.
- Esto significa que al acceder a `http://localhost:4200/hero`, se mostrará la página del héroe.

---

## 5. Relación entre los Archivos

1. **`HeroPageComponent`** es un componente de Angular que contiene la lógica de los datos y métodos para gestionar el estado del héroe.
2. **`hero-page.component.html`** es la plantilla que renderiza los datos del componente y maneja la interacción del usuario.
3. **`routes.ts`** define las rutas de la aplicación, permitiendo que `HeroPageComponent` sea accesible en `/hero`.
4. **Cuando el usuario navega a `/hero`**, Angular carga `HeroPageComponent`, muestra los datos en la plantilla y permite la interacción mediante los botones.

---

## 6. Conclusión

Este conjunto de archivos demuestra la estructura modular de Angular, separando la lógica del componente, la interfaz y la configuración de rutas. `signal` se usa para manejar el estado reactivo, y los métodos del componente modifican los valores mostrados en la plantilla. La configuración de rutas permite una navegación sencilla entre diferentes partes de la aplicación.
