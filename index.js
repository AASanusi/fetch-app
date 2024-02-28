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
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/squidward")
        if(response.ok){
            const data = await response.json();
            console.log(data);
        } else {
            throw new Error("Cannot fetch the resource");
        }
        
    }
    catch(error) {
        console.error(error)
    }
}

fetchData();
