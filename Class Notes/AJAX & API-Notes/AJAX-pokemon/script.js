// console.log("Running");

// document.getElementById("loadPokemon").addEventListener("click",function(){
//     // we want to create a new requeqst to grab the pokemon api data
//     console.log("callback function");
//     var xhr = new XMLHttpRequest();

//     xhr.open("GET","https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");

    
//     xhr.onload = function (){
//         console.log("ESHKEEEER");
//         console.log(this);
//         var response = JSON.parse(this.responseText);
//         console.log(response);
//         var pokemonString="";
//         response.results.array.forEach(element => {
//             pokemonString += `<li><a href = ${pokemon.url}>${pokemon.name}</a></li>`
//         });
        
//     }

//     xhr.send();
// });

// Promises

// var userData = await postresDatabase.GetUserData()

const DBGetUseData = new Promise((resolve, reject) =>{
    setTimeout({}=>
        resolve({username: 'user', password:123}'
        ,5000'));
})

// console.log(DBGetUseData);

DBGetUserData.then(response=>{
    console.log(response)
});
// -------------------- Asynchronus API Call ---------------
document.getElementById("loadPokemon").addEventListener("click", function(){

})