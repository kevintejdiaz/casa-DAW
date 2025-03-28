const mysql = require("mysql2");
require('dotenv').config();

class LibraryMySQL {
    constructor() {
        this.connection = mysql.createConnection({
            host: config.MYSQL.HOST,
            user: config.MYSQL.USER,
            password: config.MYSQL.PASSWORD,
            database: config.MYSQL.DB
        }).promise();
    }

    async listAll() {
        try {
            const [rows] = await this.connection.query("SELECT * FROM books");
            return rows;
        } catch (error) {
            console.error("Error fetching books:", error);
            return [];
        }
    }

    async create(newBook) {
        try {
            const { title, author, year } = newBook;
            const [result] = await this.connection.query(
                "INSERT INTO books (title, author, year) VALUES (?, ?, ?)",
                [title, author, year]
            );
            return result.insertId;
        } catch (error) {
            console.error("Error inserting book:", error);
            return null;
        }
    }

    async getUser(username) {
        try {
            const [rows] = await this.connection.query(
                "SELECT id, username, password FROM users WHERE username = ?",
                [username]
            );
    
            if (rows.length === 0) {
                console.log("Usuario no encontrado en MySQL:", username);
                return null;
            }
    
            console.log("Usuario encontrado en MySQL:", rows[0]);  // 🔹 Ver qué devuelve MySQL
            console.log("Contraseña en MySQL (tipo de dato):", typeof rows[0].password);
    
            return rows[0];
        } catch (error) {
            console.error("Error obteniendo usuario en MySQL:", error);
            return null;
        }
    }    

    async update(book) {
        try {
            const { id, title, author, year } = book;
            const [result] = await this.connection.query(
                "UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?",
                [title, author, year, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error updating book:", error);
            return false;
        }
    }

    async delete(bookId) {
        try {
            const [result] = await this.connection.query(
                "DELETE FROM books WHERE id = ?",
                [bookId]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error("Error deleting book:", error);
            return false;
        }
    }

    close() {
        this.connection.end();
    }
}

module.exports = LibraryMySQL;
