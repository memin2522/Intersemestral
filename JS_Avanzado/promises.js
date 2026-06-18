function sum(a,b){
    return new Promise((resolve, reject)=>{
        console.log("Calculando Suma...")
        setTimeout(()=>{
            let result = a + b;
            if(result > 5){
                resolve(result)
            }else{
                reject("La suma es menor")
            }
        },2000)
    })
}

function divide(a){
    return new Promise((resolve, reject)=>{
        console.log("Calculando Division...")
        setTimeout(()=>{
            let result = a / 100;
            if(result < 100){
                resolve(result)
            }else{
                reject("La division fallo")
            }
        },2000)
    })
}

function multiply(a){
    return new Promise((resolve, reject)=>{
        console.log("Calculando Multiplicacion...")
        setTimeout(()=>{
            let result = a * 50;
            if(result < 50){
                resolve(result)
            }else{
                reject("La Multiplicacion fallo")
            }
        },2000)
    })
}
/*
sum(10,5)
    .then(result => divide(result))
    .then(result => multiply(result))
    .then(result => console.log(result))
    .catch(error => console.error(error));
*/

async function calculate() {
    try {
        const resultSum = await sum(10,5);
        const resultDiv = await divide(resultSum);
        const finalResult = await multiply(resultDiv)

        console.log(finalResult)
    }
    catch(error) {
        console.error(error);
    }
    finally{
        console.log("Operation finish")
    }
}

calculate()