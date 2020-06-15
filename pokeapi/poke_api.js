const rs = require("readline-sync")
const axios = require("axios")
const fs = require("fs")

var pokenome = rs.question("Digite o nome ou número do pokemon que deseja buscar: ").toLocaleLowerCase()

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokenome}`) 
.then((resposta) => {
    const pokemon = resposta.data
    var nome = pokemon.name
    var tipos = []
    pokemon.types.forEach((pokemon) => 
        tipos.push(pokemon.type.name))
    var habilidades =[];
    pokemon.abilities.forEach((pokemon) => {
        habilidades.push(pokemon.ability.name)})
    var habilidadedescricao = []
    pokemon.abilities.forEach((pokemon) => {
        habilidadedescricao.push(pokemon.ability.url)})
    console.log(`Nome: ${nome}`)
    console.log(`Tipo: ${tipos}`)
    console.log(`Habilidades: ${habilidades}`)
    console.log(habilidadedescricao)
var ObjPokemon = {}
ObjPokemon.nome = nome
ObjPokemon.tipos = tipos
ObjPokemon.habilidades = habilidades

var objserilializado = JSON.stringify(ObjPokemon)
var caminhodoarquivo = '/Projetos/GIT/API/pokeapi/objpokemon.json'

var salvar = rs.question("Deseja salvar esse pokemon na sua pokedex?(S/N) ").toUpperCase()
    if (salvar = "S"){
fs.appendFileSync(caminhodoarquivo, objserilializado)
    }
    else if(salvar = "N"){
    }
})
.catch((erro) => {
    console.log(erro)  
})
