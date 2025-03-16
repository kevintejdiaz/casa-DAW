const { MongoClient } = require('mongodb');
require('dotenv').config();

async function testConnection() {
    const uri = process.env.MONGO_URI;
    
    if (!uri) {
        console.error("❌ ERROR: No se encontró la variable MONGO_URI en el archivo .env");
        return;
    }

    console.log("⏳ Conectando a MongoDB...");
    
    try {
        const client = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect();
        console.log("✅ Conexión exitosa a MongoDB");

        const db = client.db("library"); // Base de datos "library"
        const collections = await db.listCollections().toArray();
        
        console.log("📚 Colecciones en la base de datos:", collections.map(c => c.name));

        await client.close();
    } catch (error) {
        console.error("❌ Error conectando a MongoDB:", error);
    }
}

testConnection();
