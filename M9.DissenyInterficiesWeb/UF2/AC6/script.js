document.addEventListener("DOMContentLoaded", function () {
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

    // Obtener elementos del lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

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
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validar que todos los campos estén llenos
        if (name === "" || email === "" || message === "") {
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
});
