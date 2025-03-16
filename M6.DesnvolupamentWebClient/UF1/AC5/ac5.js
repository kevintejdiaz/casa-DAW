// 1. Saca por consola todo el contenido del body sin utilizar ningún método de document
console.log(document.body.innerHTML)

// 2. Saca por consola el texto del elemento #titulo sin utilizar ningún método de document

console.log(document.body.children[0].innerHTML)

//Todos los id dentro de un html son accesibles desde JS


// 3. Saca el contenido del tercer li usando el método querySelector

console.log(document.querySelector('li:nth-child(3)').innerHTML)

// 4. Saca el contenido del tercer li usando el método querySelectorAll

let items = document.querySelectorAll("ul li");
console.log(items[2].textContent);



// 5. Que ocurre cuando se ejecuta este comando. ¿Por qué?

// let elementos = document.querySelector('li'); 
// elementos[2].remove();

 //Salta error porque esta intentando acceder a una lista cuando se trata de un objeto

// 6. Que ocurre cuando se ejecuta este comando. ¿Por qué?
// let lista = document.querySelectorAll('ul');
// lista.remove();


//Se esta tratando como objeto a una lista (Hay que indexar lo que se quiere eliminar)

// 7. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad children


// let ul = document.querySelector('ul')
// ul.children[1].remove()

//OR

// document.body.children[1].children[1].remove()

// 8. Accede a la lista ul y borra el segundo de sus hijos, utilizando su propiedad childNodes


// console.log(document.body.childNodes[3].childNodes[3].remove())

// 9. Completa este código para que se ponga de color azul el hermano siguiente al primer elemento de la lista

window.onload = function() {
    let elemento = document.querySelector("li:first-child");
    elemento.nextElementSibling.style.color = "blue";
  };


// 10. Completa este código para que se pongan de color azul él y todos sus hermanos
// let elemento = document.querySelector('li:first-child');


// 11. ¿Por qué no podemos acceder así al atributo 'tema' del #título?
// let titulo = document.querySelector('#titulo');
// console.log(titulo.tema);

//Debido a que las propiedades no "Vanilla" de HTML no son mapeadas 

// 12. Saca por consola el valor del atributo 'tema' del #título !!!!!!!!!!!!!!!!!!!!!!!!!

window.onload = function() {
    tema = document.querySelector("#titulo")
    tema.h 
  };



// 13. Añade al título el atributo 'cfgs' con valor 'daw'

var elemento = document.querySelector('h3')
elemento.setAttribute('cfgs', 'daw')

// 14. Cambia el id del h3 sin utilizar el método setAttribute

var elemento = document.querySelector('h3')

elemento.id = 'kevin'

//Esto es posible debido a que los atributos vanilla de HTML son accesibles directamente.

// 15. ¿Este código añade correctamente la classe 'elem' a los elementos de la lista?
// let elementos = document.querySelectorAll('.item');
// for (let elemento of elementos){
//     elemento.className = "elem";
// }



// 16. Añade correctamente a los elementos de la lista la clase "item"
//classList.add


let elementos = document.querySelectorAll('.item');
for (let elemento of elementos){
    elemento.classList.add ("elem") ;
}


// 17. ¿Es correcta la salida por consola?

let primerElemento= document.querySelectorAll('.item')[0];
primerElemento.classList.add("elem");
console.log(primerElemento.className);

//Si, la salida por consola es correcta


// 18. Añade un Cuarto Elemento al final de la lista

var cuartoElemento = document.createElement('li')
cuartoElemento.innerHTML = "Cuarto elemento"
console.log(cuartoElemento)


var lista = document.querySelector('ul')
lista.appendChild(cuartoElemento)


// 19. Añade un Elemento Cero al principio de la lista

var elementoCero = document.createElement('li')
elementoCero.innerHTML = "Elemento Cero"


var lista = document.querySelector('ul')
lista.prepend(elementoCero)


// 20. Duplica el Tercer Elemento a continuación de éste en la lista


var elemento = document.querySelector('ul')
tercerElemento = elemento.children[3]
clonado = tercerElemento.cloneNode(true)


tercerElemento.appendChild(clonado)