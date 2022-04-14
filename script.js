const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")
const black = document.querySelector(".black")
const brown = document.querySelector(".brown")
const purple = document.querySelector(".purple")
const gray = document.querySelector(".gray")
const white = document.querySelector(".white")
const pink = document.querySelector(".pink")
const pokemon = document.querySelector("#pokemon")

color = "";

const colorPicker = {
    "red": function() {color = "red"},
    "blue": function() {color = "blue"},
    "yellow": function() {color = "yellow"},
    "green": function() {color = "green"},
    "black": function() {color = "black"},
    "brown": function() {color = "brown"},
    "purple": function() {color = "purple"},
    "gray": function() {color = "gray"},
    "white": function() {color = "white"},
    "pink": function() {color = "pink"}
}

function clearButtonColors() {
    red.style.backgroundColor = "";
    red.style.color = "black";
    blue.style.backgroundColor = "";
    blue.style.color = "black";
    yellow.style.backgroundColor = "";
    yellow.style.color = "black";
    green.style.backgroundColor = "";
    green.style.color = "black";
    black.style.backgroundColor = "";
    black.style.color = "black";
    brown.style.backgroundColor = "";
    brown.style.color = "black";
    purple.style.backgroundColor = "";
    purple.style.color = "black";
    gray.style.backgroundColor = "";
    gray.style.color = "black";
    white.style.backgroundColor = "";
    white.style.color = "black";
    pink.style.backgroundColor = "";
    pink.style.color = "black";
}

red.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.red();
    getPokemon();
    red.style.backgroundColor = "red";
    red.style.color = "white";
})

blue.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.blue();
    getPokemon();
    blue.style.backgroundColor = "blue";
    blue.style.color = "white";
})

yellow.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.yellow();
    getPokemon();
    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "black";
})

green.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.green();
    getPokemon();
    green.style.backgroundColor = "green";
    green.style.color = "white";
})

black.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.black();
    getPokemon();
    black.style.backgroundColor = "black";
    black.style.color = "white";
})

brown.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.brown();
    getPokemon();
    brown.style.backgroundColor = "brown";
    brown.style.color = "white";
})

purple.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.purple();
    getPokemon();
    purple.style.backgroundColor = "purple";
    purple.style.color = "white";
})

gray.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.gray();
    getPokemon();
    gray.style.backgroundColor = "gray";
    gray.style.color = "white";
})

white.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.white();
    getPokemon();
    white.style.backgroundColor = "white";
    white.style.color = "black";
})

pink.addEventListener("click", () => {
    clearButtonColors();
    colorPicker.pink();
    getPokemon();
    pink.style.backgroundColor = "pink";
    pink.style.color = "white";
})

function getPokemon() {
fetch(`https://pokeapi.co/api/v2/pokemon-color/${color}/`)
    .then(res => res.json())
    .then(data => {
        random = Math.floor(Math.random() * data.pokemon_species.length)
        console.log(random)
        console.log(data)
        console.log(data.pokemon_species[random])
        url = data.pokemon_species[random].url 
        urlArr = url.split("/")
        pokedex = Number(urlArr[urlArr.length-2])
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokedex}/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                pokemon.src = data.sprites.front_default;
                arr = data.name.split("")
                document.querySelector("#name").innerText = arr[0].toUpperCase() + arr.slice(1).join("");         
            })
            .catch(err => {
                console.log(`error ${err}`)          
            })
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
