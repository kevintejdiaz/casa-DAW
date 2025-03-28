window.onload = () => {
    fetchBooks();
    document.querySelector('#createButton').addEventListener('click', createBook);
    document.querySelector('#downloadButton').addEventListener('click', downloadVideo);
    updateUserStatus();
};

// Función para manejar login
async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login exitoso");
        updateUserStatus();
    } else {
        alert("Error en login: " + data.error);
    }
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("token");
    alert("Sesión cerrada");
    updateUserStatus();
}

// Función para actualizar el estado del usuario
function updateUserStatus() {
    const token = localStorage.getItem("token");
    document.getElementById("user-status").innerText = token ? "Autenticado" : "No autenticado";
}

// Función para manejar peticiones protegidas con JWT
async function sendRequest(method, url, body = null) {
    const token = localStorage.getItem("token");
    const headers = { "Content-Type": "application/json" };

    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }

    const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });

    return response.json();
}

// Función para obtener libros (GET)
async function fetchBooks() {
    const apiUrl = "http://localhost:5000/api/books";
    const res = await fetch(apiUrl);
    const books = await res.json();
    eraseTable();
    updateTable(books);
}

// Función para añadir un libro (POST)
async function createBook() {
    const book = {
        title: document.querySelector("#book-title").value,
        author: document.querySelector("#book-author").value,
        year: document.querySelector("#book-year").value
    };

    const response = await sendRequest("POST", "http://localhost:5000/api/books", book);
    console.log(response);
    fetchBooks();
}

// Función para actualizar un libro (PUT)
async function editBook(event) {
    const celdas = event.target.parentElement.parentElement.children;
    const book = {
        id: celdas[0].innerHTML,
        title: celdas[1].innerHTML,
        author: celdas[2].innerHTML,
        year: celdas[3].innerHTML
    };

    const response = await sendRequest("PUT", "http://localhost:5000/api/books", book);
    console.log(response);
    fetchBooks();
}

// Función para eliminar un libro (DELETE)
async function deleteBook(event) {
    const id = event.target.parentElement.parentElement.children[0].innerHTML;

    const response = await sendRequest("DELETE", "http://localhost:5000/api/books", { id });
    console.log(response);
    fetchBooks();
}

// Función para vaciar la tabla
function eraseTable() {
    let filas = Array.from(document.querySelectorAll('tbody tr'));
    filas.forEach(fila => fila.remove());
}

// Función para actualizar la tabla con los libros
function updateTable(books) {
    const table = document.getElementById("book-table");

    books.forEach(book => {
        const row = document.createElement('tr');
        table.append(row);

        const celdaId = document.createElement('td');
        celdaId.innerHTML = book.id;
        row.append(celdaId);

        const celdaTitulo = document.createElement('td');
        celdaTitulo.innerHTML = book.title;
        celdaTitulo.contentEditable = true;
        row.append(celdaTitulo);

        const celdaAutor = document.createElement('td');
        celdaAutor.innerHTML = book.author;
        celdaAutor.contentEditable = true;
        row.append(celdaAutor);

        const celdaAno = document.createElement('td');
        celdaAno.innerHTML = book.year;
        celdaAno.contentEditable = true;
        row.append(celdaAno);

        const celdaAcciones = document.createElement('td');
        row.append(celdaAcciones);

        const buttonEdit = document.createElement('button');
        buttonEdit.innerHTML = "Modificar";
        buttonEdit.addEventListener('click', editBook);
        celdaAcciones.append(buttonEdit);

        const buttonDelete = document.createElement('button');
        buttonDelete.innerHTML = "Eliminar";
        buttonDelete.addEventListener('click', deleteBook);
        celdaAcciones.append(buttonDelete);
    });
}
