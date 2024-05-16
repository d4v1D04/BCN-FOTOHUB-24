function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll(".right-section img");
    let indice = 0;

    setInterval(() => {
        imagenes.forEach(imagen => imagen.style.display = "none");
        imagenes[indice].style.display = "block";
        indice = (indice + 1) % imagenes.length;
    }, 4000);
});