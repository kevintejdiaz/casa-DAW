// 1. Muestra por consola el orden en que se disparan los eventos click, dblclick, mousedown, mouseup
// document.addEventListener("click", () => console.log("click"))
// document.addEventListener("dblclick", ()=> console.log ("DOBLE KILL"))
// document.addEventListener("mousedown", ()=> console.log("Agachado!"))
// document.addEventListener("mouseup", ()=> console.log("ARRIBA!"))
// 2. Cuando se clique el documento, muestra por consola las coordenadas del click (respecto el documento)
document.addEventListener("click", (event) =>{
    console.log(`Coordenadas del click: X: = ${event.pageX}, Y = ${event.pageY} `)
})
// 3. Cuando se clique la pelota, muestra por consola si se ha clicado en qué cuadrante se ha clicado (arriba/abajo, izquierda/derecha)
const ball = document.getElementById("ball");

ball.addEventListener("click", (event)=> {
    const ballReCT = ball.getBoundingClientRect();
    const ballCenterX = ballReCT.left + ballReCT.width /2;
    const ballCenterY = ballReCT.top + ballReCT.height /2;

    const clickX = event.clientX;
    const clickY = event.clientY;

    const horizontal = clickX < ballCenterX ? "izquierda" : "derecha";
    const vertical = clickY < ballCenterY ? "arriba" : "abajo";

    console.log(`Se ha clickado en : ${vertical} ${horizontal}`)

})

// 4. Haz que cuando se mueva el ratón sobre la portería (incluido el portero) se ponga el fondo de la portería verde. Fes servir clase 'goal-zone'
const gate = document.getElementById("gate");

// gate.addEventListener("mousemove",()=>{
//     gate.classList.add("goal-zone");
// });

// gate.addEventListener("mousemove",()=>{
//     gate.classList.remove("goal-zone");
// });

// 5. Haz que cuando se mueva el ratón por sobre la portería (excluido el portero) se ponga el fondo de la portería verde
const keeper = document.getElementById("keeper");

gate.addEventListener("mousemove", (event) => {
    if (event.target !== keeper) {
        gate.classList.add("goal-zone");
    }
});     

gate.addEventListener("mouseleave", () => {
    gate.classList.remove("goal-zone");
});

// 6. Haz que cuando se mueva el ratón por encima del documento, al salir de un elemento se muestre por consola el id del elemento del que se sale y el id del elemente al que se entra

// 7. Haz que cuando se clique sobre el documento, salga por pantalla si se ha clicado sobre la mitad izquierda o derecha del documento

// 8. Muestra por consola las propiedades top, left, width, height de la pelota

// 9. Muestra por consola las propiedades offsetTop, offsetLeft, offsetWidth, offsetHeight de la pelota. ¿Son iguales que las anteriores?

// 10. Muestra por consola las coordenadas del portero respecto del documento

// 11. Al clicar el portero, que se mueva 50px a la derecha (pero con tecla CTRL pulsada, que sea a la izquierda)

// 12. Muestra por consola la tecla del teclado que se pulsa

// 13. Que se muestre por consola el elemento que está en las coordenadas absolutas (120,75)

// 14. Al hacer click derecho sobre la pelota, que se mueva hacia arriba hasta encontrar la portería. Si no cae sobre el portero, mostrar mensaje de GOL por alert

// 15. Haz que la pelota sea arrastrable por el ratón (eventoos mousedown, mousemove, mouseup)
ball.ondragstart = () => false;