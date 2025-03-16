const greeting = function(person) {
    console.log(`Hello ${person}, welcome to NodeJS`)
}

const farewell = function(person) {
    console.log(`Goodby ${person}, it surely wasnt a plesure to meet you`)
}

module.exports = {
    greeting,
    farewell
};