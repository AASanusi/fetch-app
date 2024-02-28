// fetch = Function used for making HTTP requests - fetch function is promised based it's wither going to resolve or reject

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Could not fetch resource");
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(response.ok){
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } else {
            throw new Error("Cannot fetch the resource");
        }
        
    }
    catch(error) {
        console.error(error)
    }
}

fetchData();
