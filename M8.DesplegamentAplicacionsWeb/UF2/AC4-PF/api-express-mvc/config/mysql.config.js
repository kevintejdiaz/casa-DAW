// mysql.config.js
module.exports = {
  host: process.env.MYSQL_HOST || 'localhost', // Default a 'localhost' si no está configurado
  user: process.env.MYSQL_USER || 'root', // Default a 'root' si no está configurado
  password: process.env.MYSQL_PASSWORD || '', // Default a vacío si no está configurado
  database: process.env.MYSQL_DB || 'books', // Default a 'books' si no está configurado
};
