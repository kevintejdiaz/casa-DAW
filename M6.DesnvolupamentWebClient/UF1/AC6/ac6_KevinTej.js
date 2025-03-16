// 1. Quina és la diferència de comportament entre aquests dos fragments de codi? Per què?
// Fragment A
// window.onload = ()=>{
//     let items = document.querySelectorAll('.item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
//     console.log(items)
// }
// Fragment B
// window.onload = ()=>{
//     let items = document.getElementsByClassName('item');
//     console.log(items.length);
//     items[items.length-1].remove();
//     console.log(items.length);
//     console.log(items)
// }


//La diferencia entre el fragmento A y B es que al usar el .querySelectorAll se nos retorna una HTMLCollection la cual es una estructura estatica mientras
// que el .getElementsBy nos retorna un NodeList el cual es una estructura dinamica que se va actualizando automaticamente.

let llista = ["Cervantes", "Quevedo", "Lope de Vega", "Calderón"];

// La resta de tasques es fan a partir de la variable llista. Printa per consola, en cada cas, el resultat de l'operació.

// 2. Afegeix un element al final de la llista

// llista.push("George R.R. Martin")
// console.log(llista);

// 3. Elimina el darrer element de la llista

// llista.pop();
// console.log(llista);


// 4. Elimina el primer element de la llista

// llista.shift();
// console.log(llista);


// 5. Afegeix un element al principi de la llista

// llista.unshift("George R.R. Martin");
// console.log(llista);


// 6. Afegeix tres elements entre "Quevedo" i "Lope de Vega"

// llista.splice(2,0,"Joan", "Sergi", "Didac");
// console.log(llista);


// 7. Elimina el segon i el tercer elements de la llista

// llista.splice(1,2);
// console.log(llista);

// 8. Crea una llista2 amb els dos darrers elements de la llista (mètode splice)

let llista2 = llista.splice(-2);
console.log(llista2);



// 9. Crea una llista3 amb els dos darrers elements de la llista (mètode slice)

let llista3 = llista.slice(2,3)
console.log(llista3)

// 10. Concatena llista3 al final de llista2

llista2 = llista2.concat(llista3)
console.log(llista2)


// 11. Assigna llista2 a un nou array llista4 i comprova que la còpia s'ha fet per referència

let llista4 = llista2; // Assigna llista2 a llista4 per referència

llista4[0] = "Miguel de Cervantes";

console.log(llista2); // ["Miguel de Cervantes", "Calderón"]
console.log(llista4); // ["Miguel de Cervantes", "Calderón"]


// 12. Comprova si llista2 i llista4 tenen els mateixos elements

console.log(llista2 === llista4);

//salta true debido a que llista2 es una copia por referencia de llista4


// 13. Comprova si llista4 és un array.

console.log(typeof(llista4)) 

//los "arrays" en JS son objetos

// 14. Serveix aquesta instrucció per eliminar correctament l'element de la llista'=

// delete llista4[1];

//No, solo dejaria el indice indicado como **undefined**

// 15. Elimina el 2n element de la llista4

// llista4.splice(1,1)
// console.log(llista4)

// 16. Printa per consola els elements de llista4, un a un

for(let valor of llista4)
{
    console.log(valor)
}


// 17. Printa per consola les claus de llista4, una a una

for (let clave in llista4)
{
    console.log(clave)
}

// 18. Fes servir el mètode forEach per printar per consola tots els elements de llista4 en majúscules

llista4.forEach(element => {
    console.log(element.toUpperCase());
});

// 19. Ordena alfabèticament la llista4

llista4.sort();
console.log(llista4);

// 20. Ordena la llista4 pel nombre de lletres de cada element, de menor nombre de lletres a major

llista4.sort((a, b) => a.length - b.length);

console.log(llista4)