require('dotenv').config(); // Esto reemplaza el require anterior

let Library;
if (config.DB_TYPE === "mysql") {
    Library = require("./LibraryMySQL");
} else if (config.DB_TYPE === "mongodb") {
    Library = require("./LibraryMongo");
} else {
    throw new Error("Database type not supported");
}

module.exports = Library;
