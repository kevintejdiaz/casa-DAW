require('dotenv').config(); // Asegúrate de cargar las variables al inicio

let Library;
if (process.env.DB_TYPE === "mysql") {
    Library = require("./LibraryMySQL");
} else if (process.env.DB_TYPE === "mongo") {
    Library = require("./LibraryMongo");
} else {
    throw new Error(`Database type not supported: ${process.env.DB_TYPE}`);
}

module.exports = Library;