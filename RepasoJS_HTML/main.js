const parrafoRef = document.getElementById("parrafo");
const inputRef = document.getElementById("input");
const buttonRef = document.getElementById("button");

const number = Math.floor(Math.random()*100);

buttonRef.addEventListener("click", function updateValue(){
    //Este valor es un string
    const userNumber = inputRef.value; 
    if(number < userNumber)
    {
        parrafoRef.textContent = "El numero es menor";
    }
    else if(number > userNumber)
    {
        parrafoRef.textContent = "El numero es mayor";
    }
    else
    {
        parrafoRef.textContent = "Advino el numero";
    }
});

