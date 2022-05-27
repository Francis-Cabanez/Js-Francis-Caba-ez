



// let nombre=prompt("cual es tu nombre");


//   function mostrarBienvenida(){ 
//     console.log("Hola bienvenidos a Mundu Rodantes," +nombre );
//      }


 
// mostrarBienvenida();

// //Asignacion de casilla segun la cantidad de personas

// let producto=parseFloat(prompt(" Ingrese el numero de integrantes de la familia para asiganarle la casilla mas recomedable"));

// if(producto <= 2){
//     console.log("Su casilla rodante ideal seria Traful")
// }else if (producto <= 3){
//     console.log("Su casilla rodante ideal seria Denver")

// }else if (producto <= 4){
//     console.log("Su casilla rodante ideal seria Bombay")
// }else{
//     console.log("Lo siento, no tenemos casilla para esa capacidad de personas")
// };




// // eleccion de unidades

// const unidades=[
//     { 
//         casilla:"traful",
//         capacidad:"2 personas",
//         precio: "2000 por dia" ,
//     },

//     {
//         casilla:"denver",
//         capacidad:"3 personas",
//         precio:"3000 por dia",
//     },

//     {
//         casilla:"bombay",
//         capacidad:"4 personas",
//         precio: "4000 por dia",

//     },


// ];

//     for(const rodantes of unidades ){
//         console.log(rodantes);
//     }


//  let casillaABuscar= prompt("Ingrese el nombre del rodante recomendado");
// let busqueda=unidades.find((rodantes)=>rodantes.casilla.toLowerCase() ==casillaABuscar.toLowerCase());
// console.log(busqueda);



// //  Requisitos de alquiler
// let numero= parseFloat(prompt("ingrese 1 para ver requisitos legales"));
// let requisitos=(" Gancho tipo bocha 1  7/8,\n Ficha conexión de luces, \n Registro de conducir tipo B2 en adelante (B1 no sirve), \n Entregamos la unidad con patente 101, \n Con sus datos sacamos el seguro de la unidad.");

// do{
//     numero==1;
   
//    alert("Requisitos legales para el alquiler:"+requisitos);
//    }
// while(numero!=1);
//     alert("Gracias por su consulta");



// Eventos 


let dataNombre=document.getElementById("nombre");
let dataEmail=document.getElementById("mail");
let dataTel=document.getElementById("telefono");

dataNombre.onchange=()=>{

    console.log("Su nombre es:" +dataNombre.value);
}

dataEmail.onchange=()=>{

    console.log("Su Email es:" +dataEmail.value);

}

dataTel.onchange=()=>{

    console.log("Su telefono es:" +dataTel.value);
}


//boton colors

let boton=document.getElementById("boton1");

boton.mousemove=()=>{
    boton.style.background.green;
}