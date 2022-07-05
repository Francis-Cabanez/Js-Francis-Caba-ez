
//eventoboton
let boton=document.getElementById("buton");
boton.onclick=()=>{
    boton.className="btn btn-danger";
    boton.textContent="Reservado";
}
let boton2=document.getElementById("buton2");
boton2.onclick=()=>{
    boton2.className="btn btn-danger";
    boton2.textContent="Reservado";
}
let boton3=document.getElementById("buton3");
boton3.onclick=()=>{
    boton3.className="btn btn-danger";
    boton3.textContent="Reservado";
}



// JSON---------------------------------------------------



let lista=document.getElementById("listaCasilla");
let dolarVenta;
valorDolar();
renderizarProductos();

function renderizarProductos() {
    for (const casilla of unidades) {

        lista.innerHTML+=`<li class=" col-sm-4 list-group-item">
        <h3>  ${casilla.nombre} </h3>
        <img src=${casilla.foto} width="250" height="250">
        <p><strong> Por dia: $ ${casilla.precio} </strong></p>
        <p>Precio U$ ${(casilla.precio/dolarVenta)}</p>
        
        </li>`
    }
}

async function valorDolar() {
    const dolarHoy = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    const resp=await fetch(dolarHoy)
    const data=await resp.json()
    dolarVenta = data.venta;
}


//ingresodatos

let botonEnvio=document.getElementById("botonEnviar");

const form=document.getElementById("formulario");

function enviarForm(){

   

    const nombre=document.getElementById("nombre").value
    const mail=document.getElementById("mail").value
    const telefono=document.getElementById("telefono").value
    const uni=document.getElementById("unidades").value
    const consulta=document.getElementById("consulta").value

   
    const usuario = new Cliente(nombre, mail, telefono, uni, consulta);

   console.log(usuario);
    
    

const clienteAJson=JSON.stringify(usuario);
localStorage.setItem("cliente",clienteAJson);   
}


botonEnvio.onclick=()=>{
    enviarForm();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por su consulta',
        showConfirmButton: false,
        timer: 2500
      })
   
        
}


//CLASS


class Cliente{ 
 constructor (nombre, mail, telefono, unidad, consulta){

    this.nombre=nombre;
    this.mail=mail;
    this.telefono=telefono;
    this.unidad=unidad;
    this.consulta=consulta;

    
}
}











