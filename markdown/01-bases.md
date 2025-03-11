# Instalación y Configuración de Angular 19

Este documento proporciona una guía paso a paso para instalar Angular 19 y crear un nuevo proyecto.

## 1. Verificar la versión de Node.js

Angular requiere Node.js para ejecutarse. Verifica que tienes una versión compatible:

```sh
node -v
```

Si no tienes Node.js instalado o necesitas actualizarlo, descárgalo desde [nodejs.org](https://nodejs.org/).

## 2. Instalar Angular CLI

Para instalar la última versión de Angular CLI globalmente, ejecuta:

```sh
npm install -g @angular/cli@latest
```

## 3. Verificar la instalación de Angular CLI

Después de la instalación, verifica que Angular CLI está correctamente instalado con:

```sh
ng version
```

Esto mostrará la versión instalada de Angular CLI y sus dependencias.

## 4. Crear un nuevo proyecto Angular

Para generar un nuevo proyecto, usa el siguiente comando:

```sh
ng new nombre-del-proyecto
```

Durante la configuración, selecciona:

- **Estilos:** CSS
- **SSR (Server-Side Rendering):** No

## 5. Iniciar el servidor de desarrollo

Una vez creado el proyecto, accede a la carpeta del mismo:

```sh
cd nombre-del-proyecto
```

Luego, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```sh
ng serve -o
```

Este comando:

- Compila la aplicación.
- Inicia un servidor local en `http://localhost:4200/`.
- Abre automáticamente el navegador con la aplicación.

## 6. Verificar la Instalación

Si todo está correctamente configurado, deberías ver la página de inicio predeterminada de Angular en tu navegador.

¡Listo! Ahora puedes comenzar a desarrollar tu aplicación con Angular 19.
