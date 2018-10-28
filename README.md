# Angular Speed

## Precondiciones

* Crear una aplicación Angular 6 con CLI 6
* SPA con Lazy loading
* Con capacidades PWA
* Sin ningún framework css
* Tomar los datos desde los assets adjuntos en esta carpeta
    - Librería de lanzamientos
    - Estados de los lanzamientos
    - Agencias responsables
    - Tipos de misiones

## Funcionalidad

* Página home con listado de Estados de lanzamientos
    - Nombre de estado
    - Enlace a su página
* Enlace a página sobre el estado
    - Botones para ordenar por fecha (más reciente o más antiguo)
    - Un contador con el número de resultados disponibles
    - Listado mostrando los nombres de lanzamiento con enlace a su página
* Al seleccionar un lanzamiento ir a su página de detalle
* Disponer de una barra de estado superior para mostrar un título de página adecuado
    - home: Número de lanzamientos
    - estado: Nombre del estado
    - lanzamiento: Nombre del lanzamiento
 
## Requerimientos

* Uso del patrón contendor / presentadores
* Uso de la estrategia OnPush en los presentadores
* Uso de Redux con NgRX
* Uso de la caché de PWA
* Uso de swUpdate
