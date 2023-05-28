const contentBox = document.getElementById("content-box");
const pokemonInfo = document.getElementById("pokemon-info");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonTypes = document.getElementById("pokemon-types");
const pokemonDesc = document.getElementById("pokemon-description");
const pokemonList = document.getElementById("pokemon-list");

let pokemonCount = 10;
let pokeData = {};

window.onload = async function () {
  pokemonAPI(1);

  for (let i = 1; i <= pokemonCount; i++) {
    await pokemonAPI(i);

    const pokemon = document.createElement("div");
    pokemon.id = i;
    pokemon.innerText = i.toString() + ". " + pokeData[i]["name"];
    pokemon.classList.add("pokemon-name");
    pokemon.addEventListener("click", updatePoke);
    pokemonList.append(pokemon);
  }
};

async function pokemonAPI(num) {
  const pokemonURL = "https://pokeapi.co/api/v2/pokemon/1" + num.toString();
  const response = await fetch(pokemonURL);
  const pokemonData = await response.json();

  const pokemonName = pokemonData["name"];
  const pokemonType = pokemonData["types"];
  const pokemonImg = pokemonData["sprites"]["front_default"];

  const res = await fetch(pokemonData["species"]["url"]);
  let pokeDesc = await res.json();

  pokeDesc = pokeDesc["flavor_text_entries"][22]["flavor_text"];

  pokeData[num] = {
    name: pokemonName,
    img: pokemonImg,
    types: pokemonType,
    desc: pokeDesc,
  };
}

function updatePoke() {
  pokemonImg.src = pokeData[this.id].img;

  while (pokemonTypes.firstChild) {
    pokemonTypes.firstChild.remove();
  }

  let types = pokeData[this.id]["types"];

  for (let i = 0; i < types.length; i++) {
    let type = document.createElement("span");
    type.innerText = types[i]["type"]["name"];
    pokemonTypes.append(type);
  }
}
