/*
Objetos y los arreglos -> Tipos de variables
                        Estructuras de datos
Mas de 1 valor dentro de la variable
*/

//Arreglos, conjunto de elementos ordenados
// Corchetes cuadrados [0, 1, 2, 3 , 4]
let array = ["Inglaterra", "Croacia", "Portugal"];
// Meter un elemento nuevo al final del arreglo
array.push("Colombia");
// Sacar un elemento nuevo al final del arreglo
let element = array.pop();
// Forma de usar for
array.forEach(function ShowNames(element){
    console.log(element);
})

// Objeto en programación -> 
// Algo que tiene atributos y Metodos

//Objeto literal
const persona = {
    name: "Daniela",
    degree: "Multimedia",
    university: "Sanbuena",
    courses: ["BD", "POO", "CG"]
}
persona.name = "Otro Nombre"
console.log(persona);