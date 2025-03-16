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
const slugify = require('slugify')

console.log(slugify('My new web site'))