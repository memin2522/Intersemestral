//Funcion Normal
/*
function NombreFuncion(parametro1, parametro2)
{
    return parametro1 + parametro2;
    //La funcion devuelve un valor
}

const result = NombreFuncion(25 + 2);

//Almacenar funciones en variables
const sum = function Sumar(a,b){
    return a + b
}
*/
//Funciones lambda o Funciones flecha
//Funciones sin nombre o anonimas -> simplificar el codigo
//Usar 1 vez o en respuesta a otra accion

(a, b) => {
    return a + b
};

const sum = function Sumar(a,b){
    console.log(a + b) 
}
console.log("Empece a esperar")
setTimeout(()=>{
    const a = 10+10
    console.log(a)
},5000)