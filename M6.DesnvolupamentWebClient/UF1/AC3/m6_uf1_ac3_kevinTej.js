//TASCA 1

var str = "Hello";

str.test = 5;
console.log(str.test)

//Salta undefined debido a que se intenta agregar un valor a una propiedad del supuesto objeto
//cuando str es una variable de tipo primario.

//TASCA2

var str = "Patata";
var str2 = new String("Patata");

console.log(typeof(str))
console.log(typeof(str2))

console.log(str==str2) 
console.log(str===str2)

//Esto ocurre debido a que str2 es de tipo objeto string mientras str es simplemente de tipo string
//dando resultado como false en la comparacion de tipo de dato

//TASCA3

// let i=0;
// while (i !=10){
//     i += 0.2
// }

//Este bucle es infinito debido a que hay un error de precision por el problema de la coma flotante
//haciendo que las iteraciones acumulen decimales nunca llegando a 10


//TASCA4

function checkSpam(frase) {
    let palabrasSpam = ['viagra', 'xxx'];
    let fraseLower = frase.toLowerCase();

    for (let palabra in palabrasSpam) {
        if (fraseLower.includes(palabrasSpam[palabra])) {
            return true;
        }
    }

    return false;
}

// Pruebas
let frase1 = 'buy ViagRA now';
let frase2 = 'free xxxx';
let frase3 = 'innocent rabbit';

console.log(checkSpam(frase1));
console.log(checkSpam(frase2));
console.log(checkSpam(frase3));


//TASCA5

function toAscii(str) {
    let asciiList = [];
    for (let char of str) {
        asciiList.push(char.codePointAt(0));
    }
    return asciiList;
}

function toChar(chars) {
    let str = '';
    for (let code of chars) {
        str += String.fromCodePoint(code);
    }
    return str;
}

console.log(toAscii("ALBERT"));
console.log(toChar([65, 76, 66, 69, 82, 84]));


//TASCA6


//TASCA7



//TASCA8

var meetup1 = {
    title: "Conference",
    room: {
        number:23,
        participants: ["john","ann"]
    }
}

console.log(typeof(meetup1)===typeof(JSON.stringify(meetup1 )))
//La salida es FALSE, debido a que 


//TASCA9

var meetup2 = {
    title: "Conference",
    participants: [{name: "John"}, {name:"Alice"}]
}

console.log(JSON.stringify(meetup2,["participants"]));

// La salida por consola es la propiedad PARTICIPANTS del objeto meetup2
//esto se debe a que 