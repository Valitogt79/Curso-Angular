# Explicación paso a paso del código en Angular

## 1. Descripción general

El código presentado es una implementación en Angular de un componente llamado `HeroPageComponent`, que maneja información sobre un héroe y permite modificar su nombre y edad de manera reactiva utilizando `signals` y `computed`.

## 2. Explicación del código TypeScript

```typescript
import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: "./hero-page.component.html",
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal("IronMan");
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set("Spiderman");
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }
  resetForm() {
    this.name.set("IronMan");
    this.age.set(45);
  }
}
```

### 2.1 Importaciones

- `UpperCasePipe`: Se importa para convertir el nombre a mayúsculas en la plantilla.
- `Component`: Decorador para definir el componente.
- `computed`: Permite definir valores reactivos derivados.
- `signal`: Permite definir variables reactivas.

### 2.2 Definición del Componente

El decorador `@Component` indica que este es un componente de Angular. En la configuración del decorador:

- `templateUrl`: Define el archivo HTML asociado al componente.
- `imports`: Especifica que se importa `UpperCasePipe`.

### 2.3 Propiedades

- `name`: Un `signal` que almacena el nombre del héroe (por defecto "IronMan").
- `age`: Un `signal` que almacena la edad del héroe (por defecto 45).
- `heroDescription`: Un `computed` que genera una cadena con el nombre y la edad del héroe.
- `capitalizedName`: Un `computed` que transforma `name` en mayúsculas.

### 2.4 Métodos

- `changeHero()`: Cambia el nombre del héroe a "Spiderman" y la edad a 22.
- `changeAge()`: Cambia la edad del héroe a 60.
- `resetForm()`: Restaura los valores iniciales ("IronMan" y 45).

## 3. Explicación del código HTML

```html
<h1>{{ name() }}</h1>

<dl>
  <dt>Nombre:</dt>
  <dd>{{ name() }}</dd>

  <dt>Edad:</dt>
  <dd>{{ age() }}</dd>

  <dt>Método:</dt>
  <dd>{{ heroDescription() }}</dd>

  <dt>Capitalizado:</dt>
  <!-- <dd>{{ capitalizedName() }}</dd> -->
  <dd>{{ name() | uppercase }}</dd>
</dl>

<button (click)="changeHero()" class="btn btn-primary mx-2">
  Cambiar nombre
</button>

<button (click)="changeAge()" class="btn btn-primary">Cambiar edad</button>

<button (click)="resetForm()" class="btn btn-primary mx-2">Reset</button>
```

### 3.1 Mostrar valores en la vista

- `{{ name() }}`: Muestra el nombre del héroe.
- `{{ age() }}`: Muestra la edad del héroe.
- `{{ heroDescription() }}`: Muestra la combinación del nombre y la edad.
- `{{ name() | uppercase }}`: Convierte el nombre a mayúsculas usando `UpperCasePipe`.

### 3.2 Botones

- **Cambiar nombre**: Llama al método `changeHero()` para cambiar el héroe.
- **Cambiar edad**: Llama a `changeAge()` para modificar la edad.
- **Reset**: Restaura los valores iniciales usando `resetForm()`.

## 4. Conclusión

Este componente de Angular utiliza `signals` y `computed` para manejar datos de forma reactiva. Los `signals` permiten actualizar el estado del componente sin necesidad de `setState` o `ngOnChanges`, facilitando la programación reactiva en Angular. La plantilla HTML muestra los valores reactivos y permite modificarlos con eventos de botón.
