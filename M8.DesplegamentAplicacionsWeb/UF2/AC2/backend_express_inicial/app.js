const express = require('express');
const bookRoutes = require('./routes/books'); // Asegúrate de que la ruta sea correcta

const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use(bookRoutes);

// Iniciar el servidor
app.listen(5000, () => {
    console.log('Servidor ejecutándose en http://localhost:5000');
});
