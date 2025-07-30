1. Registra una cuenta nueva en seminuevos.com manualmente.
2. Desarrolla un REST API en Node.js, Express.js y Puppeteer.
1. Debe tener un solo endpoint que publique un anuncio en seminuevos.com,
haciendo lo siguiente:
1. Abrir un navegador en modo headless y navegar a seminuevos.com
2. Iniciar sesión en el sitio
3. Publicar un anuncio con las siguientes características:
1. Tipo: autos
2. Marca: Acura
3. Modelo: ILX
4. Subtipo: Sedán
5. Año: 2018
6. Estado: Nuevo León
7. Ciudad/Delegación: Monterrey
8. Recorrido: 20000 kms
9. Precio: [INPUT DE USUARIO]
10. Transacción: Negociable
11. Descripción: [INPUT DE USUARIO]
12. Imágenes: Sube 3 fotos, las que sean.
13. Paquete: Free
4. Guardar un screenshot del anuncio publicado

3. Desarrolla una aplicación web con React.js y Material-UI que haga lo siguiente:
1. Debe mostrar un input para que el usuario escriba el precio del anuncio a
publicar
2. Debe mostrar un textarea para que el usuario escriba la descipción del anuncio a
publicar
3. Debe mostrar un botón de "Publicar"
4. Al hacer clic en el botón, debe mostrar un indicador al usuario que está
publicando el anuncio y se debe llamar al API desarrollada para iniciar el
proceso de publicación
5. Al terminar el proceso de publicación, debe mostrar al usuario el screenshot de
su anuncio publicado.

Notas:
● No es necesario alojar la aplicación en ningún servidor remoto, la prueba la correremos
localmente.
● Envía tu código en un repositorio público de tu controlador de versiones con
instrucciones de cómo ejecutar la prueba.