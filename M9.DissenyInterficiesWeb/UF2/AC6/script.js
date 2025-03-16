document.addEventListener("DOMContentLoaded", function () {
    // Inicializar Swiper
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 30000000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Asegurar que el lightbox esté oculto al cargar la página
    lightbox.style.display = "none";

    // Abrir el lightbox con la imagen seleccionada
    document.querySelectorAll(".swiper-slide img").forEach(img => {
        img.addEventListener("click", function () {
            lightboxImg.src = this.src; // Asigna la imagen clicada al lightbox
            lightbox.style.display = "flex"; // Muestra el lightbox
        });
    });

    // Cerrar el lightbox al hacer clic en cualquier parte
    lightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Formulario de contacto
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que el formulario se envíe

            // Obtener los valores del formulario
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validar que todos los campos estén llenos
            if (!name || !email || !message) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Por favor, completa todos los campos.",
                });
                return;
            }

            // Simular el envío del formulario con SweetAlert2
            Swal.fire({
                icon: "success",
                title: "¡Mensaje enviado!",
                text: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
                confirmButtonText: "Cerrar",
            });

            // Opcional: Resetear el formulario después de la alerta
            contactForm.reset();
        });
    }

        // Inicializar variables
        const audioPlayer = document.getElementById("audio-player"); // Reproductor de audio
        const songTitle = document.getElementById("song-title"); // Elemento h2 donde mostrar el título
        const playButton = document.querySelector(".play-btn"); // Botón de play
    
        // Array con las canciones disponibles
        const songs = [
            "./resources/songs/No One Mourns the Wicked.mp3",
            "./resources/songs/Defying Gravity.mp3",
            "./resources/songs/What is this feeling.mp3"
        ];
    
        // Variable para llevar el control de la canción actual
        let currentSongIndex = 0;
    
        // Función para cargar y reproducir la canción
        function loadSong() {
            const songFile = songs[currentSongIndex];
            audioPlayer.src = songFile; // Cambiar el src del reproductor
            const songName = songFile.split('/').pop().replace('.mp3', ''); // Extraer el nombre de la canción
            songTitle.textContent = songName; // Actualizar el título en la pantalla
            audioPlayer.play(); // Reproducir la canción
        }
    
        // Cargar la primera canción cuando se carga la página
        loadSong();
    
        // Botón de "adelante" para cambiar a la siguiente canción
        document.querySelector(".adelante-btn").addEventListener("click", function () {
            currentSongIndex = (currentSongIndex + 1) % songs.length; // Avanzar a la siguiente canción, y si llegamos al final, volver al principio
            loadSong(); // Cargar la nueva canción
        });
    
        // Botón de "atrás" para volver a la canción anterior
        document.querySelector(".atras-btn").addEventListener("click", function () {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Volver a la canción anterior
            loadSong(); // Cargar la nueva canción
        });
    
        // Botón "MENU" para mostrar/ocultar los controles del reproductor
        document.querySelector(".menu-btn").addEventListener("click", function () {
            if (audioPlayer.style.visibility === "hidden" || audioPlayer.style.visibility === "") {
                audioPlayer.style.visibility = "visible"; // Mostrar los controles
            } else {
                audioPlayer.style.visibility = "hidden"; // Ocultar los controles
            }
        });
    
        // Función para alternar entre reproducir y pausar
        playButton.addEventListener("click", function () {
            if (audioPlayer.paused) {
                audioPlayer.play(); // Reproducir la canción
                playButton.textContent = "❚❚"; // Cambiar el icono a "pausa"
            } else {
                audioPlayer.pause(); // Pausar la canción
                playButton.textContent = "▶"; // Cambiar el icono a "play"
            }
        });
});
    

