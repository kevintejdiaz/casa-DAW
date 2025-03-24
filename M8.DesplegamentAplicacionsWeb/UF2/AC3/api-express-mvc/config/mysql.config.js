require('dotenv').config();  // Cargar las variables de entorno del archivo .env

module.exports = {
  host: process.env.MYSQL_HOST || 'localhost',  // Usa 'localhost' como valor predeterminado
  user: process.env.MYSQL_USER || 'root',  // Usa 'root' como valor predeterminado
  password: process.env.MYSQL_PASSWORD || '',  // Usa una cadena vacía si no está definida
  database: process.env.MYSQL_DB || 'books',  // Usa 'books' como valor predeterminado
};
