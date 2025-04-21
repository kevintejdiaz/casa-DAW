// Library.js
require('dotenv').config();

let Library;
if (process.env.DB_TYPE === "mysql") {
    Library = require("./LibraryMySQL");
} else if (process.env.DB_TYPE === "mongodb") {
    Library = require("./LibraryMongo");
} else {
    throw new Error("Database type not supported");
}

module.exports = Library;