const games = [
    { "name": "GTA VI", "price": 90 },
    { "name": "FIFA", "price": 60 },
    { "name": "Mario Kart", "price": 50 }
]

//Foreach
//Parametros posicionales - Primer el elemento del array - Obligatorio
//Segundo parametro - Representa el indice - Opcional
/*
games.forEach((game, index)=>{
    console.log("Index: ", index);
    console.log("Game Name: ", game.name)
});
*/

//Map
//Primer parametro elemento actual
/*
console.log(games);
const resultArray = games.map((game) => {
    game.price = game.price * 0.2;
    return game;
});
console.log(resultArray);

const filterArray = games.filter((game) => {
    if (game.price < 80) {
        game.price = game.price * 0.2;
        return game;
    }
});
console.log(filterArray);

const result = games.find((game) => {
   return game.name == "Mario Kart"
});

const result2 = games.find(g => g.price > 50);
console.log(result2)
*/

//Reduce
const total = games.reduce((acum, game)=>{
    acum = acum + game.price
    return acum
},0)

console.log(total)