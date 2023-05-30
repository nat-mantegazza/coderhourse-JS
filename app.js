//función constructora
class Cursos {
    constructor(curso, precio) {
        this.curso = curso;
        this.precio = precio;
        }
    calcularPrecioConIVA () {
        const iva = 0.21;
        return this.precio * (1 + iva);
    }
}

//array
let precios = [
    {curso: "Desarrollo Web", precio: 20000},
    {curso: "Javascript", precio: 25000},
    {curso: "ReactJS", precio: 28000},
    {curso: "Front End Developer", precio: 73000},
    {curso: "Back End Developer", precio: 80000},
];

//función saludar 
function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + nombre + " a CoderNaty cursos!");
}

//función para elegir edad
function elegirEdad() {
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 18) {
        alert("Usuario autorizado.");
    } else {
        alert(
        "Usuario no autorizado. Los cursos de CoderNaty son solo para alumnos mayores de edad."
        );
    elegirEdad();
    }
}

//función para cargar producto
function cargarProducto() {
    let curso = prompt(
    "Ingrese el nombre de uno de nuestros cursos (sensible a mayúsculas):\n 1. Desarrollo Web ($20000 más IVA)\n 2. Javascript ($25000 más IVA)\n 3. ReactJS ($28000 más IVA)\n 4. Front End Developer: incluye Desarrollo Web + Javascript + React JS ($73000 más IVA)\n 5. Back End Developer ($80000 más IVA)"
    );
    let precio = precios.find((item) => item.curso === curso)?.precio;
    if (precio) {
        const nuevoCurso = new Cursos(curso, precio);
        arrayCarrito.push(nuevoCurso);
        alert("Curso añadido al carrito");
    } else {
        alert("Curso inválido");
        cargarProducto();
    }
}

//función para ver carrito
function verCarrito() {
    arrayCarrito.forEach((producto) => {
        alert(`Usted eligió ${producto.curso} por un monto de ${producto.calcularPrecioConIVA()} (IVA incluido)`);
    });
}

//función para finalizar compra
function finalizarCompra() {
    const total = arrayCarrito.reduce((acc, el) => acc + el.calcularPrecioConIVA(), 0);
    alert(`El total de su compra es ${total} (IVA incluido)`);
}

let arrayCarrito = [];

//programa
saludar();
elegirEdad();

let opcion = prompt(
    "Ingrese una opción:\n 1. Cargar cursos\n 2. Ver carrito\n 3. Finalizar\n 4. Salir"
);

//bucle
while (opcion !== "4") {
    if (opcion === "1") {
        cargarProducto();
    }
    else if (opcion === "2") {
        verCarrito();
    }
    else if (opcion === "3") {
        finalizarCompra();
    }
    else {
        alert("Opción no válida. Intente nuevamente.");
    }
    opcion = prompt(
    "¿Qué desea hacer?\n 1. Seguir comprando\n 2. Ver carrito\n 3. Finalizar\n 4. Salir"
    );
}
alert("Gracias por su compra");
