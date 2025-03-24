const config = require("../config");

// Declarar Library solo una vez
let Library;

if (config.DB_TYPE === 'mysql') {
    Library = require("./LibraryMySQL");
} else if (config.DB_TYPE === 'mongodb') {
    Library = require("./LibraryMongo");
} else {
    throw new Error("Database type not supported");
}

module.exports = Library;
