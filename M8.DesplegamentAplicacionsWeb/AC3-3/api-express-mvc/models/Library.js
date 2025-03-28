const LibraryMongo = require("./LibraryMongo");
const LibraryMySQL = require("./LibraryMySQL");

class Library {
  constructor(databaseType = "mongo") { // Por defecto usa MongoDB
    if (databaseType === "mongo") {
      this.handler = new LibraryMongo();
    } else if (databaseType === "mysql") {
      this.handler = new LibraryMySQL();
    } else {
      throw new Error("Database type not supported. Use 'mongo' or 'mysql'.");
    }
  }

  async listAll() {
    return this.handler.listAll();
  }

  async create(newBook) {
    return this.handler.create(newBook);
  }

  async update(book) {
    return this.handler.update(book);
  }

  async delete(bookId) {
    return this.handler.delete(bookId);
  }

  close() {
    this.handler.close();
  }
}

module.exports = Library;