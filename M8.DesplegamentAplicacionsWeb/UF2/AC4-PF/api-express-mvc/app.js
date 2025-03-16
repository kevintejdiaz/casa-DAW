const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');  // Asegúrate de que la ruta esté bien definida

// Instanciación del servidor
const app = express();

// Configurar middleware
app.use(cors());          // para evitar CORS
app.use(express.json());  // para parsear contenido JSON
app.use('/', routes);     // para enrutar peticiones


console.log("DB_TYPE:", process.env.DB_TYPE);
console.log("MYSQL_DATABASE:", process.env.MYSQL_DATABASE);


// Arranque del servidor
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
