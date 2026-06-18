//Anidar varios callbacks
//El resultado de una operacion se le va a pasar a la siguiente

function sum(a, b, callback){
    let result = 0;
    setTimeout(()=>{
        result = a + b;
        callback(result)
    },2000)
}

function divide(a, callback){
    let result = 0;
    setTimeout(()=>{
        result = a / 10;
        callback(result)
    },2000)
}

function multiply(a, callback){
    let result = 0;
    setTimeout(()=>{
        result = a * 2;
        callback(result)
    },2000)
}

sum(10,5, (result)=>{
    divide(result, (result)=>{
        multiply(result, (result)=>{
            console.log(result)
        })
    })
})