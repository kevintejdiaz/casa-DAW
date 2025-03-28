// Importamos el modelo de datos
const Library = require('../models/Library');

// Declaración de controladores 
const getBooks = async (req, res) => {
    try {
        // Instanciamos un modelo Library
        let library = new Library();
        // Lo usamos para listar libros
        let books = await library.listAll();
        res.json(books);
        library.close();
    } catch {
        res.json("Error getting books...");
    }
};

const createBook = async (req, res) => {
    try {
        // Instanciamos un modelo Library
        let library = new Library();

        // Creamos un libro nuevo
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Usamos el modelo Library para crear libro
        let created = await library.create(newBook);
    
        if (created) {
            console.log("Book created successfully");
            res.json({ message: "Book created successfully" });
        } else {
            console.log("Error creating new book...");
            res.json({ message: "Error creating new book..." });
        }
        library.close();
    } catch {
        console.log("Error creating new book...");
        res.json({ message: "Error creating new book..." });
    }
};

const updateBook = async (req, res) => {
    try {
        let library = new Library();
        let updated = await library.update(req.body);

        if (updated) {
            console.log("Book updated successfully");
            res.json({ message: "Book updated successfully" });
        } else {
            console.log("Error updating book...");
            res.json({ message: "Error updating book..." });
        }
        library.close();
    } catch {
        console.log("Error updating book...");
        res.json({ message: "Error updating book..." });
    }
};

const deleteBook = async (req, res) => {
    try {
        let library = new Library();
        let deleted = await library.delete(req.body.id);

        if (deleted) {
            console.log("Book deleted successfully");
            res.json({ message: "Book deleted successfully" });
        } else {
            console.log("Error deleting book...");
            res.json({ message: "Error deleting book..." });
        }
        library.close();
    } catch {
        console.log("Error deleting book...");
        res.json({ message: "Error deleting book..." });
    }
};

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};