let json1 = `{
    "Aves": {},
    "Peces": {},
    "Mamíferos": {},
    "Hongos": {}
   }`

let data2 = {
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


function createTree2(objeto) {
    // let lista = JSON.parse(json);
    let div = document.querySelector('.container');
    let ul = document.createElement('ul');
    for (let clave in objeto) {
        let elemento = document.createElement('li');
        elemento.innerHTML = clave;
        elemento.id = clave;
        ul.append(elemento);

        //Mirar si el  valor de la clave tiene claves
        if (Object.keys(objeto[clave]).length != 0) {
            let ul2 = document.createElement('ul');
            for (let clave2 in objeto[clave]) {
                let elemento2 = document.createElement('li');
                elemento2.innerHTML = clave2;
                elemento2.id = clave2;
                ul2.append(elemento2);
            }
            elemento.append(ul2)
        }
        div.append(ul);
    }
}

function createTree1(json) {
    let lista = JSON.parse(json);
    let div = document.querySelector('.container');
    let ul = document.createElement('ul');
    for (let clave in lista) {
        let elemento = document.createElement('li');
        elemento.innerHTML = clave;
        elemento.id = clave;
        ul.append(elemento);
    }
    div.append(ul);
}

window.onload = () => {
    createTree1(json1);
    createTree2(data2);
}
createList1()