const connection = require('../config/mysql.config');

class LibraryMySQL {
    async listAll() {
        try {
            const [rows] = await connection.promise().query('SELECT * FROM books');
            return rows;
        } catch (error) {
            console.error('❌ Error fetching books:', error);
            return [];
        }
    }

    async getById(bookId) {
        try {
            const [rows] = await connection.promise().query('SELECT * FROM books WHERE id = ?', [bookId]);
            return rows[0] || null;
        } catch (error) {
            console.error('❌ Error fetching book by ID:', error);
            return null;
        }
    }

    async create(newBook) {
        try {
            const { title, author, year } = newBook;
            const [result] = await connection.promise().query(
                'INSERT INTO books (title, author, year) VALUES (?, ?, ?)', 
                [title, author, year]
            );
            return result.insertId;
        } catch (error) {
            console.error('❌ Error inserting book:', error);
            return null;
        }
    }

    async update(book) {
        try {
            const { id, title, author, year } = book;
            const [result] = await connection.promise().query(
                'UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?', 
                [title, author, year, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('❌ Error updating book:', error);
            return false;
        }
    }

    async delete(bookId) {
        try {
            const [result] = await connection.promise().query(
                'DELETE FROM books WHERE id = ?', 
                [bookId]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('❌ Error deleting book:', error);
            return false;
        }
    }
}

module.exports = new LibraryMySQL();
