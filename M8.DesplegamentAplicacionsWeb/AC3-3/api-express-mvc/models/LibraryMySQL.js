const mysql = require("mysql2");
require("dotenv").config(); // Cargar variables de entorno

class LibraryMySQL {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB
    }).promise();

    this.connect();
  }

  async connect() {
    try {
      await this.connection.connect();
      console.log("Successfully connected to MySQL database.");
    } catch (error) {
      console.error("MySQL connection error:", error);
      throw error;
    }
  }

  close() {
    this.connection.end();
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
      const [result] = await this.connection.query(
        "INSERT INTO books (title, author, year) VALUES (?, ?, ?)",
        [newBook.title, newBook.author, newBook.year]
      );
      return result.insertId;
    } catch (error) {
      console.error("Error inserting book:", error);
      return null;
    }
  }

  async update(book) {
    try {
      const [result] = await this.connection.query(
        "UPDATE books SET title = ?, author = ?, year = ? WHERE id = ?",
        [book.title, book.author, book.year, book.id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error updating book:", error);
      return false;
    }
  }

  async delete(bookId) {
    try {
      const [result] = await this.connection.query("DELETE FROM books WHERE id = ?", [bookId]);
      return result.affectedRows > 0;
    } catch (error) {
      console.error("Error deleting book:", error);
      return false;
    }
  }
}

module.exports = LibraryMySQL;