const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config(); // Cargar variables de entorno

class LibraryMongo {
  constructor() {
    this.client = new MongoClient(process.env.MONGO_URI, { 
      useUnifiedTopology: true 
    });
    this.dbName = process.env.MONGO_DB; // Nombre de DB desde .env
  }

  async connect() {
    try {
      if (!this.client.topology?.isConnected()) {
        await this.client.connect();
        console.log("Connected to MongoDB");
      }
      return this.client.db(this.dbName).collection("books");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  }

  close() {
    this.client.close();
  }

  async listAll() {
    try {
      const booksCollection = await this.connect();
      return await booksCollection.find().toArray();
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  }

  async create(newBook) {
    try {
      const booksCollection = await this.connect();
      const result = await booksCollection.insertOne(newBook);
      return result.insertedId;
    } catch (error) {
      console.error("Error inserting book:", error);
      return null;
    }
  }

  async update(book) {
    try {
      const booksCollection = await this.connect();
      const result = await booksCollection.updateOne(
        { _id: new ObjectId(book._id) },
        { $set: { title: book.title, author: book.author, year: book.year } }
      );
      return result.modifiedCount > 0;
    } catch (error) {
      console.error("Error updating book:", error);
      return false;
    }
  }

  async delete(bookId) {
    try {
      const booksCollection = await this.connect();
      const result = await booksCollection.deleteOne({ _id: new ObjectId(bookId) });
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Error deleting book:", error);
      return false;
    }
  }
}

module.exports = LibraryMongo;