const express = require('express');
const books = require('../controllers/books.js');
const { jwtAuth } = require("../mw/auth");

const router = express.Router();

// Rutas abiertas (sin autenticación)
router.get('/api/books', books.getBooks);
router.post('/api/login', books.login);

// Rutas protegidas con JWT
router.post('/api/books', jwtAuth, books.createBook);
router.put('/api/books', jwtAuth, books.updateBook);
router.delete('/api/books', jwtAuth, books.deleteBook);

module.exports = router;
