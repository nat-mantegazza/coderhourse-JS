fetch('./json/productos.json')
  .then((resp) => resp.json())
  .then((data) => {
    const contenedorProductos = document.querySelector("#contenedor-productos");
    data.forEach((producto) => {
      const div = document.createElement("div");

      div.classList.add("producto");

      div.innerHTML = `
        <div class="product-box">
            <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img">
            <h2 class="product-title">${producto.titulo}</h2>
            <p class="product-description">${producto.descripcion}</p>
            <i class="bx bx-shopping-bag add-cart" onclick="guardarProduct('${producto.titulo}')"></i>
            <span class="price">$${producto.precio}</span>
        </div>
      `;

      contenedorProductos.append(div);
    });
  });

//funcion para guardar productos
function guardarProduct(id) {
  const idCart = id;
  let precioCart = 0;

  fetch('./json/productos.json')
  .then((resp) => resp.json())
  .then((data) => {
    for (const productoAdd of data) {
      if (productoAdd.titulo === idCart) {
        precioCart = productoAdd.precio;
        break;
      }
    }
    const storedItems = JSON.parse(localStorage.getItem("listaagregados")) || [];
  const existingItem = storedItems.find((item) => item.id === idCart);

  if (existingItem) {
    Swal.fire({
      title: "¡Producto ya agregado al carrito!",
      icon: "warning",
      confirmButtonText: "OK",
      backdrop: true,
      confirmButtonColor: "#a384c1"
    });
  } else {
    const newItem = { id: idCart, precio: precioCart };
    storedItems.push(newItem);
    localStorage.setItem("listaagregados", JSON.stringify(storedItems));
    Swal.fire({
      title: "¡Producto agregado al carrito correctamente!",
      icon: "success",
      confirmButtonText: "OK",
      backdrop: true,
      confirmButtonColor: "#a384c1"
    });
  }
  /*cargarCarrito();*/
  });
}