const express = require('express');
const books = require('../controllers/books.js'); // Asegúrate de que la ruta esté bien definida

// Instanciación del router
const router = express.Router();

// Configuración de las rutas
router.get('/api/books', books.getBooks);
router.post('/api/books', books.createBook);
router.put('/api/books', books.updateBook);
router.delete('/api/books', books.deleteBook);

module.exports = router;
