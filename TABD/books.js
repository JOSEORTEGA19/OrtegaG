document.addEventListener("DOMContentLoaded", function() {
    // Cargar el documento XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            mostrarXML(this.responseXML);
        }
    };
    xhttp.open("GET", "books.xml", true);
    xhttp.send();
});

function mostrarXML(xml) {
    var contenedor = document.getElementById("contenedor");

    // Obtener todos los elementos <elemento> del XML
    var elementos = xml.getElementsByTagName("elemento");

    // Recorrer los elementos y mostrarlos en cajas
    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var contenido = elemento.textContent;

        // Crear una nueva caja para cada elemento
        var caja = document.createElement("div");
        caja.className = "caja";
        caja.textContent = contenido;

        // Agregar la caja al contenedor
        contenedor.appendChild(caja);
    }
}