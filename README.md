FASTSHIP - API DE GESTIÓN DE ENVÍOS

DESCRIPCIÓN DEL PROYECTO
- Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB.
- Permite gestionar envios mediante operaciones CRUD.

TECNOLOGÍAS
- Node.js.
- Express.
- MongoDB Atlas.
- Mongoose.
- Thunder Client.



INSTALACIÓN Y EJECUCIÓN
1. Clonar el repositorio:
   git clone https://github.com/WillianJairo07/fastship-api.git
2. Entrar al proyecto:
   cd fastship-api
3. Instalar dependencias:
   npm install
4. Crear archivo .env:
   PORT=5000  
   MONGO_URI=conexion_mongodb
5. Ejecutar el servidor:
   npm run dev

CONFIGURACIÓN DEL ENTORNO (.env)
Para ejecutar el proyecto correctamente, crear un archivo .env en la raíz del proyecto con el siguiente contenido:
PORT=5000  
MONGO_URI=conexion_mongodb

ENDPOINTS
POST    /api/envios      -> Crear envío  
GET     /api/envios      -> Listar envíos  
GET     /api/envios/:id  -> Obtener envío  
PUT     /api/envios/:id  -> Actualizar estado  
DELETE  /api/envios/:id  -> Eliminar envío  

EJEMPLO JSON
{
  "pedidoId": "P004",
  "remitente": "Willian Quispe",
  "destinatario": "Maria Mogrovejo",
  "direccionEntrega": "Av. Ejercito 207",
  "estado": "pendiente"
}

PRUEBAS REALIZADAS
Se realizaron pruebas de todos los endpoints utilizando Thunder Client:
- Creación de envíos (POST)
- Listado de envíos (GET)
- Consulta por ID (GET)
- Actualización de estado (PUT)
- Eliminación de envíos (DELETE)

CONCLUSIONES
1. Se implementó una API REST funcional para la gestión de envíos utilizando Express y MongoDB.
2. La estructura MVC permitió organizar el código de forma escalable y mantenible.
3. Se logró conectar correctamente la aplicación con MongoDB Atlas, permitiendo el almacenamiento y consulta de datos en la nube.
4. Se validó el correcto funcionamiento de la API mediante herramientas como Thunder Client, probando todas las operaciones CRUD.
5. El uso de Mongoose facilitó la definición de esquemas y el manejo de datos dentro de la base de datos.
