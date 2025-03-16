// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// funcion1();

// loadScript('1.js',funcion1);

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//     callback();
// }



// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback();
//     document.head.append(script);
// }

// loadScript('1.js',()=>funcion1());

//C)
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback();
//     document.head.append(script);
// }

// loadScript('1.js', () => {
//     let numero = funcion1();
//     console.log(`La función 1 ha devuelto el número ${numero}`);
// });


//D)

// function loadScript(src, callback, errorCallback) {
//     if (!src) {
//         errorCallback("Error en el proceso");
//         return;
//     }

//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback();
//     script.onerror = () => errorCallback("Error al cargar el script.");

//     document.head.append(script);
// }


// loadScript('',() => {
//         let numero = funcion1();
//         console.log(`La función 1 ha devuelto el número ${numero}`);
//     },
//     (error) => {
//         console.error(error); // Manejo del error
//     }
// );


//E)

// function loadScript(src) {
//     return new Promise((resolved, rejected) => { if (!src) {rejected("Error en el proceso");return;}

//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolved();
//         script.onerror = () => rejected("Error al cargar el script.");

//         document.head.append(script);
//     });
// }

// loadScript('1.js')
//     .then(() => {
//         let numero = funcion1();
//         console.log(`La función 1 ha devuelto el número ${numero}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

//F)

// function loadScript(src) {
//     return new Promise((resolved, rejected) => { if (!src) {rejected("Error en el proceso");return;}

//         let script = document.createElement('script');
//         script.src = src;

//         script.onload = () => resolved();
//         script.onerror = () => rejected("Error al cargar el script."); 

//         document.head.append(script);
//     });
// }


// loadScript('1.js')
//     .then(() => {
//         let numero = funcion1();
//         console.log(`La función 1 ha devuelto el número ${numero}`);
//     })
//     .catch((error) => {
//         console.error(error);
//     });



//TASCA2


function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

sleep(5000)
    .then(() => {
        console.log('Sleep finalizado. Continua ejecución del programa...');
    });
