require('dotenv').config();  // Asegúrate de cargar las variables de entorno desde .env
const mysql = require('mysql2');
const dbConfig = require('./mysql.config');  // Importar la configuración de MySQL

class Library {
    constructor() {
        // Usar la configuración desde mysql.config.js
        this.connection = mysql.createConnection(dbConfig);  // Usa la configuración aquí
        
        // Establecer la conexión y manejar errores
        this.connection.connect(err => {
            if (err) {
                console.error('Error connecting to MySQL:', err.stack);
                process.exit(1); // Salir si no se puede conectar
            }
            console.log('✅ Conectado a MySQL');
        });
    }

    // Otros métodos de la clase Library como listAll, getById, etc.
    async listAll() {
        try {
            const [rows] = await this.connection.promise().query('SELECT * FROM books');
            return rows;
        } catch (error) {
            console.error('Error fetching books:', error);
            return [];
        }
    }

    async getById(bookId) {
        try {
            const [rows] = await this.connection.promise().query('SELECT * FROM books WHERE id = ?', [bookId]);
            return rows[0] || null;
        } catch (error) {
            console.error('Error fetching book by ID:', error);
            return null;
        }
    }

    async create(newBook) {
        try {
            const { title, author, year } = newBook;
            const [result] = await this.connection.promise().query(
                'INSERT INTO books (title, author, year) VALUES (?, ?, ?)', 
                [title, author, year]
            );
            return result.insertId; // El ID generado automáticamente por MySQL
        } catch (error) {
            console.error('Error inserting book:', error);
            return null;
        }
    }

    async update(book) {
        try {
            const { id, title, author, year } = book;
            const [result] = await this.connection.promise().query(
                'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?', 
                [title, author, year, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error updating book:', error);
            return false;
        }
    }

    async delete(bookId) {
        try {
            const [result] = await this.connection.promise().query(
                'DELETE FROM books WHERE id = ?', 
                [bookId]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error deleting book:', error);
            return false;
        }
    }

    close() {
        this.connection.end();
    }
}

module.exports = Library;
