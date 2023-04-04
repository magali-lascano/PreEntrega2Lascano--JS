//After clase 10
console.table(productos);
const carrito = [];
let contenedor = document.getElementById("misprods");

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div id="prodsass" class="card col-sm-2">
                    <img id="cardimg" src=${producto.foto} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.id}</h5>
                        <p class="card-text">${producto.nombre}</p>
                        <p class="card-text">$ ${producto.precio}</p>
                        <button id='btn${producto.id}' class="buttonsass">Agregar</button>
                    </div>
                </div>
        `;
    }
    // class="btn btn-primary align-bottom
    //EVENTOS
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
    });
});
}

renderizarProductos();

function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    console.table(carrito);
    alert(`Agregaste ${prodAAgregar.nombre} al carrito ! 🛒✨`);
    //agregar fila a la tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.id}</td>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
        </tr>
    `;
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    document.getElementById('total').innerText = 'Total a pagar $: '+totalCarrito;
}