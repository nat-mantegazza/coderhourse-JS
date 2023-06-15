const productos = [
    {
        id: "dw",
        titulo: "Desarrollo Web",
        imagen: "./img/icon-1.jpg",
        descripcion: "En este curso aprenderás a crear tu sitio web partiendo del prototipo en papel. Te sumergirás en las mejores prácticas del desarrollo web, trabajando con HTML y CSS.",
        categoria: {
            nombre: "Front End Path",
            id: "front"
        },
        precio: 46000
    },
    {
        id: "js",
        titulo: "Javascript",
        imagen: "./img/icon-1.jpg",
        descripcion: "Al graduarte, estarás en condiciones de crear soluciones web interactivas, y trasladar los conocimientos del curso a cualquier framework JavaScript",
        categoria: {
            nombre: "Front End Path",
            id: "front"
        },
        precio: 53500
    },
    {
        id: "react",
        titulo: "React JS",
        imagen: "./img/icon-1.jpg",
        descripcion: "Aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos.",
        categoria: {
            nombre: "Front End Path",
            id: "front"
        },
        precio: 53500
    },
    {
        id: "angular",
        titulo: "Angular",
        imagen: "./img/icon-1.jpg",
        descripcion: "Al finalizar el curso podrás desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA), tanto para versiones móviles como de escritorio.",
        categoria: {
            nombre: "Front End Path",
            id: "front"
        },
        precio: 46000
    },
    {
        id: "sql",
        titulo: "SQL",
        imagen: "./img/icon-1.jpg",
        descripcion: "En este curso aprenderás las nociones centrales de las bases de datos relacionales, las cuales son implementadas por todas las organizaciones para poder tomar decisiones con base en la información que generan en su modelo de negocio.",
        categoria: {
            nombre: "Back End Path",
            id: "back"
        },
        precio: 56700
    },
    {
        id: "python",
        titulo: "Python",
        imagen: "./img/icon-1.jpg",
        descripcion: "Incorporarás los conocimientos necesarios de Class-Based-View, login - register - accounts, CRUD y modelforms. Desarrollarás una aplicación web estilo blog de la mano de Python en Django Framework.",
        categoria: {
            nombre: "Back End Path",
            id: "back"
        },
        precio: 65500
    },
    {
        id: "backend",
        titulo: "Programación Backend",
        imagen: "./img/icon-1.jpg",
        descripcion: "En este curso aprenderás a desarrollar aplicaciones modernas con Node.js y MongoDB. Programarás en Javascript del lado del servidor aplicando técnicas asincrónicas",
        categoria: {
            nombre: "Back End Path",
            id: "back"
        },
        precio: 130000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img">
            <h2 class="product-title">${producto.titulo}</h2>
            <p class="product-description">${producto.descripcion}</p>
            <span class="price">$${producto.precio}</span>
            <i class='bx bx-shopping-bag add-cart' id=${producto.id}></i>
        `;

        contenedorProductos.append(div);
    });
};

cargarProductos();

