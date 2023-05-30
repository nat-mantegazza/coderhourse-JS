/*
//funciones

//funcion para saludar
function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + nombre + " a CoderNaty cursos!");
}

//funcion para elegir edad
function elegirEdad() {
    edad = parseInt(prompt("Ingrese su edad:"));

    if(edad >= 18) {
        alert("Usuario autorizado.");
    } else {
        alert("Usuario no autorizado. Los cursos de CoderNaty son solo para alumnos mayores de edad.");
        elegirEdad();
    }
}

//funcion para elegir curso
function elegirCurso() {
    curso = prompt("Elija uno de nuestros cursos: \n 1. Desarrollo Web ($20000 más IVA) \n 2. Javascript ($25000 más IVA) \n 3. React JS ($28000 más IVA) \n 4. Front End Developer: incluye Desarrollo Web + Javascript + React JS ($73000 más IVA)");

    if(curso === "1") {
        alert("Usted escogió el curso de Desarrollo Web por un monto final de " + (cursoDesarrollo * iva) + " pesos (IVA incluido)");
    } else if(curso === "2") {
        alert("Usted escogió el curso de Javascript por un monto final de " + (cursoJs * iva) + " pesos (IVA incluido)");
    } else if(curso === "3") {
        alert("Usted escogió el curso de React JS por un monto final de " + (cursoReact * iva) + " pesos (IVA incluido)");
    } else if(curso === "4") {
        alert("Usted escogió el pack de Front End Developer (incluye Desarrollo Web + Javascript + React JS) por un monto final de " + ((cursoDesarrollo + cursoJs + cursoReact) * iva) + " pesos (IVA incluido)");
    } else { 
        alert("Opción no válida. Intente nuevamente.");
        elegirCurso();
    }
    
}

//definicion de variables
let edad;
let curso;

let cursoDesarrollo = 20000;
let cursoJs = 25000;
let cursoReact = 28000;
let iva = 1.21;

let continuar = true;
let opcion;

//programa principal
saludar();
elegirEdad();
elegirCurso();

//bucle
while (continuar === true) {
    opcion = prompt("¿Qué desea hacer? \n 1: Finalizar compra \n 2: Volver para elegir otro curso \n 3: Salir");

    if (opcion === "1") {
        continuar = false;
        alert("Gracias por su compra. ¡Hasta pronto!");
    } else if (opcion === "2") {
        elegirCurso();
    } else if (opcion === "3") {
        continuar = false;
        alert("Gracias por visitarnos. ¡Hasta pronto!");
    } else {
        alert("Opción no válida. Intente nuevamente.");
    }
}
*/
//clase constructora
class Cursos {
    constructor (curso, precio){
        this.curso = curso;
        this.precio = precio;
    }
}

//array
let precios = [
    {curso: "Desarrollo Web", precio: "$20000"}, 
    {curso: "Javascript", precio: "$25000"},
    {curso: "ReactJS", precio: "$28000"},
    {curso: "Front End Developer", precio: "$73000"},
    {curso: "Back End Developer", precio: "$80000"}
]

//funcion para saludar
function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido/a " + nombre + " a CoderNaty cursos!");
}

//funcion para elegir edad
function elegirEdad() {
    edad = parseInt(prompt("Ingrese su edad:"));

    if(edad >= 18) {
        alert("Usuario autorizado.");
    } else {
        alert("Usuario no autorizado. Los cursos de CoderNaty son solo para alumnos mayores de edad.");
        elegirEdad();
    }
}

//funcion para cargar productos al carrito
function cargarProducto() {
    let curso = prompt("Ingrese el nombre de uno de nuestros cursos: \n 1. Desarrollo Web ($20000) \n 2. Javascript ($25000) \n 3. React JS ($28000) \n 4. Front End Developer: incluye Desarrollo Web + Javascript + React JS ($73000) \n 5. Back End Developer ($80000)");
    //creación del nuevo objeto
    const nuevoCurso = new Cursos (curso)
    arraycarrito.push(nuevoCurso)
    alert("Curso añadido al carrito");
}

//funcion para ver carrito
function verCarrito() {
    arrayCarrito.forEach((producto)=>{ 
        alert(`Usted eligió ${producto.curso} por un monto de ${producto.precio}`);
    })  
}

//funcion para ver cursos Front End Path
function verFrontEndPath() {
    const frontEndPath = precios.filter ((front)=> front.precio <= 73000)
for (const cursosFront of frontEndPath) {
    alert(`Los cursos dentro del camino Front End son ${cursosFront.curso} por un monto de ${cursosFront.precio}`);
}
}

//funcion finalizar compra
function finalizarCompra() {
    const total = arrayCarrito.reduce((acc, el)=> acc + el.precio, 0);
    alert(`El total de su compra es ${total}`);
}

let arrayCarrito = []
let opcion = prompt("Ingrese una opción: \n 1. Cargar cursos \n 2. Mostrar cursos pertenecientes al Front End Path \n 3. Ver carrito \n 4.finalizar \n 5. Salir")

//bucle

while (opcion !== "5") {
    if (opcion === "1") {
        cargarProducto(arrayCarrito);
    }
    if (opcion === "2") {
        verFrontEndPath();
    }
    if (opcion === "3") {
        verCarrito();
    }
    if (opcion === "4") {
        finalizarCompra();
    }
    opcion = prompt("¿Qué desea hacer? \n 1. Seguir comprando 2. Mostrar cursos pertenecientes al Front End Path \n 3. Ver carrito \n 4.finalizar \n 5. Salir")
}