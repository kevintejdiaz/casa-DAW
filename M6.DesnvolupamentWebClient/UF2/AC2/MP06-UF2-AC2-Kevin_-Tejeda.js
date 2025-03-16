const url = "https://jsonplaceholder.typicode.com/";
let urlClase = "https://jsonplaceholder.typicode.com/users"

function fetchPosts() {
    let userList = document.getElementById("ul");

    fetch(url + "users")
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

fetchPosts();

