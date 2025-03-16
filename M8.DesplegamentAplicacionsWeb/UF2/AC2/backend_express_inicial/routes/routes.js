const express = require('express');
const { getBooks, createBook } = require('../controllers/books');

const router = express.Router();

router.get('/api/books', getBooks);
router.post('/api/books', createBook);

module.exports = router;
