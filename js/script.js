const productoImagen = document.getElementById("productoImagen");
const opcionesColor = document.querySelectorAll(".color-option");
const imagenesColor = {
    negro: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    blanco: "https://images.unsplash.com/photo-1628793913311-36c4d2d72e6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    azul: "https://plus.unsplash.com/premium_photo-1777857492136-4248c6a4be07?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

opcionesColor.forEach((opcion) => {

    opcion.addEventListener("click", () => {
        const colorSeleccionado = opcion.dataset.color;
        productoImagen.src = imagenesColor[colorSeleccionado];

        opcionesColor.forEach((opcion) => {
            opcion.classList.remove("active");
        });

        opcion.classList.add("active");
    });

});