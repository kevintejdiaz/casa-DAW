// Tasca 1. Reescriu amb notació async/await l’exercici 2 de la tasca AC2_bola-extra.

function paso1() {
    return new Promise((resolve) => setTimeout(() => resolve("Paso 1 completado"), 2000));
}


function paso2() {
    return new Promise((resolve) => setTimeout(() => resolve("Paso 2 completado"), 3000));
}


function main() {
    console.log("Inicio del proceso");
    paso1()
        .then((resultado1) => {
            console.log(resultado1);
            return paso2();
        })
        .then((resultado2) => {
            console.log(resultado2);
            console.log("Proceso completado");
        })
}


// main();

async function paso1()
{
    return new Promise((resolve) => setTimeout(() => resolve("Paso 1 completado"), 2000));

}
async function paso2() 
{
    return new Promise((resolve) => setTimeout(() => resolve("Paso 2 completado"), 3000));

}

async function mainAsync() {
    console.log("Iniciando el proceso");
    let resultado1 = await paso1();
    console.log(resultado1);
    let resultado2 = await paso2();
    console.log(resultado2)
    console.log("Proceso completado");
}

// mainAsync();

// Tasca 2. Reescriu amb notació async/await l’exercici AC2.

const url = "https://jsonplaceholder.typicode.com/";
const urlClase = "https://jsonplaceholder.typicode.com/users";

function fetchPosts() {
    let userList = document.getElementById("ul");

    fetch(url)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                let userItem = document.createElement("li");
                userItem.textContent = user.name;

                let postsUl = document.createElement("ul");

                fetch(url + `posts?userId=${user.id}`)
                    .then(response => response.json())
                    .then(posts => {
                        posts.forEach(post => {
                            let postItem = document.createElement("li");
                            postItem.textContent = post.title;
                            postsUl.appendChild(postItem);
                        });
                    });

                userItem.appendChild(postsUl);
                userList.appendChild(userItem);
            });
        });     
}


async function fetchPostsAsync() {
    let userList = document.getElementById("ul");
    let response = await fetch(urlClase);
    let users = await response.json();

        for (const user of users) {
            let userItem = document.createElement("li");
            userItem.textContent = user.name;

            let postsUl = document.createElement("ul");

            let postsResponse = await fetch(url + `posts?userId=${user.id}`);
            let posts = await postsResponse.json();

            posts.forEach(post => {
                let postItem = document.createElement("li");
                postItem.textContent = post.title;
                postsUl.appendChild(postItem);
            });

            userItem.appendChild(postsUl);
            userList.appendChild(userItem);
        }
    }
fetchPostsAsync()