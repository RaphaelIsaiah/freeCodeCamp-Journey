// DOM ELEMENT SELECTION
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const fccProxyApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

// Async function to fetch data from the API
const fetchPokemon = async () => {
  try {
    // To enable search by either name or id
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`${fccProxyApi}${pokemonNameOrId}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {

    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
};

// fetchPokemon();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPokemon();
});
