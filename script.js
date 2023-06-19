let carrito = [];
let total = 0;

function agregarAlCarrito() {
  const producto = {
    nombre: "Producto 1",
    precio: 10.00
  };

  const productoExistente = carrito.find(item => item.nombre === producto.nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  total += producto.precio;

  mostrarCarrito();
}

function quitarDelCarrito(index) {
  const producto = carrito[index];
  total -= producto.precio * producto.cantidad;
  carrito.splice(index, 1);

  mostrarCarrito();
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach((producto, index) => {
    const itemCarrito = document.createElement("li");
    itemCarrito.innerText = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(2)}`;
    
    const btnQuitar = document.createElement("button");
    btnQuitar.classList.add("btn-agregar", "btn-quitar");
    btnQuitar.innerText = "Quitar";
    btnQuitar.addEventListener("click", () => quitarDelCarrito(index));
    
    itemCarrito.appendChild(btnQuitar);
    listaCarrito.appendChild(itemCarrito);
  });

  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = "$" + total.toFixed(2);
}

