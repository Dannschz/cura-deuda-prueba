# cura-deuda-prueba

### Prueba técnica para cura deuda

# Descripción de la app

Se creó un Pokedex (registro de pokemones donde se especifican detalles como los ataques, habilidades, etc.) consumiendo la pokeapi
en dicha app se pueden almacenar pokemones en tu propia pokedex, se hizo un store en redux para almacenar una lista de los pokemones en la pokedex.
Además se muestra una pequeña lista de pokemones que pueden guardar en tu pokedex o buscar mediante un componente de busqueda un pokemon y poder ver todas sus caracteristicas.

## Detalles técnicos

La App se creo usando vite y la plantilla de react con typescrip, me parece que typescript debe usarse en todos los proyectos para añadir mantenibilidad, añadir tipado de variables, entre otras caracteristicas, en general typescrip ayuda a reducir el tiempo de desarrollo.
Se uso sass como preprocesador y se estableció eslint con prettier para el manejo de errores y warnings antes de la ejecución de la app (en tiempo de desarrollo).
Se agregaron comentarios al código para especificar un poco más a fondo los detalles técnicos.

# Instrucciones para desplegar el proyecto en local

- Clonar este repositorio
- Ejecutar en el directorio raíz ```npm install``` para instalar las dependencias
- Finalmente ejecutar ```npm run dev``` para crear el servidor y ejecutar la app en el navegador

No hay consideraciones adicionales como definir variables de entorno porque se declararon constantes dentro de la app que contenian las urls de la pokeapi.

## Aplicación en la nube

En el siguiente link podrás ver la aplicación desplegada en Netlify [pokedex app](https://marvelous-malasada-cbc85e.netlify.app)
