const productos = [
    {
      id: "dw",
      titulo: "Desarrollo Web",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "En este curso aprenderás a crear tu sitio web partiendo del prototipo en papel. Te sumergirás en las mejores prácticas del desarrollo web, trabajando con HTML y CSS.",
      categoria: {
        nombre: "Front End Path",
        id: "front",
      },
      precio: 46000,
    },
    {
      id: "js",
      titulo: "Javascript",
      imagen: "img/icon-1.JPG",
      descripcion:
        "Al graduarte, estarás en condiciones de crear soluciones web interactivas, y trasladar los conocimientos del curso a cualquier framework JavaScript",
      categoria: {
        nombre: "Front End Path",
        id: "front",
      },
      precio: 53500,
    },
    {
      id: "react",
      titulo: "React JS",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "Aprenderás a programar por componentes, mediante Javascript, JS, ES6, y también conocerás las ventajas de la utilización del flujos de datos.",
      categoria: {
        nombre: "Front End Path",
        id: "front",
      },
      precio: 53500,
    },
    {
      id: "angular",
      titulo: "Angular",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "Al finalizar el curso podrás desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA), tanto para versiones móviles como de escritorio.",
      categoria: {
        nombre: "Front End Path",
        id: "front",
      },
      precio: 46000,
    },
    {
      id: "sql",
      titulo: "SQL",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "En este curso aprenderás las nociones centrales de las bases de datos relacionales, las cuales son implementadas por todas las organizaciones para poder tomar decisiones con base en la información que generan en su modelo de negocio.",
      categoria: {
        nombre: "Back End Path",
        id: "back",
      },
      precio: 56700,
    },
    {
      id: "python",
      titulo: "Python",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "Incorporarás los conocimientos necesarios de Class-Based-View, login - register - accounts, CRUD y modelforms. Desarrollarás una aplicación web estilo blog de la mano de Python en Django Framework.",
      categoria: {
        nombre: "Back End Path",
        id: "back",
      },
      precio: 65500,
    },
    {
      id: "backend",
      titulo: "Programación Backend",
      imagen: "./img/icon-1.JPG",
      descripcion:
        "En este curso aprenderás a desarrollar aplicaciones modernas con Node.js y MongoDB. Programarás en Javascript del lado del servidor aplicando técnicas asincrónicas",
      categoria: {
        nombre: "Back End Path",
        id: "back",
      },
      precio: 130000,
    },
  ];
  
  //funcion para cargar productos al html
  function cargarProductos() {
    const contenedorProductos = document.querySelector("#contenedor-productos");
    productos.forEach((producto) => {
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
  }
  
  //funcion para guardar productos
  function guardarProduct(id) {
    const idCart = id;
    let precioCart = 0;
  
    for (const productoAdd of productos) {
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
        confirmButtonText: "OK"
      });
    } else {
      const newItem = { id: idCart, precio: precioCart };
      storedItems.push(newItem);
      localStorage.setItem("listaagregados", JSON.stringify(storedItems));
      Swal.fire({
        title: "¡Producto agregado al carrito correctamente!",
        icon: "success",
        confirmButtonText: "OK"
      });
    }
    cargarCarrito();
  }
  
  //Función para vaciar carrito
  function vaciarCarrito() {
    localStorage.clear();
    cargarCarrito();    
  }
  
  //función para calcular el total
  function calcularTotal() {
    const storedItems = JSON.parse(localStorage.getItem("listaagregados")) || [];
    let total = 0;
  
    for (const item of storedItems) {
      const product = productos.find((p) => p.titulo === item.id);
      if (product) {
        total += product.precio;
      }
    }
  
    return total;
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
      totalAmount.textContent = `Total: $${calcularTotal()}`;
  
      contenedorCarrito.appendChild(totalAmount);
  
      const comprarBtn = document.createElement("button");
      comprarBtn.textContent = "Comprar";
      comprarBtn.classList.add("buy-btn");
      comprarBtn.addEventListener("click", () => {
        realizarCompra();
      });
  
      contenedorCarrito.appendChild(comprarBtn);
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const almacenados = JSON.parse(localStorage.getItem('listaagregados'));
        const filtered = almacenados.filter((obj) => obj.id !== id);
        localStorage.setItem('listaagregados', JSON.stringify(filtered));
        cargarCarrito();
        Swal.fire({
          title: 'Producto eliminado',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    });
  }
  
  //funcnion para realizar compra
  function realizarCompra() {
    
    localStorage.clear();
  
    Swal.fire({
      title: "Felicitaciones! Compra realizada exitosamente. Recibirás un mail de confirmación.",
      icon: "success",
      confirmButtonText: "OK"
    });
  
    cargarCarrito();
  }