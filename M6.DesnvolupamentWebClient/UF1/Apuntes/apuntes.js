// //Coleccion nodes vs coleccion elements.

// let nodosHijos = document.body.childNodes;
// console.log(nodosHijos)    // mas complicado de iterar/leer. Tiene en cuenta los saltos de linea


// let elementosHijos = document.body.children;
// console.log(elementosHijos)
// B
// // Relativamente mas sencillo de leer, nos devuelve los tags que nos encotramos dentro del body en este caso.



// //ACCEÉS DIRECTE A ELEMENTS. L'ARBRE DEL DOM (getElementBy{})

// console.log(document.getElementById("familia")) //Retorna un objeto
// console.log(familia) //retorna el mismo objeto como si pidieramos lo que es a traves de ID
// console.log(document.getElementsByClassName("membreFamilia")) //Retorna una HTMLCollection
// console.log(document.getElementsByTagName("ul")) //Retorna una HTMLCollection


// //ACCEÉS DIRECTE A ELEMENTS. L'ARBRE DEL DOM (querySelector{})

// console.log(document.querySelector('li:nth-child(3)').innerHTML) // devuelve el contenido del tercer puestro dentro del li
// console.log(document.querySelector('li:nth-child(3)')) // devuelve un objeto mostrando el tag del que proviene y su clase

// console.log(document.querySelectorAll('ul>li')) // El uso del querySelectorAll retorna una NODELIST


// //MAPEJAT D'ATRIBUTS A PROPIETATS

// var familia = document.querySelector('#familia')

// console.log(familia.id) //Los atributos "vanilla" de HTML Pueden ser mapeadas, y una vez mapeadas manipuladas desde JS
// console.log(familia.membres) // retorna undefined (no pueden ser mapeados) -> las clases customs creadas no pueden ser tratadas como propiedades desde JS

// //GESTIO D'ATRIBUTS NO "VANILLA"

// //Metodos para la gestion de atributos en JS

// // .hasAttribute(name)
// // .getAttribute(name)
// // .setAttribute(name, value)
// // .removeAttribute(name)



// var familia = document.querySelector('#familia')

// if(familia.hasAttribute("miembros")){
//     console.log(familia.getAttribute("miembros")); //retorna la cantidad de diferentes elementos que contengan este atributo
//     console.log(typeof(familia.getAttribute("miembros"))); // retorna string (siempre)
// }


// //      !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // //SINCRONITZACIO D'ATRIBUTS I PROPIETATS:
// // //- Si es canvia l’atribut, la propietat canvia automàticament.
// // //- Si es canvia la propietat, l’atribut canvia automàticament.


// // //EXECEPCIONS:

// // var input = document.querySelector('input');

// // //atrbute => property
// // input.setAttribute('value', 'text');
// // console.log(input.value);

// // //NOT property => attribute

// // input.value = 'newValue';
// // console.log(input.getAttribute('value')); //text (not updated!)

// //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// //PROPIETATS NO ESTANDAR I DATASET D'UN ELEMENT: ??

// //CREACIO D'ELEMENTS I MODIFICACIO DEL DOM

// var hija = document.createElement('li')

// hija.id = "hijoNuevo"
// hija.innerHTML = "Hijo nuevo"
// hija.classList.add("membreFamilia")

// var familia = document.querySelector('#familia')
// familia.append(hija)

// //ELIMINACIO DE NODES   
// //(Preferiblemente la creacion de una varaible assignandole a esta con algun tipo de selector que nodo se desea eliminar)

// hija.remove();


// //COPIA DE NODES

// var familia = document.querySelector('#familia')

// //CLASSLIST

// // .classList.add/remove
// // .classList.toggle("class")  se le pasa por parametro una clase. Si no la posee se la agrega, y si ya la tenia se la quita
// // .classList.contains("class") devuelve true/false dependiendo de si tiene o no la clase que se le pase por parametro


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Quina és la diferència de comportament entre aquests dos fragments de codi? Per què?
// Fragment A
// window.onload = ()=>{
//     let items = document.querySelectorAll('.item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
// }
// Fragment B
// window.onload = ()=>{
//     let items = document.getElementsByClassName('item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
// }

let llista = ["Cervantes", "Quevedo", "Lope de Vega", "Calderón"];
console.log(llista)

// La resta de tasques es fan a partir de la variable llista. Printa per consola, en cada cas, el resultat de l'operació.

// 2. Afegeix un element al final de la llista

// llista.push("jk rolling")
// console.log(llista)


// 3. Elimina el darrer element de la llista

// llista.pop()
// console.log(llista)


// 4. Elimina el primer element de la llista

// llista.shift()
// console.log(llista)


// 5. Afegeix un element al principi de la llista

// llista.unshift("Jk Rolling")
// console.log(llista)


// 6. Afegeix tres elements entre "Quevedo" i "Lope de Vega"

// llista.splice(1,0, "1","2","3")
// console.log(llista)


// 7. Elimina el segon i el tercer elements de la llista

// llista.splice(1,2)
// console.log(llista)


// 8. Crea una llista2 amb els dos darrers elements de la llista (mètode splice)

let llista2 = llista.splice(2) // Cuando se le pasa solo un parametro el metodo splice eliminara a partir del indice indicado. Despues igualamos otra variable a este metodo y podemos guardar los elementos eliminados en esta.
console.log(llista2)


// 9. Crea una llista3 amb els dos darrers elements de la llista (mètode slice)

let llista3 = llista.slice(-2)
console.log(llista3)
// console.log(llista)

// ***********Splice vs Slice***********
//SPLICE SI modifica la array madre mientras que SLICE solo hace  un extracto de esta.



// 10. Concatena llista3 al final de llista2

// let llista5 = llista2.concat(llista3)
// llista2.concat(llista3)
// console.log(llista5)


// 11. Assigna llista2 a un nou array llista4 i comprova que la còpia s'ha fet per referència

let llista4 = llista2
// llista2.pop()
// console.log(llista4)
// console.log(llista2)

// console.log(llista2 === llista4)

// 12. Comprova si llista2 i llista4 tenen els mateixos elements

// console.log(llista4)
// console.log(llista2)

// 13. Comprova si llista4 és un array.

// console.log(Array.isArray(llista4))


// 14. Serveix aquesta instrucció ( delete llista4[1]; ) per eliminar correctament l'element de la llista 
// console.log(llista4)
// delete llista4[1];
// console.log(llista4)

//No, el elemento de la lista seguiria existiendo ocupando memoria, dejando solamente el valor de este en undefined.

// 15. Elimina el 2n element de la llista4

// console.log(llista4)
// llista4.splice(1,1)
// console.log(llista4)


// 16. Printa per consola els elements de llista4, un a un

console.log(llista4)

for(let elemento in llista4){
    console.log(elemento)
}


// 17. Printa per consola les claus de llista4, una a una

for(let clave of llista4)
{
    console.log(clave)
}

// 18. Fes servir el mètode forEach per printar per consola tots els elements de llista4 en majúscules


llista4.forEach(element => {
   console.log(element.toLocaleUpperCase())
});


// 19. Ordena alfabèticament la llista4

llista4.sort()
console.log(llista4)


// 20. Ordena la llista4 pel nombre de lletres de cada element, de menor nombre de lletres a major

