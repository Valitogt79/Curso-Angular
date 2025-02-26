# Angular by Fernando Herrera

Para la instalación de Angular se utiliza `npm`, sin embargo por manejo de paquetes se utilizara `bun`
`npm install -g @angular/cli`

Procedemos a configurar `ng` para que bun sea el manejador de paquetes de angular
`ng config -g cli.packageManager bun`
`bun install -g @angular/cli`

para crear el proyecto procedemos a escribir:
`ng new <<Nombre del proyecto>>`
a las preguntas que nos haga:

- Which stylesheets format would you like to use? -> Sass(SCSS)
- Do you want to enable Server-Side Rendering (SSR) an Static Site Generation (SSG/Prerendering)? -> Y
  esto procedera a crear toda la estructura de carpetas del proyecto a realizar.

## Hojas de Atajos

[Hoja de atajos de Angular](./angular-cheat-sheet.pdf)

## Base teórica sobre Angular

### ¿Qué es TypeScript? -> TypeScript es un super set de JavaScript, esta mas orientada a la programación orientada a objetos

- Una diferencia entre JavaScript y TypeScript es su extensión, JavaScript -> .js TypeScript -> .ts
  **¿Por que utilizar TypeScript?**
- Ofrece tipado estricto.
- Mejora la legibilidad.
- Permite usar características modernas.
- Errores en el editor.
- Sabemos cómo luce.
- Métodos y propiedades de los objetos.

¿Por qué Angular lo usa?

- Angular nos obliga a utilizar @decoradores
- Permite un trabajo uniforme basado en clases y funciones

### Mitos y realidades de Angular

Mito -> Angular es mejor que React, Vue, Svelt, Solid, ...
Mito -> Angular es más ordenado que React, Vue, Svelt, ...
Realidad -> Angular es complicado de aprender
Realidad -> Angular libera versiones a cada rato (cada 6 meses)
Mito -> Las aplicaciones de Angular son muy pesadas
Mito -> Angular no es SEO Friendly
Mito -> Angular no soporta patrones de Redux
Realidad -> las versiones 2,4,5,6 ... es el mismo Angular
Mito -> Sólo puede correr código de TypeScript en mis aplicaciones de Angular
