// Importamos el modelo de datos y autenticación
const Library = require('../models/Library');
const { generateToken } = require("../mw/auth");

// Declaración de controladores 
const getBooks = async (req, res) => {
    try {
        let library = new Library();
        let books = await library.listAll();
        res.json(books);
        await library.close();
    } catch {
        res.json("Error getting books...");
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
    
        if (created) {
            console.log("Book created successfully");
            res.json({ message: "Book created successfully" });
        } else {
            console.log("Error creating new book...");
            res.json({ message: "Error creating new book..." });
        }
        await library.close();
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
        await library.close();
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
        await library.close();
    } catch {
        console.log("Error deleting book...");
        res.json({ message: "Error deleting book..." });
    }
};

// Nueva ruta para autenticación de usuario
const login = async (req, res) => {
    const { username, password } = req.body;
    const result = await generateToken(username, password);
    
    if (result.error) {
        return res.status(401).json(result);
    }
    
    res.json(result);
};

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    login
};
