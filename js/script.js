/*let userName = parseInt(prompt("Ingresa tu nombre"));
console.log("¡Bienvenido a Pet Shop Mapache!");




let edadUsuario = parseInt(prompt("Cual es tu edad?"));
let edadMayor = 18;
let edadMenor = 17;

if(edadUsuario>=edadMayor){
    console.log("Podes seguir navegando");
}else{
    console.log("No podes seguir navegando");
}

while (edadUsuario<edadMenor){
    console.log("Volve a intentar");
    edadUsuario = parseInt(prompt("Cual es tu edad?"));
}



/*Pregunta sobre que animal le gusta mas*/
/*let opcion= prompt("Que animal le gusta mas? Elija 1 (pajaro), 2 (peces), 3 (cobayos), 4 (hamsters)");

if(opcion=="1"){
    console.log("Elegiste pajaro");
}else if(opcion=="2"){
    console.log("Elegiste peces");
}else if(opcion=="3"){
    console.log("Elegiste cobayo");
}else if(opcion=="4"){
    console.log("Elegiste hamsters");
}


let gustoAnimal = prompt("Porque te gusta ese animal?");

let preguntaMas = prompt("Vamos con una pregunta mas? Responde Si o No. Es para conocerte un poco mas.")
if(opcion=="Si"){
    console.log("Elegiste si");
}else if(opcion=="No"){
    console.log("Buuu :(");
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




//Diferentes productos descripcion
/*function alimentos(nombre,animal,precio){
    this.nombre = nombre;
    this.animal = animal;
    this.precio = precio;
    this.hablar = function(){console.log("Alimento " +this.nombre);}
}

function animales(nombre,tipo,precio,año){
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
    this.año = año;
    this.hablar = function(){console.log("Animal " +this.nombre);}
}

const alpiste = new alimentos ("Alpiste", "Pajaros", 500)
const canario = new animales("Rojo intenso", "Canario roller", 6000, 2022)

console.log(canario.hablar());
console.log(alpiste.hablar());
*/





//Diferentes alimentos
/*const alimentos = [ {id:100, titulo:"mezcla canarios", precio:600}, {id: 200, titulo:"colza", precio:800}, {id:300, titulo:"mezcla para cardenal", precio:1000}, {id:400, titulo:"mijo", precio:1500} ]

alimentos.push({id:500, titulo:"girasol confitero", precio: 700})
console.log(alimentos)

//el usuario ingresa los datos
let id = parseInt(prompt("Id"))
let titulo = prompt("nombre")

for (const comida of alimentos){
    comida.id = comida.id;
    console.log("El alimento que vas a comprar es " + comida.titulo + "y su id es " + comida.id);
}
*/




/*
const productos= [{
    nombre: "mijo",
    precio: 530
},
{
    nombre: "girasol confitero",
    precio:700
},
{
    nombre: "mezcla para cardenal",
    precio: 240
},
{
    nombre: "abizin",
    precio: 400
}]

let productoBuscar = prompt("Que estas buscando?")
const encontrado = productos.find(producto=> producto.nombre==productoBuscar)
console.log(encontrado);
*/


