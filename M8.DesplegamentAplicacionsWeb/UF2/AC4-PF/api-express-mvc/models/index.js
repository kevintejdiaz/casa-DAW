require('dotenv').config();  // Asegúrate de cargar las variables de entorno

const Library = require('./Library');  // Ajusta la ruta si es necesario

const library = new Library();

// Ejemplo de listar todos los libros
library.listAll()
    .then(books => {
        console.log('Libros en la base de datos:', books);
    })
    .catch(error => {
        console.error('Error al obtener los libros:', error);
    });

// Ejemplo de obtener un libro por ID
const bookId = 1; // Reemplaza con un ID válido
library.getById(bookId)
    .then(book => {
        if (book) {
            console.log('Libro encontrado:', book);
        } else {
            console.log('Libro no encontrado.');
        }
    })
    .catch(error => {
        console.error('Error al obtener el libro:', error);
    });
