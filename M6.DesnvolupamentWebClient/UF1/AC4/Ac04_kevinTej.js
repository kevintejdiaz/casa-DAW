let json1 = `{
    "Aves": {},
    "Peces": {},
    "Mamíferos": {},
    "Hongos": {}
   }`

let json2 = {
    "Aves": {
        "voladoras": {},
        "no voladoras": {}
    },
    "Peces": {},
    "Mamíferos": {
        "ungulados": {},
        "paquidermos": {}
    }
};

let lista = JSON.parse(json1)
let lista2 = JSON.parse(json2)
let guardado
window.onload = function() {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);
    guardado = document.createElement('ul');
    container.appendChild(guardado)
    // createList1();
};



// function createList1 () 
// {

//     for(let clave in lista){
//         let elemento = document.createElement('li')
//         elemento.innerHTML = clave;
//         guardado.append(elemento)
//     }

// }




function createList2 () {
    for(let clave in lista2)
    {
        let elemento = document.createElement('li');
        elemento.innerHTML = clave;
        elemento.id = clave
        lista2.appendChild(elemento)

        if(Object.keys(lista2[clave].lenght != 0)) 
        {
            let elemento2 = document.createElement('ul');
            for(let clave2 in lista2[clave])
            {
                elemento2.innerHTML = clave2;
                elemento2.id = clave2;
                
            }
        }
    }

}
