const { MongoClient, ObjectId } = require("mongodb");
require('dotenv').config();

class LibraryMongo {
    constructor() {
        this.client = new MongoClient(config.MONGODB.URI, { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = null;
        this.collection = null;
    }

    async connect() {
        if (!this.db) {
            await this.client.connect();
            this.db = this.client.db(config.MONGODB.DB);
            this.collection = this.db.collection("books");
            console.log("Connected to MongoDB");
        }
    }

    async listAll() {
        try {
            await this.connect();
            const books = await this.collection.find().toArray();
            
            // Convertir _id de MongoDB a id legible para el frontend
            const booksWithId = books.map(book => ({
                id: book._id.toString(),
                title: book.title,
                author: book.author,
                year: book.year
            }));

            console.log("Books fetched from MongoDB:", booksWithId);
            return booksWithId;
        } catch (error) {
            console.error("Error fetching books:", error);
            return [];
        }
    }

    async create(newBook) {
        try {
            await this.connect();
            const result = await this.collection.insertOne(newBook);
            return result.insertedId;
        } catch (error) {
            console.error("Error inserting book:", error);
            return null;
        }
    }

    async getUser(username) {
        try {
            await this.connect();
            return await this.db.collection("users").findOne({ username: username }); 
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }

    async update(book) {
        try {
            await this.connect();
            const { id, title, author, year } = book;

            if (!ObjectId.isValid(id)) {
                console.error("Invalid ObjectId:", id);
                return false;
            }

            const result = await this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: { title, author, year } }
            );
            return result.modifiedCount > 0;
        } catch (error) {
            console.error("Error updating book:", error);
            return false;
        }
    }

    async delete(bookId) {
        try {
            await this.connect();

            if (!ObjectId.isValid(bookId)) {
                console.error("Invalid ObjectId:", bookId);
                return false;
            }

            const result = await this.collection.deleteOne({ _id: new ObjectId(bookId) });
            return result.deletedCount > 0;
        } catch (error) {
            console.error("Error deleting book:", error);
            return false;
        }
    }

    async close() {
        await this.client.close();
    }
}

module.exports = LibraryMongo;
