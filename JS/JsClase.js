




class Producto {            //Creador de objetos productos
  // clases van con mayuscula
  constructor(estilo, precioestilo) {
    this.estilo = estilo;
    this.precioestilo = precioestilo;
    this.estiloElegido = function(){ fconsole("Usted selecciono "+ this.estilo)}

  }
}


const IPA = new Producto("IPA", 300);
const SCOTISH = new Producto("SCOTISH", 250);
const STOUT = new Producto("STOUT", 280);
const GOLDEN = new Producto("GOLDEN", 200);

let Productos = [IPA,SCOTISH,STOUT,GOLDEN]    //Array de productos
let Usuarios = []                             //Array de Usuarios, unicamente lo utilice para poder usar un push

                //Variables
let descuento = 0;                            
let precio = 0;
let sinIva = 0;

                           // Funciones
function AgregarUsuario(usuario){
  Usuarios.push(usuario);
}

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





let usuario = prompt("Ingrese su nombre")   //Solicitud Nombre de Usuario
AgregarUsuario(usuario)


let opcion = parseInt(prompt(               //Solicitud de producto
 
  "¿Que cerveza vas a llevar? \n\n 1- IPA \n\n 2- Scotish \n\n 3- Stout \n\n 4- Golden?"));
  
// me fijo cual eligio la persona 

let litros = prompt("cuantos litros desea?") //Solicitud de litros




switch (opcion) {                       //Segun el producto corresponde el case, para aplicar las funciones correspondientes

  case 1: 

  
  IPA.estiloElegido()

  fconsole("El precio por litro es $ " + Productos[0].precioestilo);



fmultiplicacion(Productos[0].precioestilo, litros);

fconsole("Precio " + precio);

function confirmar(){


  let lista = document.getElementById("lista");

  let li = document.createElement("li");
  li.innerHTML = "Usted eligio " + Productos[0].estilo + " valor por listro $" + Productos[0].precioestilo;

  lista.appendChild(li);


}




  break;

  case 2: 

  SCOTISH.estiloElegido()

  console.log("El precio por litro es $" + Productos[1].precioestilo);

  fmultiplicacion(Productos[1].precioestilo, litros);
  
  fconsole("Precio " + precio);

  function confirmar(){


    let lista = document.getElementById("lista");
  
    let li = document.createElement("li");
    li.innerHTML = "Usted eligio " + Productos[1].estilo  + " valor por listro $" + Productos[1].precioestilo;
  
    lista.appendChild(li);
  
  
  }
  
  


     break;

  case 3: 

  function confirmar(){


    let lista = document.getElementById("lista");
  
    let li = document.createElement("li");
    li.innerHTML = "Usted eligio " + Productos[2].estilo + " valor por listro $" + Productos[2].precioestilo;
  
    lista.appendChild(li);
  
  
  }

  STOUT.estiloElegido()

  fconsole("El precio por litro es $" + Productos[2].precioestilo);

  fmultiplicacion(Productos[2].precioestilo, litros);

  fconsole("Precio " + precio);



     break;

  case 4: 

  
  function confirmar(){


  let lista = document.getElementById("lista");

  let li = document.createElement("li");
  li.innerHTML = "Usted eligio " + Productos[3].estilo + " valor por listro $" + Productos[3].precioestilo;

  lista.appendChild(li);


  }

  GOLDEN.estiloElegido()

  fconsole("El precio por litro es $" + Productos[3].precioestilo);

  fmultiplicacion(Productos[3].precioestilo, litros);

fconsole("Precio " + precio);


    break;
    
    default:
      alert("Caracter no valido")
    break;
}
 


if (litros < 10) {                            //Calculos de descuentos en base a litros      
} else if (litros > 9 && litros < 30) {
  descuento = 10;
} else if (litros > 29 && litros < 50) {
  descuento = 20;
} else if (litros > 49) {
  descuento = 30;
}

fconsole("El decuento es " + descuento + "%");

//uso lo que retorna la function fporcentaje(precio, descuento) no la variable
fconsole("Precio con descuento aplicado $" + fporcentaje(precio, descuento));

let consumidorFinal = prompt("Consumidor final?").toUpperCase();  //Consulta si es consumidor final o no para descriminar I.V.A.

if(consumidorFinal == "NO"){
  fiva(precioDescuento)
  fconsole("Precio final sin I.V.A. $" + sinIva);

  li.innerHTML = "Precio final $" + sinIva ;


  }
  else if(consumidorFinal == "SI"){
  fconsole("Precio final $" + precioDescuento)

  
  function confirmar(){


  let lista = document.getElementById("lista");

  let li = document.createElement("li");
  li.innerHTML = "Precio final $" + precioDescuento;

  lista.appendChild(li);


}
  }   


