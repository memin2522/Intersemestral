//Variables
//Declaro la variable y puedo modificar su valor despues
let a 
//Declaro la variable la inicializo y no puede volver a cambiar
const b = 0 

//Operaciones basicas
/*
a = 1 + b;
console.log(a)
a = 1 - b;
console.log(a)
a = "Hola"
console.log(a)
a = true
console.log(a)

//Operaciones logicas
const alpha = false;
const beta = true;

//Operacion AND -> Si los dos son true el resultado es true
/*
A       B       Res
true    False   false
false   true    false
true    true    true
false   false   false
*/
//console.log(alpha && beta)

//OR-Si uno de los dos es verdad
/*
A       B       Res
true    False   true
false   true    true
true    true    true
false   false   false

console.log(alpha || beta)

//Negación-Darle la vuelta
console.log(!false);

*/
//Condicionales
//Operaciones - Condiciones - Ciclos

//Igualdades
// == Doble igual, es una comparacion sencilla
/*
1 == "1" -> true
1 === "1" -> false
// === Triple igual es comparacion estricta, mira el contenido
// Y el tipo

let i = 5;
let j = 1; 
if(i == j)
{
    console.log("Son lo mismo")
}else if(i > j)
{
    console.log("Son diferentes")
}
else if (j <= i)
{

}
*/

//Ciclos
//For -> Ejecuta una accion un numero contado de veces
//While -> Ejecuta de manera indefinida hasta que se cumpla una condicion
const array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) 
{
    console.log(array[index])
}

let whileVariable = 1;
while(whileVariable < 1000)
{
    whileVariable = whileVariable * 2;
    console.log(whileVariable)
}


