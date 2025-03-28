const bcrypt = require("bcrypt");

bcrypt.hash("admin123", 10, (err, hash) => {
    if (err) {
        console.error("Error generando el hash:", err);
    } else {
        console.log("Hash generado:", hash);
    }
});
