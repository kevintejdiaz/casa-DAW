module.exports = {
  DB_TYPE: process.env.DB_TYPE || "mysql", // Usará .env primero
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASSWORD: process.env.DB_PASS || "",
  DB: process.env.DB_NAME || "books",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/library"
};