# Componentes Angular para un Navbar

## 1. `navbar.component.ts`

### Descripción

Este es el componente TypeScript para la barra de navegación (`NavbarComponent`). Define la estructura y el comportamiento del componente de navegación.

### Código

```typescript
import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {}
```

### Explicación

- **`@Component`**: Este decorador define la metadata del componente.

  - **`selector: 'app-navbar'`**: Define el selector que se usará en el HTML para incluir este componente.
  - **`imports: [RouterLink, RouterLinkActive]`**: Importa las directivas `RouterLink` y `RouterLinkActive` de Angular Router, que permiten la navegación y la activación de estilos basados en la ruta actual.
  - **`templateUrl: './navbar.component.html'`**: Especifica la plantilla HTML que se utilizará para este componente.

- **`NavbarComponent`**: La clase del componente, que en este caso está vacía ya que no requiere lógica adicional.

## 2. `navbar.component.html`

### Descripción

Este archivo contiene la plantilla HTML y los estilos CSS para la barra de navegación.

### Código

```html
<style>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #212121;
    color: white;
    padding: 10px;
  }
  nav a {
    text-decoration: none;
    color: white;
  }
  nav a.active {
    color: #f44336;
  }
</style>
<nav>
  <a
    routerLink="/"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }"
    >Contador</a
  >
  <a [routerLink]="['/hero']" [routerLinkActive]="'active'">Hero</a>
  <a [routerLink]="['/dragonball']" [routerLinkActive]="'active'">Dragonball</a>
</nav>
```

### Explicación

- **Estilos CSS**:

  - **`nav`**: Define un contenedor flexible (`flex`) que distribuye el espacio alrededor de los elementos hijos. Tiene un fondo oscuro (`#212121`) y texto blanco.
  - **`nav a`**: Estilo para los enlaces dentro de la barra de navegación. Elimina el subrayado predeterminado y establece el color del texto en blanco.
  - **`nav a.active`**: Cambia el color del texto a rojo (`#f44336`) cuando el enlace está activo (es decir, cuando la ruta coincide).

- **Estructura HTML**:
  - **`<nav>`**: Contenedor principal de la barra de navegación.
  - **`<a>`**: Enlaces de navegación que utilizan `routerLink` para definir la ruta a la que apuntan.
    - **`routerLink="/"`**: Enlace a la ruta raíz (`/`).
    - **`routerLinkActive="active"`**: Aplica la clase `active` cuando la ruta coincide.
    - **`[routerLinkActiveOptions]="{ exact: true }"`**: Asegura que la clase `active` solo se aplique cuando la ruta sea exactamente `/`.
    - **`[routerLink]="['/hero']"`**: Enlace a la ruta `/hero`.
    - **`[routerLink]="['/dragonball']"`**: Enlace a la ruta `/dragonball`.

## 3. `app.component.ts`

### Descripción

Este es el componente principal de la aplicación (`AppComponent`). Define la estructura básica de la aplicación y cómo se integran otros componentes.

### Código

```typescript
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Oswaldo Alonzo";
}
```

### Explicación

- **`@Component`**: Define la metadata del componente principal.

  - **`selector: 'app-root'`**: El selector que se usa en el HTML principal (`index.html`) para incluir este componente.
  - **`imports: [RouterOutlet, NavbarComponent]`**: Importa `RouterOutlet` para manejar la navegación y `NavbarComponent` para incluir la barra de navegación.
  - **`templateUrl: './app.component.html'`**: Especifica la plantilla HTML que se utilizará para este componente.

- **`AppComponent`**: La clase del componente principal.
  - **`title = 'Oswaldo Alonzo';`**: Define una propiedad `title` que puede ser utilizada en la plantilla HTML.

## 4. `app.component.html`

### Descripción

Este archivo contiene la plantilla HTML para el componente principal de la aplicación.

### Código

```html
<app-navbar />
<section class="mx-5 mt-2">
  <router-outlet />
</section>
```

### Explicación

- **`<app-navbar />`**: Incluye el componente `NavbarComponent` en la aplicación.
- **`<section class="mx-5 mt-2">`**: Define una sección con márgenes laterales (`mx-5`) y un margen superior (`mt-2`).
- **`<router-outlet />`**: Es un marcador de posición donde Angular insertará el contenido de la ruta actual.

## Relación entre los Componentes

1. **`AppComponent`** es el componente principal de la aplicación. Contiene:

   - **`NavbarComponent`**: La barra de navegación que se muestra en la parte superior de la aplicación.
   - **`RouterOutlet`**: Donde se renderizan los componentes correspondientes a las rutas definidas.

2. **`NavbarComponent`** es un componente reutilizable que proporciona la navegación entre diferentes rutas:

   - **`routerLink`**: Define las rutas a las que se puede navegar (`/`, `/hero`, `/dragonball`).
   - **`routerLinkActive`**: Resalta el enlace activo cuando la ruta coincide.

3. **`RouterOutlet`** en `AppComponent` es el punto donde se cargan los componentes correspondientes a las rutas definidas en `NavbarComponent`.

## Conclusión

- **`NavbarComponent`** maneja la navegación entre las diferentes secciones de la aplicación.
- **`AppComponent`** es el contenedor principal que integra la barra de navegación y el contenido dinámico basado en la ruta actual.
- La navegación se gestiona mediante `RouterLink` y `RouterLinkActive`, que permiten cambiar entre rutas y resaltar la ruta activa.

Esta estructura es típica en aplicaciones Angular, donde los componentes se organizan de manera modular y reutilizable, y la navegación se maneja mediante el enrutador de Angular.
