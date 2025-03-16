//1
//d)
// console.log("Hola, mundo");


//2
//a)
//1
// const path = require('path')

// data_folder = 'data/'
// products_folder = 'products/'
// products_file = 'products.json'

// const full_path = path.join(data_folder, products_folder, products_file)
// console.log(full_path)


//2
// const path = require('path')

// data_folder = 'data/'
// products_folder = 'products/'
// products_file = 'products.json'

// const full_path = path.resolve(data_folder, products_folder, products_file)
// console.log(full_path)

//b
//1
// const fs = require('fs')

// const data = fs.readFileSync('info.txt', 'utf-8')
// console.log(data)
// console.log('The file has been read')

//2

// const fs = require('fs')

// const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })
// console.log('The file has been read')


//3

//d
// const slugify = require('slugify')

// console.log(slugify('My new web site'))

//6
//c

// console.log('Buenas tardes!')

//7

//a
const person = 'Mike Taylor';
const person2 = "Lema"

// const greeting = function(person) {
//     console.log(`Hello ${person}, welcome to NodeJS`)
// }

// greeting(person)

//b

// const greeting = require ('./greeting.js')

// greeting.greeting(person)
// greeting.farewell(person2)

//EXPRESS

const express = require('express')
const app = express()
const products = require('./data'); // Importa els productes des del fitxer data.js

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000')
})

// app.get('/api/products', (req, res) =>{
//     res.json([
//         {name: 'iphone', price: 800},
//         {name: 'ipad', price: 650},
//         {name: 'appleWatch', price: 750}
//     ])
// })

//D

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/api/products') {
//         const products = [
//             { name: 'iphone', price: 800 },
//             { name: 'ipad', price: 650 },
//             { name: 'appleWatch', price: 750 }
//         ]
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(products))
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' })
//         res.end('Not Found')
//     }
// })

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000')
// })


//9

//A
app.get('/api/products', (req, res) => {
    res.json(products);
});


//B
app.use(express.json());

app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

//C

app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID); 
    const index = products.findIndex(product => product.id === id);

    if (index === -1) {
        return res.status(404).send('Product not found'); 
    }

    // Actualitza el producte
    const updatedProduct = {
        id: products[index].id, 
        name: req.body.name,     
        price: req.body.price    
    };
    products[index] = updatedProduct; 
    res.status(200).json('Product updated');
});


//D
app.delete('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID); 
    const index = products.findIndex(product => product.id === id); 
    if (index === -1) {
        return res.status(404).send('Product not found'); 
    }

    products.splice(index, 1); 
    res.status(200).json('Product deleted');
});
