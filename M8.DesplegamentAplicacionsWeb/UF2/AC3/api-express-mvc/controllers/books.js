// Importamos el modelo de datos
const Library = require('../models/Library')

// DeclaraciÃ³n de controladores 
const getBooks = async (req, res) => {
    try {
        let library = new Library();
        let books = await library.listAll();
        res.json(books);
        library.close();
    } catch (error) {
        console.error("Error getting books:", error);
        res.status(500).json({ error: "Error getting books..." });
    }
};

const createBook = async (req, res) => {
    try {
        let library = new Library();
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };
        let created = await library.create(newBook);
        library.close();

        if (created) {
            res.json({ message: "Book created successfully", id: created });
        } else {
            res.status(500).json({ error: "Error creating book..." });
        }
    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ error: "Error creating book..." });
    }
};

const updateBook = async (req, res) => {
    try {
        let library = new Library();
        const book = {
            id: req.body.id,
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };
        let updated = await library.update(book);
        library.close();

        if (updated) {
            res.json({ message: "Book updated successfully" });
        } else {
            res.status(404).json({ error: "Book not found or not updated" });
        }
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Error updating book..." });
    }
};

const deleteBook = async (req, res) => {
    try {
        let library = new Library();
        let deleted = await library.delete(req.body.id);
        library.close();

        if (deleted) {
            res.json({ message: "Book deleted successfully" });
        } else {
            res.status(404).json({ error: "Book not found or not deleted" });
        }
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Error deleting book..." });
    }
};

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};