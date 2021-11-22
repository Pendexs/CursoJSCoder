$(document).ready( function(){



  
$("#verCarrito").click(function(e){
  $("#carrito").toggle() ;


  if( e.target.innerHTML != "Ocultar carrito"){

    e.target.innerHTML = "Ocultar carrito";

}
else{
    e.target.innerHTML = "Ver carrito";




}



});

})




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

  $("tbody").append(`<tr><td><img src="${producto.img} "></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td></tr>
                    `)

  
  let carritoJSON = JSON.stringify (carrito)
  
  localStorage.setItem("Carrito", carritoJSON )



}

console.log(carrito);



let geoLoc = navigator.geolocation.getCurrentPosition( mostrarGeo);

function mostrarGeo( position ){

    $.ajax({


      url:'http://api.openweathermap.org/data/2.5/weather',
      type:"GET",
      data:{
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: 'bbf8893c6e8030e157bb633d11a66e17',
          dataType:"jsonp",
          units: 'metric'
      },
      success:function(data){
  
          console.log( data);
          let icono = data.weather[0].icon;
          let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
          $("#icono").attr("src" , iconoURL);


    

          let contenido = `<div>
                              <p>${data.name}</p>                            
                              <p>${data.weather[0].main}</p>
                              <p>TEMP: ${data.main.temp}</p>
  
                          </div>`;
  
  
          $("#cajaClima").append(contenido);
      } 
  })
}

$("#botonClima").click(function(){

  $("#cajaClima").toggle(1000)})
