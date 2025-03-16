const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

class LibraryMongo {
    constructor() {
        if (process.env.DB_TYPE === 'mongo') {
            this.dbPromise = MongoClient.connect(process.env.MONGO_URI)
                .then(client => {
                    this.db = client.db();
                    this.client = client;
                    console.log("Connected to MongoDB database.");
                })
                .catch(err => {
                    console.error("Error connecting to MongoDB:", err);
                });
        }
    }

    async ensureMongoConnection() {
        if (!this.db) {
            await this.dbPromise;
        }
    }

    async listAll() {
        if (process.env.DB_TYPE === 'mongo') {
            await this.ensureMongoConnection();
            const books = await this.db.collection("books").find().toArray();
            return books.map(book => ({
                id: book._id.toString(),
                title: book.title,
                author: book.author,
                year: book.year
            }));
        }
        return [];
    }

    async getById(bookId) {
        if (process.env.DB_TYPE === 'mongo') {
            await this.ensureMongoConnection();
            const book = await this.db.collection("books").findOne({ _id: new ObjectId(bookId) });
            return book ? { id: book._id.toString(), title: book.title, author: book.author, year: book.year } : null;
        }
        return null;
    }

    async create(newBook) {
        if (process.env.DB_TYPE === 'mongo') {
            await this.ensureMongoConnection();
            const result = await this.db.collection("books").insertOne(newBook);
            return result.insertedId.toString();
        }
        return null;
    }

    async update(book) {
        if (process.env.DB_TYPE === 'mongo') {
            await this.ensureMongoConnection();
            const result = await this.db.collection("books").updateOne(
                { _id: new ObjectId(book.id) },
                { $set: { title: book.title, author: book.author, year: book.year } }
            );
            return result.matchedCount > 0;
        }
        return false;
    }

    async delete(bookId) {
        if (process.env.DB_TYPE === 'mongo') {
            await this.ensureMongoConnection();
            const result = await this.db.collection("books").deleteOne({ _id: new ObjectId(bookId) });
            return result.deletedCount > 0;
        }
        return false;
    }

    close() {
        if (this.client) {
            this.client.close();
        }
    }
}

module.exports = LibraryMongo;
