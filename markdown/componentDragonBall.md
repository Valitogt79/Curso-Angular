(Due to technical issues, the search service is temporarily unavailable.)

Aquí tienes una documentación ampliada con el código integrado y explicación paso a paso:

````markdown
# Documentación Técnica del Componente DragonBall

## Estructura del Componente

### 1. Archivo TypeScript (`dragonball-page.component.ts`)

```typescript
import { Component, signal, computed } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball-page.component.html",
})
export class DragonballPageComponent {
  // 1. Definición de Signals (Estado Reactivo)
  name = signal("Ghona");
  power = signal(100);

  // 2. Lista de personajes inicial
  characters = signal<Character[]>([
    { id: 1, name: "Goku", power: 9001 },
    { id: 2, name: "Vegeta", power: 9000 },
    { id: 4, name: "Yamcha", power: 500 },
    { id: 3, name: "Piccolo", power: 3000 },
  ]);

  // 3. Método para agregar personaje
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  // 4. Método para resetear campos
  resetFields() {
    this.name.set("");
    this.power.set(0);
  }
}
```
````

### 2. Archivo HTML (`dragonball-page.component.html`)

```html
<h1>DragonBall Page</h1>
<hr />
<section class="row">
  <!-- Columna Izquierda: Formulario -->
  <div class="col-12 col-sm-6">
    <h3>Agregar: {{ name() }}</h3>
    <input
      type="text"
      class="form-control"
      placeholder="Nombre"
      [value]="name()"
      (change)="name.set(txtName.value)"
      (input)="name.set(txtName.value)"
      #txtName
    />
    <h3>{{ power() }}</h3>
    <input
      type="number"
      class="form-control mt-2"
      placeholder="Poder"
      [value]="power()"
      (input)="power.set(+txtPower.value)"
      #txtPower
    />
    <button (click)="addCharacter()" class="btn btn-primary mt-2">
      Agregar
    </button>
  </div>

  <!-- Columna Derecha: Listado -->
  <div class="col-12 col-sm-6">
    <ul>
      @for (character of characters(); track character.id; let idx = $index) {
      @if (character.power > 500) {
      <li>
        <span>{{ idx + 1 }} - {{ character.name }}</span>
        <strong
          [class.text-danger]="character.power > 9000"
          [class.text-primary]="character.power < 9000"
        >
          ({{ character.power }})</strong
        >
      </li>
      } @else {
      <li><strong>Aquí no hay nadie</strong></li>
      } }
    </ul>
  </div>
</section>
```

## Explicación Paso a Paso

### 1. Signals y Estado Reactivo (TS)

```typescript
name = signal("Ghona");
power = signal(100);
characters = signal<Character[]>([]);
```

- **`name`**: Signal que almacena el nombre del personaje (valor inicial 'Ghona')
- **`power`**: Signal para el nivel de poder (valor inicial 100)
- **`characters`**: Signal que contiene el array de personajes

### 2. Binding en Inputs (HTML → TS)

```html
<input
  [value]="name()"                          <!-- Muestra valor actual -->
  (input)="name.set(txtName.value)"         <!-- Actualiza en tiempo real -->
  #txtName                                  <!-- Referencia local -->
/>
```

1. El input muestra el valor actual de `name()` usando interpolación
2. Cada tecla presionada ejecuta `name.set()` para actualizar el signal
3. `#txtName` permite acceder al valor del input directamente

### 3. Renderizado Condicional (HTML)

```html
@for (character of characters(); track character.id) { @if (character.power >
500) {
<!-- Muestra personaje -->
} @else {
<!-- Mensaje alternativo -->
} }
```

- **`@for`**: Itera sobre `characters()` (note los paréntesis para obtener el valor)
- **`track`**: Optimiza el renderizado usando el ID como clave única
- **`@if`**: Muestra condicionalmente según el nivel de poder

### 4. Estilos Dinámicos (HTML)

```html
[class.text-danger]="character.power > 9000"
[class.text-primary]="character.power < 9000"
```

- Aplica clases CSS condicionalmente:
  - Rojo (`text-danger`) si poder > 9000
  - Azul (`text-primary`) si poder < 9000

### 5. Agregar Personaje (TS → HTML)

```typescript
addCharacter() {
  // Validación
  const newCharacter = {
    id: this.characters().length + 1,  // Auto-increment ID
    name: this.name(),                // Obtiene valor actual
    power: this.power()               // Obtiene valor actual
  };
  this.characters.update((list) => [...list, newCharacter]); // Inmutabilidad
}
```

1. Valida que los campos no estén vacíos
2. Crea nuevo objeto `Character` con:
   - ID autoincremental
   - Nombre y poder de los signals actuales
3. `update()` crea un nuevo array (inmutabilidad) agregando el personaje

### 6. Flujo Completo de Interacción

1. **Usuario escribe**:

   - Los eventos `(input)` actualizan los signals `name` y `power`
   - La vista se actualiza automáticamente (`{{ name() }}`)

2. **Usuario hace clic en "Agregar"**:

   ```html
   <button (click)="addCharacter()"></button>
   ```

   - Ejecuta el método que:
     - Valida datos
     - Crea nuevo personaje
     - Actualiza la lista
     - Limpia los campos

3. **La lista se rerenderiza**:
   - El `@for` detecta cambios en `characters()`
   - Muestra los nuevos valores con los estilos condicionales

## Diagrama de Flujo

```
Usuario escribe → (input) → name.set() → Signal actualizado → Vista se actualiza
Usuario hace clic → addCharacter() → Validación → Creación → Actualización de lista
```

## Buenas Prácticas Implementadas

1. **Inmutabilidad**: Uso de `update()` en lugar de `push()`
2. **Reactividad**: Signals garantizan actualizaciones eficientes
3. **Tipado fuerte**: Interfaz `Character` para estructura de datos
4. **Validación**: Verificación de datos antes de agregar
5. **Responsive**: Diseño con clases Bootstrap (`col-sm-6`)

```

```
