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

red.addEventListener("click", () => {
    colorPicker.red();
    getPokemon()
})

blue.addEventListener("click", () => {
    colorPicker.blue();
    getPokemon()
})

yellow.addEventListener("click", () => {
    colorPicker.yellow();
    getPokemon()
})

green.addEventListener("click", () => {
    colorPicker.green();
    getPokemon()
})

black.addEventListener("click", () => {
    colorPicker.black();
    getPokemon()
})

brown.addEventListener("click", () => {
    colorPicker.brown();
    getPokemon()
})

purple.addEventListener("click", () => {
    colorPicker.purple();
    getPokemon()
})

gray.addEventListener("click", () => {
    colorPicker.gray();
    getPokemon()
})

white.addEventListener("click", () => {
    colorPicker.white();
    getPokemon()
})

pink.addEventListener("click", () => {
    colorPicker.pink();
    getPokemon()
})

function getPokemon() {
fetch(`https://pokeapi.co/api/v2/pokemon-color/black/`)
    .then(res => res.json())
    .then(data => {
        random = Math.ceil(Math.random() * data.pokemon_species.length)
        console.log(random)
        console.log(data.pokemon_species[random])
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.pokemon_species[random].name}/`)
            .then(res => res.json())
            .then(data => {
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
