
let carrito = [];
let usuarios = [];

                           // Funciones
function AgregarUsuario(usuario){
  usuarios.push(usuario);
}


let usuario = prompt("Ingrese su nombre")   //Solicitud Nombre de Usuario


AgregarUsuario(usuario) 


localStorage.setItem("Nombre de Usuario", usuario )

console.log(usuario)


function fconsole(mensaje) {
  console.log(mensaje);
}

function fmultiplicacion(numeroA, numeroB) {
  precio = numeroA * numeroB; 
  return precio;
}

function fporcentaje(numero, porcentaje) {
  precioDescuento = numero - (numero * porcentaje) / 100; // FALTABA RETURN
  return precioDescuento;
}

function fiva(numero) {
  sinIva = numero / 1.21;
  return sinIva;
}


function fdescuento(litro){
  if (litro < 10) {                            //Calculos de descuentos en base a litros      
  } else if (litro > 9 && litro < 30) {
    descuento = 10;
  } else if (litro > 29 && litro < 50) {
    descuento = 20;
  } else if (litro > 49) {
    descuento = 30;
  }
  return descuento;
}

let bCompra = document.querySelectorAll(".bCompra")
console.log( bCompra);

for(let boton of bCompra ){

  boton.addEventListener("click", fCarrito)

  console.log(boton)
}


function fCarrito(e){

  let hijo = e.target;
  let padre = hijo.parentNode.parentNode;

  let nombreProducto = padre.querySelector("h3").textContent;
  let img = padre.querySelector("img").src;
  let precio = padre.querySelector("p").textContent;
  


  const producto = {

      nombre: nombreProducto,
      img: img,
      precio: precio,
  

  }


  carrito.push(producto);
  mostrarCarrito( producto);

}




function mostrarCarrito( producto){

  let fila = document.createElement("tr"); 

  fila.innerHTML = `<td><img src="${producto.img} "></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                  `

  let tbody = document.getElementById("tbody");

  tbody.appendChild( fila );

  
  let carritoJSON = JSON.stringify (carrito)
  
  localStorage.setItem("Carrito", carritoJSON )



}

console.log(carrito);




