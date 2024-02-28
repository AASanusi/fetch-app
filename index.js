// fetch = Function used for making HTTP requests - fetch function is promised based it's wither going to resolve or reject

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Could not fetch resource");
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

