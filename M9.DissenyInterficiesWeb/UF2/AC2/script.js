document.addEventListener("DOMContentLoaded", () => {
    const ipods = document.querySelectorAll(".ipod");

    ipods.forEach(ipod => {
        const audio = ipod.querySelector("audio");
        const playBtn = ipod.querySelector(".play-btn");
        const nextBtn = ipod.querySelector(".adelante-btn");
        const prevBtn = ipod.querySelector(".atras-btn");

        // Reproducir o pausar la canción
        playBtn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = "⏸"; // Cambia el icono a pausa
            } else {
                audio.pause();
                playBtn.textContent = "▶"; // Cambia el icono a play
            }
        });

        // Adelantar 5 segundos
        nextBtn.addEventListener("click", () => {
            audio.currentTime += 5; // Avanza 5 segundos
        });

        // Retroceder 5 segundos
        prevBtn.addEventListener("click", () => {
            audio.currentTime -= 5; // Retrocede 5 segundos
        });

        // Cuando termine la canción, cambia el botón a play
        audio.addEventListener("ended", () => {
            playBtn.textContent = "▶";
        });
    });
});
