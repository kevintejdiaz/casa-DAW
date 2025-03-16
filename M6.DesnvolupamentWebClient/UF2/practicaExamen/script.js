//1)

// function functionAsincrona(){
//     return setTimeout(() => {
//         console.log("Primera asincrona realizada.");
//     },4000);
// }


// let resultado = functionAsincrona();
// console.log(resultado);
// console.log('Hola');

//Lo que sucede aqui: A la hora de ejecutar el script nos sale directamente 1, que hace referencia 
//al indice del setTimeout, despues se nos imprime el console.log porque no tiene que esperar a nada
//y finalmente a los 4seg se nos muestra lo que esta dentro del setTimeout.

//2)
// function funcionAsicCB(callback){
//     setTimeout(()=>{
//         console.log("realizando la tarea");
//         callback(20);
//     },4000);
// }

// funcionAsicCB(console.log)

// funcionAsicCB(() =>{
//     setTimeout(()=>{
//         console.log("Tarea realizada");
//     },1000);
// });
// console.log("Hola!");


// funcionAsicCB(); Esto da error 
// let resultado = funcionAsicCB(console.log) y/o  funcionAsicCB(console.log): esto imprime el valor dentro de la funcion callback debido al return implicito de la notacion flecha
// funcionAsicCB();  Imprime el console.log y despues peta porque no le has pasado el parametro que esta esperando(el callback)


//3) callback de error

// function funcionAsynCB (callback, errorCallback){
//     let error = false;
//     setTimeout(()=>{
//         if(error) errorCallback("Error producido en el proceso");
//         else{
//             console.log('Tarea realizada');
//             callback(20);
//         }
//     },2000);
// }

// funcionAsynCB(console.log,(error)=>console.log(error))


// funcionAsynCB((resultado)=>{
//     console.log(`El resultado es ${resultado}`);
// },(error)=>{
//     console.log(error);
// });


// console.log(uwu)

//4) Anidamiento de funciones asincronas

// function funcionAsync1(callback, errorCallback){
//     let error = false
//     setTimeout(()=>{
//         if(error) {
//             errorCallback("Se ha producido un error en la ejecucion")
//         }else{
//             console.log("funcion asincrona1 terminada")
//             callback(callback,errorCallback)
//     }
//     },2000)
// }


// function funcionAsync2(callback, errorCallback){
//     let error = false
//     setTimeout(()=>{
//         if(error) {
//             errorCallback("Se ha producido un error en la ejecucion")
//         }else{
//             console.log("funcion asincrona2 terminada")
//             callback(20)
//     }
//     },2000)
// }


// funcionAsync1(
//     ()=>funcionAsync2(
//         (resultado)=> console.log(`El resultado es de: ${resultado}`),
//         (error) => console.log(error)
//     ),
//     (error)=>console.log(error)
// );



// funcionAsync1(
//     ()=>funcionAsync2(
//        ()=> console.log('se han ejecutado todas las funciones'),
//             (error) => console.log(error)
//     ),(error) =>console.log(error)
// )


//5) Promises

// function funcionAsynPromise1(){
//     return new Promise(function(realizada,rechazada){
//         let error = true;
//         setTimeout(()=>{
//             if(error) rechazada("Error en el proceso, no se pudo ejecutar su solicitud");
//             else{
//                 console.log('Tarea1 realizada');
//                 realizada(20);
//             }
//         },2000);
//     });
// }


// function lemay(callback, errorCallback){
//     let error = false;
//     if(error){
//         errorCallback("Se ha producido un error")
//     }
//     else{
//         setTimeout(()=>{
//             console.log('Lemay en la casa');
//             callback('prrr')
//         },2000)
//     }
//     }

// lemay((resultado)=>console.log(`El resultado es ${resultado}`))

// function lemayPR() {
//     return new Promise(function(resolved, rejected){
//         let error= true;
//         setTimeout(()=>{
//             if (error){
//                 rejected('Ha ocurrido un error al intentar sacar PR')}
//             else{
//                 console.log('He sacado PR')
//                 resolved('Pium pium')
//             }
//         },2000)
//     })
// }



// lemayPR()
// .then((dispara)=>console.log(dispara))
// .catch((rejected)=>{
//     console.log(rejected)
// })

// let uwu = funcionAsynPromise1(console.log)
// console.log(uwu)

// let uwu = funcionAsynPromise1()
//     .then((resultado)=>{
//         console.log(resultado)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// console.log(uwu)







//AC2V2

//A) De callbacks a Promesas 

// function fetchData(callback) {
//     setTimeout(() => callback("Datos obtenidos"), 1000);
// }


// function main() {
//     console.log("Cargando...");
//     fetchData((data) => {
//         console.log(data);
//         console.log("Proceso completado");
//     });
// }


// main();


function fetchPromise() {
    return new Promise((resolve, reject) => {
        let error = false; // Cambia a true para probar el rechazo
        if (error) {
            reject('Ha habido un fallo');
        } else {
            setTimeout(() => {
                resolve('Datos obtenidos');
            }, 5000);
        }
    });
}




function mainPR(){
    console.log('C A R G A N D O .  .  .  ')
    fetchPromise()
    .then((data)=>{
        console.log(data)
        console.log('Proceso finalizado :D')
    }
    )
}
mainPR();
//B) De promesas a callbacks

// function paso1() {
//     return new Promise((resolve) => setTimeout(() => resolve("Paso 1 completado"), 2000));
// }


// function paso2() {
//     return new Promise((resolve) => setTimeout(() => resolve("Paso 2 completado"), 3000));
// }


// function main() {
//     console.log("Inicio del proceso");
//     paso1()
//         .then((resultado1) => {
//             console.log(resultado1);
//             return paso2();
//         })
//         .then((resultado2) => {
//             console.log(resultado2);
//             console.log("Proceso completado");
//         })
// }


// main();

// function paso1CB (callback)
// {
//     setTimeout(()=>{
//         console.log('Paso 1 completado :)')
//         callback();
//     },3000)
// }

// function paso2CB (callback)
// {
//     setTimeout(()=>{
//         console.log('Paso 2 completado :)')
//         callback();
//     },4000)
// }


// function mainCB(){
//     console.log('Inicio del proceso')
//     paso1CB(()=>{
//         paso2CB(()=>{
//             console.log('Proceso finalizado')
//         })
//     })
// }

// mainCB();



// function fetchData(callback) {
//     setTimeout(() => callback("Datos obtenidos"), 1000);
// }


// function main() {
//     console.log("Cargando...");
//     fetchData((data) => {
//         console.log(data);
//         console.log("Proceso completado");
//     });
// }


// main();
