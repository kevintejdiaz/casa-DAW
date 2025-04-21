const { MongoClient, ObjectId } = require('mongodb'); // Añadir ObjectId
const config = require('../config/mysql.config.js');

class LibraryMongo {
    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI);
        this.connection = this.client.connect();
    }

    async listAll() {
        try {
            await this.connection;
            const db = this.client.db('library'); // Especificar BD
            const books = await db.collection('books').find().toArray();
            // Transformar _id (ObjectId) a id (string/número) para consistencia con MySQL
            return books.map(book => ({
                id: book._id.toString(), // o Number(book._id) si prefieres números
                title: book.title,
                author: book.author,
                year: book.year
            }));
        } catch (error) {
            console.error("Error listing books:", error);
            throw error;
        }
    }

    async create(book) {
        try {
            await this.connection;
            const db = this.client.db('library');
            // Convertir id numérico (de MySQL) a _id de MongoDB
            const bookToInsert = {
                _id: new ObjectId(), // Generar nuevo ObjectId (o usar book.id si quieres mantener el mismo)
                title: book.title,
                author: book.author,
                year: book.year
            };
            const result = await db.collection('books').insertOne(bookToInsert);
            return result.acknowledged;
        } catch (error) {
            console.error("Error creating book:", error);
            throw error;
        }
    }

    async update(book) {
        try {
            await this.connection;
            const db = this.client.db('library');
            // Convertir id numérico (de MySQL) a ObjectId
            const result = await db.collection('books').updateOne(
                { _id: new ObjectId(book.id) }, // Asume que book.id es un string hexadecimal válido
                { $set: { title: book.title, author: book.author, year: book.year } }
            );
            return result.modifiedCount > 0;
        } catch (error) {
            console.error("Error updating book:", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            await this.connection;
            const db = this.client.db('library');
            const result = await db.collection('books').deleteOne({ _id: new ObjectId(id) });
            return result.deletedCount > 0;
        } catch (error) {
            console.error("Error deleting book:", error);
            throw error;
        }
    }

    close() {
        this.client.close();
    }
}

module.exports = LibraryMongo;