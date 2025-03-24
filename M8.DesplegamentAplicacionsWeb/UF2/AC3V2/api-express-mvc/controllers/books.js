// Importamos el modelo de datos
const Library = require('../models/Library')

// Declaración de controladores 
const getBooks = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});
        // Lo usamos para listar libros
        let books = await library.listAll();
        res.json(books);
        library.close();
    }
    catch{
        res.json("Error getting books...");
    }
})

const createBook = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});

        // Creamos un libro nuevo
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Usamos el modelo Library para crear libro
        let created = await library.create(newBook);
    
        if(created){
            console.log("Product created successfully")
            res.json("Product created successfully")
        }
        else{
            console.log("Error creating new book...")
            res.json("Error creating new book...");
        }
        library.close()
    }
    catch{
        console.log("Error creating new book...")
        res.json("Error creating new book...");
    }
    
})

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
    getBooks: getBooks,
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook
}