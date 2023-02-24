let userName = parseInt(prompt("Ingresa tu nombre"));
alert("¡Bienvenido a Pet Shop Mapache!");




let edadUsuario = parseInt(prompt("Cual es tu edad?"));
let edadMayor = 18;
let edadMenor = 17;

if(edadUsuario>=edadMayor){
    alert("Podes seguir navegando");
}else{
    alert("No podes seguir navegando");
}

while (edadUsuario<edadMenor){
    alert("Volve a intentar");
    edadUsuario = parseInt(prompt("Cual es tu edad?"));
}



/*Pregunta sobre que animal le gusta mas*/
let opcion= prompt("Que animal le gusta mas? Elija 1 (pajaro), 2 (peces), 3 (cobayos), 4 (hamsters)");

if(opcion=="1"){
    alert("Elegiste pajaro");
}else if(opcion=="2"){
    alert("Elegiste peces");
}else if(opcion=="3"){
    alert("Elegiste cobayo");
}else if(opcion=="4"){
    alert("Elegiste hamsters");
}


let gustoAnimal = prompt("Porque te gusta ese animal?");

let preguntaMas = prompt("Vamos con una pregunta mas? Responde Si o No. Es para conocerte un poco mas.")
if(opcion=="Si"){
    alert("Elegiste si");
}else if(opcion=="No"){
    alert("Buuu :(");
}



/*Carrito de compras (EN PROCESO)*/ 

/*function calcular(primerNumero, segundoNumero, operacion){

    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return "operacion invalida"
    }

}*/