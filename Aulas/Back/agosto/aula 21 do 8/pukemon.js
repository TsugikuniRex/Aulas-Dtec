fetch('https://pokeapi.co/api/v2/pokemon/151')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data.name)
    console.log(data.height)
    console.log(data.weight)
    
    const Mew = data.name
    const alturapokemon = data.height
    const pesopokemon = data.weight
    const nome = document.querySelector(".nome")
    nome.innerHTML = `Nome do pokemon: ${Mew}, Altura: ${alturapokemon}, Peso: ${pesopokemon}Kg`

})