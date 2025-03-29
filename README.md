# eq3_NextCRUD
Proyecto simple para mostrar conceptos base de Next.js

## Linking and navigating
Ejemplo de componente link en secciones de página principal.
Ejemplo de hook useRouter en botón Cat de página principal.
Ejemplo de redirect en página Fish al hacer una request que no devuelve nada o si no se tiene la API Key.
Ejemplo de Window.history en página Mammals.

## Redirecting
Ejemplo de redirects en next.config.ts.
Ejemplo de NextResponse.redirect en middleware.ts.

## Error handling
Ejemplo de errores esperados y uso de useActionState en página Cat.
Creación de archivos error.tsx y not-found.tsx para errores inesperados.
Para entrar a not-found puede hacerse haciendo clic en la sección Bird de la página principal.
Para entrar a error puede hacerse haciendo clic en la sección Reptiles de la página principal.

## Route groups
Ejemplo con la carpeta (animals) que no impacta en la direccion URL.

## Dynamic routes
Ejemplo con la ruta encyclopedia como optional catch all y sus añadidos (ej: encyclopedia/spiders, encylcopedia/spiders/diet)
