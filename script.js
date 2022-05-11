



let nombre=prompt("cual es tu nombre");


  function mostrarBienvenida(){ 
    console.log("Hola bienvenidos a Mundu Rodantes," +nombre );
     }


 
mostrarBienvenida();

//Asignacion de casilla segun la cantidad de personas

let producto=parseFloat(prompt(" Ingrese el numero de integrantes de la familia para asiganarle la casilla mas recomedable"));

if(producto <= 2){
    console.log("Su casilla rodante ideal seria Traful")
}else if (producto <= 3){
    console.log("Su casilla rodante ideal seria Denver")

}else if (producto <= 4){
    console.log("Su casilla rodante ideal seria Bombay")
}else{
    console.log("Lo siento, no tenemos casilla para esa capacidad de personas")
}


//valor de rodante por dia

let precio= prompt("Ingrese nombre de la casilla recomendada y le diremos el costo por dia");
let precioTraful=("2000 por dia");
let precioDenver=("3000 por dia");
let precioBombay=("4000 por dia");

while(precio == "denver"){
    
    alert("el precio de denver es $" +precioDenver);

    
    precio= prompt("Ingrese nombre de la casilla recomendada y le diremos el costo por dia (0 para salir)");
    
}
while(precio == "traful"){ 

    alert("el precio de traful es $" +precioTraful);
    
    precio= prompt("Ingrese nombre de la casilla recomendada y le diremos el costo por dia  (0 para salir)");
}

while(precio == "bombay"){ 

    alert("el precio de traful es $" +precioBombay);
    
    precio= prompt("Ingrese nombre de la casilla recomendada y le diremos el costo por dia (0 para salir)");
}