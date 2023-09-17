document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contenedor
    const container = document.querySelector(".container");

    // Parsear el XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(books, "books.xml"); // Reemplaza xmlString con tu XML completo

    // Obtener la lista de libros
    const books = xmlDoc.querySelectorAll("book");

    // Recorrer la lista de libros y generar el contenido
    books.forEach(book => {
        const title = book.querySelector("title").textContent;
        const author = book.querySelector("author").textContent;
        const genre = book.querySelector("genre").textContent;
        const price = book.querySelector("price").textContent;
        const publishDate = book.querySelector("publish_date").textContent;
        const description = book.querySelector("description").textContent;

        // Crear un elemento para el libro
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        // Crear contenido para el libro
        bookElement.innerHTML = `
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <div class="genre">Genre: ${genre}</div>
            <div class="price">Price: $${price}</div>
            <div class="publish_date">Publish Date: ${publishDate}</div>
            <div class="description">${description}</div>
        `;

        // Agregar el libro al contenedor
        container.appendChild(bookElement);
    });
});