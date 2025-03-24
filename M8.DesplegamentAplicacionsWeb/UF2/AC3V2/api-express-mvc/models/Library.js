const mysql = require("mysql2");
const { MongoClient, ObjectId } = require("mongodb");
const dbConfig = require("../config/mysql.config.js");

class Library {
  constructor() {
    if (process.env.DB_TYPE === "mongo") {
      this.client = new MongoClient(process.env.MONGO_URI);
      this.database = this.client.db("library");
      this.collection = this.database.collection("books");
      console.log("Connected to MongoDB");
    } else {
      let connection = mysql.createConnection({
        host: dbConfig.HOST,
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        database: dbConfig.DB
      });

      connection.connect(error => {
        if (error) throw error;
        console.log("Connected to MySQL");
      });

      this.connection = connection.promise();
    }
  }

  async close() {
    if (process.env.DB_TYPE === "mongo") {
      await this.client.close();
    } else {
      this.connection.end();
    }
  }

  async listAll() {
    if (process.env.DB_TYPE === "mongo") {
      return await this.collection.find({}).toArray();
    } else {
      const [results] = await this.connection.query("SELECT * FROM books");
      return results;
    }
  }

  async create(newBook) {
    if (process.env.DB_TYPE === "mongo") {
      const result = await this.collection.insertOne(newBook);
      return result.insertedId;
    } else {
      const [results] = await this.connection.query("INSERT INTO books SET ?", newBook);
      return results.affectedRows;
    }
  }

  async update(id, updatedBook) {
    if (process.env.DB_TYPE === "mongo") {
      const result = await this.collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedBook }
      );
      return result.modifiedCount;
    } else {
      const [results] = await this.connection.query("UPDATE books SET ? WHERE id = ?", [updatedBook, id]);
      return results.affectedRows;
    }
  }

  async delete(id) {
    if (process.env.DB_TYPE === "mongo") {
      const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount;
    } else {
      const [results] = await this.connection.query("DELETE FROM books WHERE id = ?", [id]);
      return results.affectedRows;
    }
  }
}

module.exports = Library;
