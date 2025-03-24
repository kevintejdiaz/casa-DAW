const { MongoClient } = require('mongodb');
const config = require('../config');  // Asumimos que tienes la URI de MongoDB en el archivo config.js

class LibraryMongo {
    constructor() {
        // Crear cliente de MongoDB
        this.client = new MongoClient(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = null;
        this.booksCollection = null;
    }

    // Conectar a MongoDB
    async connect() {
        try {
            await this.client.connect();
            console.log('✅ Conectado a MongoDB');
            this.db = this.client.db();  // Utiliza la base de datos predeterminada
            this.booksCollection = this.db.collection('books');  // Accede a la colección 'books'
        } catch (error) {
            console.error('❌ Error connecting to MongoDB:', error);
            process.exit(1);
        }
    }

    // Listar todos los libros
    async listAll() {
        try {
            const books = await this.booksCollection.find().toArray();  // Usamos `find` para obtener todos los libros
            return books;
        } catch (error) {
            console.error('❌ Error fetching books:', error);
            return [];
        }
    }

    // Obtener un libro por ID
    async getById(bookId) {
        try {
            const book = await this.booksCollection.findOne({ _id: new require('mongodb').ObjectId(bookId) }); // Buscar por ID
            return book;
        } catch (error) {
            console.error('❌ Error fetching book by ID:', error);
            return null;
        }
    }

    // Crear un nuevo libro
    async create(newBook) {
        try {
            const result = await this.booksCollection.insertOne(newBook);  // Insertamos un libro en la colección
            return result.insertedId;  // Devuelve el ID del libro insertado
        } catch (error) {
            console.error('❌ Error inserting book:', error);
            return null;
        }
    }

    // Actualizar un libro existente
    async update(book) {
        try {
            const result = await this.booksCollection.updateOne(
                { _id: new require('mongodb').ObjectId(book.id) }, // Buscar por ID
                { $set: book }  // Actualizar los campos del libro
            );
            return result.modifiedCount > 0;  // Retorna true si el libro fue actualizado
        } catch (error) {
            console.error('❌ Error updating book:', error);
            return false;
        }
    }

    // Eliminar un libro por ID
    async delete(bookId) {
        try {
            const result = await this.booksCollection.deleteOne({ _id: new require('mongodb').ObjectId(bookId) });
            return result.deletedCount > 0;  // Retorna true si el libro fue eliminado
        } catch (error) {
            console.error('❌ Error deleting book:', error);
            return false;
        }
    }

    // Cerrar la conexión
    async close() {
        await this.client.close();
        console.log('✅ Conexión cerrada con MongoDB');
    }
}

module.exports = new LibraryMongo();
