const books = require('../api/books');

const getBooks = (req, res) => {
    res.json(books);
};

const createBook = (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

module.exports = {
    getBooks,
    createBook
};
