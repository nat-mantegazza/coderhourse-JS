//Función para vaciar carrito
function vaciarCarrito() {
    localStorage.clear();
    cargarCarrito();
}

//funcion para cargar el carrito
function cargarCarrito() {
    const contenedorCarrito = document.querySelector("#contenedor-carrito");
    contenedorCarrito.innerHTML = "";

    if (localStorage.length > 0) {
        const almacenados = JSON.parse(localStorage.getItem("listaagregados"));

        almacenados.forEach((obj) => {
            const div = document.createElement("div");
            div.classList.add("producto");

            const productBox = document.createElement("div");
            productBox.classList.add("product-box");

            const productTitle = document.createElement("h2");
            productTitle.classList.add("product-title");
            productTitle.textContent = `${obj.id} $${obj.precio}`;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Eliminar";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", () => {
                deleteProduct(obj.id);
            });

            productBox.appendChild(productTitle);
            productBox.appendChild(deleteBtn);

            div.appendChild(productBox);
            contenedorCarrito.appendChild(div);
        });

        const totalAmount = document.createElement("div");
        totalAmount.classList.add("total-amount");

        const storedItems = JSON.parse(localStorage.getItem("listaagregados")) || [];
    let total = 0;

    fetch('../json/productos.json')
        .then((resp) => resp.json())
        .then((data) => {
            for (const item of storedItems) {
                const product = data.find((p) => p.titulo === item.id);
                if (product) {
                    total += product.precio;
                }
            }
            totalAmount.textContent = `Total: $${total}`;
        });

        contenedorCarrito.appendChild(totalAmount);

        const comprarBtn = document.createElement("button");
        comprarBtn.textContent = "Comprar";
        comprarBtn.classList.add("buy-btn");
        comprarBtn.addEventListener("click", () => {
            realizarCompra();
        });

        contenedorCarrito.appendChild(comprarBtn);

        const seguirBtn = document.createElement("button");
        seguirBtn.textContent = "Seguir Comprando";
        seguirBtn.classList.add("buy-btn");
        seguirBtn.addEventListener("click", () => {
            window.location.href = "../index.html";
        });

        contenedorCarrito.appendChild(seguirBtn);
    } else {
        const div = document.createElement("div");
        div.classList.add("producto");

        const productBox = document.createElement("div");
        productBox.classList.add("product-box");

        const productTitle = document.createElement("h2");
        productTitle.classList.add("product-title");
        productTitle.textContent = "No hay productos en el carrito";

        productBox.appendChild(productTitle);
        div.appendChild(productBox);
        contenedorCarrito.appendChild(div);

    }
}

//funcion para borrar productos
function deleteProduct(id) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Se eliminará el producto del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#551A8B',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const almacenados = JSON.parse(localStorage.getItem('listaagregados'));
            const filtered = almacenados.filter((obj) => obj.id !== id);
            localStorage.setItem('listaagregados', JSON.stringify(filtered));
            if (almacenados.length == 1) {
                localStorage.clear();
            }
            cargarCarrito();

            Swal.fire({
                title: 'Producto eliminado',
                icon: 'success',
                confirmButtonText: 'OK',
                backdrop: true,
                confirmButtonColor: '#551A8B'
            });
        }
    });
}

//funcnion para realizar compra
function realizarCompra() {

    localStorage.clear();

    Swal.fire({
        title: 'Felicitaciones! Compra realizada exitosamente. Recibirás un mail de confirmación.',
        icon: 'success',
        confirmButtonText: 'OK',
        backdrop: true,
        confirmButtonColor: '#551A8B'
    });

    cargarCarrito();
}

cargarCarrito();