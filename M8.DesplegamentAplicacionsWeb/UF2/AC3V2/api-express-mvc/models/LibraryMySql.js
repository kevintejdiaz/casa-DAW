const mysql = require('mysql2/promise');
const config = require('../config/mysql.config.js');

class LibraryMySQL {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
    }

    async listAll() {
        try {
            const conn = await this.connection;
            const [books] = await conn.execute('SELECT * FROM books');
            return books;
        } catch (error) {
            console.error("Error listing books:", error);
            throw error;
        }
    }

    async create(book) {
        try {
            // Validación de campos obligatorios
            if (!book.title || !book.author || book.year === undefined) {
                throw new Error("Missing required fields: title, author, or year");
            }
    
            const conn = await this.connection;
            
            // Si tu tabla tiene id AUTO_INCREMENT, omite el id en el INSERT
            const [result] = await conn.execute(
                'INSERT INTO books (title, author, year) VALUES (?, ?, ?)',
                [book.title, book.author, book.year]
            );
            
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error creating book:", error.message);
            throw error;
        }
    }

    async update(book) {
        try {
            const conn = await this.connection;
            const [result] = await conn.execute(
                'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?',
                [book.title, book.author, book.year, book.id]  // book.id como último parámetro
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error updating book:", error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const conn = await this.connection;
            const [result] = await conn.execute(
                'DELETE FROM books WHERE id = ?',
                [id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error deleting book:", error);
            throw error;
        }
    }

    close() {
        this.connection.then(conn => conn.end()).catch(err => console.error("Error closing connection:", err));
    }
}

module.exports = LibraryMySQL;