window.onload = () => {
    // Pedimos a la API los libros actuales en base de datos
    fetchBooks();

    // Añadimos al botón de submit del formulario un listener para enlazarlo a la función createBook
    document.querySelector('#createButton').addEventListener('click', createBook);
    document.getElementById('downloadButton').addEventListener('click', function(){
        const videoURL = './resources/LexyLove.mp4'
        let xhr = new XMLHttpRequest();

        xhr.open('GET', videoURL);
        xhr.responseType = "blob"

        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = '0';
        progressBar.style.height = '5px';
        progressBar.style.backgroundColor = 'green';
        progressBar.style.zIndex = '9999';
        document.body.appendChild(progressBar);

        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.style.width = percentComplete + '%';
                console.log(`Progreso de descarga: ${percentComplete.toFixed(2)}%`);
            }
        };

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Crear un enlace temporal para la descarga.
                const blob = xhr.response;
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "video_tutorial.mp4";
                link.click();
    
                // Limpiar recursos.
                window.URL.revokeObjectURL(link.href);
                console.log("Descarga completada.");
            } else {
                console.error("Error al descargar el vídeo.");
            }
    
            // Eliminar la barra de progreso.
            document.body.removeChild(progressBar);
        };

            // Enviar la solicitud.
            xhr.send();
    
    })
}

async function fetchBooks() {
    let apiUrl = "http://localhost/library_crud/api.php";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if(xhr.status === 200){
            let books = JSON.parse(xhr.responseText);
            console.log(books);
            eraseTable();
            updateTable(books)
        }
        else{
            console.error('Error al pedir los libreos', xhr.statusText);
        }
    }
    eraseTable();
    
    // Poblamos la tabla con el contenido del JSON

    // Configuramos el callback de error
    xhr.onerror = function () {
        console.error("Error de conexión con el servidor.");
    };

    xhr.send(); // Enviamos la solicitud
}

function eraseTable() {
    let apiUrl = "http://localhost/library_crud/api.php";

    let xhr = new XMLHttpRequest();

    // Accedemos a la lista de filas de la tabla <tr> y las borramos todas
    let filas = Array.from(document.querySelectorAll('tbody tr'));
    for (let fila of filas) {
        fila.remove();
    }
}

function updateTable(books) {
    let table = document.getElementById("book-table");

    // Iteramos books: por cada book
    for (let book of books) {
        // Creamos y añadimos a la tabla una nueva fila (<tr>)
        let row = document.createElement('tr');
        table.append(row);
        // Creamos y añadimos a la fila las celdas de id, título, autor, año, acciones.
        // Las celdas id, título, autor, año se deben rellenar con la info del JSON.
        // Las celdas título, autor, año deben tener el atributo contenteditable a true.
        let celdaId = document.createElement('td');
        celdaId.innerHTML = book.id;
        row.append(celdaId);
        let celdaTitulo = document.createElement('td');
        celdaTitulo.innerHTML = book.title;
        celdaTitulo.contentEditable = true;
        row.append(celdaTitulo);
        let celdaAutor = document.createElement('td');
        celdaAutor.innerHTML = book.author;
        celdaAutor.contentEditable = true;
        row.append(celdaAutor);
        let celdaAno = document.createElement('td');
        celdaAno.innerHTML = book.year;
        celdaAno.contentEditable = true;
        row.append(celdaAno);
        // Creamos dos botones (editar y eliminar) y los añadimos a la celda acciones.
        // Hay que añadir a cada botónn el listener correspondiente para enlazarlos a las funciones editBook i deleteBook, respectivamente.
        let celdaAcciones = document.createElement('td');
        row.append(celdaAcciones);
        let buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = "Modificar";
        buttonEdit.addEventListener('click', editBook);
        celdaAcciones.append(buttonEdit);
        let buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = "Eliminar";
        buttonDelete.addEventListener('click', deleteBook);
        celdaAcciones.append(buttonDelete);
    }
}

async function deleteBook(event) {
    // Leemos el contenido de la columna id de esa fila
    let celdas = event.target.parentElement.parentElement.children;
    let id = celdas[0].innerHTML;
    // Hacemos la petición de DELETE a la API pasando un json en el cuerpo del mensaje
    let apiUrl = "http://localhost/library_crud/api.php";

    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", apiUrl)
    // xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log("Libro eliminado", JSON.parse(xhr.responseText));
            fetchBooks();
        }
    }

    let deletedBook = {
        "id": id
    }

    let response = await fetch(apiUrl, {
        method: "DELETE",
        body: JSON.stringify(deletedBook)
    });
    let json = await response.json()
    // Muestra respuesta de la API (JSON) por consola
    console.log(json);

    // Volvemos a pedir libros
    fetchBooks();
}

async function editBook(event) {
    
    // Leemos el contenido de las columnas id, título, autor, año de esa fila
    let celdas = event.target.parentElement.parentElement.children;
    let id = celdas[0].innerHTML;
    let titulo = celdas[1].innerHTML;
    let autor = celdas[2].innerHTML;
    let ano = celdas[3].innerHTML;

    // Hacemos la petición de PUT correspondiente pasando un json en el cuerpo del mensaje
    // p.ej. { "id": 1, "title": "titulo", "author": "autor", "year": 1980 }
    let apiUrl = "http://localhost/library_crud/api.php";
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", apiUrl);
    // xhr.getResponseHeader("Content-Type", "application/json") ????????????????

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("Libro modificado:", JSON.parse(xhr.responseText));
            fetchBooks(); // Volvemos a pedir libros
        } else {
            console.error("Error al modificar libro:", xhr.statusText)
        }
    }

    let modifiedBook = JSON.stringify({id: id, title: titulo, author: autor, year: ano})
    xhr.send(modifiedBook);
    // Muestra respuesta de la API (JSON) por consola
    console.log(json);

    //Volvemos a pedir libros
    fetchBooks();
}

async function createBook(event) {
    // Leemos el contenido del formulario: título, autor, año
    let titulo = document.querySelector("#book-title").value;
    let autor = document.querySelector("#book-author").value;
    let ano = document.querySelector("#book-year").value;

    // Hacemos la petición de POST correspondiente pasando un json en el cuerpo del mensaje
    // p.ej. { "title": "titulo", "author": "autor", "year": 1980 }
    // No añadir id, es autoincremental
    let apiUrl = "http://localhost/library_crud/api.php";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl)
    // xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if(xhr.status === 200) {
            console.log("Libro agregado", JSON.parse(xhr.responseText));
            //Volvemos a pedir libros
            fetchBooks();
        }else{
            console.error("Error al agregar al libro:", xhr.statusText);
        }
    };

    let newBook = JSON.stringify({ title: titulo, author: autor, year: ano });
    xhr.send(newBook)
    // Muestra respuesta de la API (JSON) por consola

}