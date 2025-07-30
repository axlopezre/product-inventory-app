-Primer Paso: run npm install, en la raiz de proyecto

command: npm install

-Segundo paso crearemos el contenedor docker para postgre:
docker run --network=bridge --name postgreSQLContainer -e POSTGRES_PASSWORD=12345 -p 5432:5432 -d postgres

Creamos el contenedor docker de la aplicación inventario productos: 

docker build -t productimage . docker run --network=bridge -p 3001:3001 -d productimage

-Tercer paso: Correr la aplicación completa

command: npm run start-application


----Comentarios Extras


Versiones: Uso la versión 20.12.2 de Node.js; el puerto para el frontend es 4000, el puerto para el backend es 3002 y el puerto 3001 es para docker.


