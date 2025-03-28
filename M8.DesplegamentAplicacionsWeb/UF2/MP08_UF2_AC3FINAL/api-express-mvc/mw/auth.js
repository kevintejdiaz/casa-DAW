const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();
const Library = require("../models/Library");

const SECRET_KEY = process.env.JWT_SECRET || "supersecreto123";

// Middleware para verificar el token en las rutas protegidas
const jwtAuth = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. Token requerido." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Token inválido o expirado." });
    }
};

// Función para autenticar usuario y generar JWT
const generateToken = async (username, password) => {
    try {
        let library = new Library();
        const user = await library.getUser(username);

        if (!user) {
            console.log("Usuario no encontrado en la base de datos:", username);
            return { error: "Usuario no encontrado" };
        }

        console.log("Contraseña ingresada:", password);
        console.log("Contraseña en BD:", user.password);

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            console.log("Las contraseñas no coinciden.");
            return { error: "Contraseña incorrecta" };
        }

        console.log("Usuario autenticado correctamente:", username);
        const payload = { id: user.id, username: user.username };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

        return { token };
    } catch (err) {
        console.error("Error en autenticación:", err);
        return { error: "Error interno del servidor" };
    }
};

module.exports = { jwtAuth, generateToken };
