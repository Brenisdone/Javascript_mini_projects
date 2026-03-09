//fetch = HTTP requests to fetch resources asynchronously(preferrably from apis)
// syntax: fetch(url, {options})

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(resource => {
        if(!resource.ok){
            throw new Error("Couldn't fetch resource");
        }
        return resource.json();
    })
    .then(value => console.log(value))
    .catch(error => console.log(error));
*/

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new error("Couldn't fetch resource for that pokemon");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = 'block';
    }
    catch(error){
        console.error(error);
    }
}

fetchData();