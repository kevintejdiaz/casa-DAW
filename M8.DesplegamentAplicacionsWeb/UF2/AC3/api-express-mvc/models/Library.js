const mysql = require("mysql2");
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

class Library {
    constructor() {
        this.dbType = process.env.DB_TYPE;

        if (this.dbType === 'mysql') {
            this.connection = mysql.createConnection(process.env.MYSQL_URI).promise();
            this.connection.connect(error => {
                if (error) throw error;
                console.log("Connected to MySQL database.");
            });
        } else if (this.dbType === 'mongo') {
            this.dbPromise = MongoClient.connect(process.env.MONGO_URI)
                .then(client => {
                    this.db = client.db();
                    this.client = client;
                    console.log("Connected to MongoDB database.");
                })
                .catch(err => {
                    console.error(" Error connecting to MongoDB:", err);
                });
        }
    }

    async ensureMongoConnection() {
        if (this.dbType === 'mongo' && !this.db) {
            await this.dbPromise;
        }
    }

    async listAll() {
        try {
            if (this.dbType === 'mysql') {
                const [rows] = await this.connection.query("SELECT * FROM books");
                return rows;
            } else if (this.dbType === 'mongo') {
                await this.ensureMongoConnection();
                const books = await this.db.collection('books').find().toArray();

                // Convertir _id a id para uniformidad con MySQL
                return books.map(book => ({
                    id: book._id.toString(),
                    title: book.title,
                    author: book.author,
                    year: book.year
                }));
            }
        } catch (error) {
            console.error("Error fetching books:", error);
            return [];
        }
    }

    async getById(bookId) {
        try {
            if (this.dbType === 'mysql') {
                const [rows] = await this.connection.query("SELECT * FROM books WHERE id = ?", [bookId]);
                return rows[0] || null;
            } else if (this.dbType === 'mongo') {
                await this.ensureMongoConnection();
                const book = await this.db.collection('books').findOne({ _id: new ObjectId(bookId) });

                if (!book) return null;

                return {
                    id: book._id.toString(),
                    title: book.title,
                    author: book.author,
                    year: book.year
                };
            }
        } catch (error) {
            console.error("Error fetching book by ID:", error);
            return null;
        }
    }

    async create(newBook) {
        try {
            const { title, author, year } = newBook;
            if (this.dbType === 'mysql') {
                const [result] = await this.connection.query(
                    "INSERT INTO books (title, author, year) VALUES (?, ?, ?)", 
                    [title, author, year]
                );
                return result.insertId;
            } else if (this.dbType === 'mongo') {
                await this.ensureMongoConnection();
                const result = await this.db.collection('books').insertOne({ title, author, year });

                return result.insertedId.toString(); // Devolver el _id como string
            }
        } catch (error) {
            console.error("Error inserting book:", error);
            return null;
        }
    }

    async update(book) {
        try {
            const { id, title, author, year } = book;
            if (this.dbType === 'mysql') {
                const [result] = await this.connection.query(
                    "UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?", 
                    [title, author, year, id]
                );
                return result.affectedRows > 0;
            } else if (this.dbType === 'mongo') {
                await this.ensureMongoConnection();
                const result = await this.db.collection('books').updateOne(
                    { _id: new ObjectId(id) }, 
                    { $set: { title, author, year } }
                );
                return result.matchedCount > 0;
            }
        } catch (error) {
            console.error("Error updating book:", error);
            return false;
        }
    }

    async delete(bookId) {
        try {
            if (this.dbType === 'mysql') {
                const [result] = await this.connection.query(
                    "DELETE FROM books WHERE id = ?", 
                    [bookId]
                );
                return result.affectedRows > 0;
            } else if (this.dbType === 'mongo') {
                await this.ensureMongoConnection();
                const result = await this.db.collection('books').deleteOne({ _id: new ObjectId(bookId) });
                return result.deletedCount > 0;
            }
        } catch (error) {
            console.error("Error deleting book:", error);
            return false;
        }
    }

    close() {
        if (this.dbType === 'mysql') {
            this.connection.end();
        } else if (this.dbType === 'mongo' && this.client) {
            this.client.close();
        }
    }
}

module.exports = Library;
