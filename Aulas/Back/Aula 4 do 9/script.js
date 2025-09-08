const paisInput = document.getElementById("paisinput");
const buscarBtn = document.getElementById("buscarbtn");
const container = document.getElementById("container");

document.addEventListener('keydown', (event) =>{
    if(event.key ==="Enter"){
        event.preventDefault()
        buscarBtn.click()
    }
})

buscarBtn.addEventListener('click', () => {
    const nomepais = paisInput.value.trim();
    if (nomepais === "") {
        alert("Por favor, digite o nome de um país")
        return;
    }

    const url = `https://restcountries.com/v3.1/translation/${nomepais}`

    container.innerHTML = `<p class="coloridinho">Buscando...</p>`;
    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error("Pais Não Encontrado")
            }
            return response.json();
        })
        .then(data => {
            const pais = data[0]    
            const moeda = Object.values(pais.currencies)[0].name;
            
            container.innerHTML = 
                `<h2>Nome: ${pais.translations.por.common}</h2>
                <p>Continente: <strong>${pais.continents}</strong></p>
                <img src="${pais.flags.png}" alt="Bandeira ${pais.name.common}" width="150">
                <p>Capital: <strong>${pais.capital[0]}</strong></p>
                <p>População <strong>${pais.population.toLocaleString()}</strong></p>
                <p>Região: <strong>${pais.region}</strong></p>
                <p>SubRegião: <strong>${pais.subregion}</strong></p>
                <p>Republica: <strong>${pais.name.official}</strong></p>
                <p>Moéda: <strong>${moeda}</strong></p>
                `

                paisInput.balue = "";
        })
        .catch(error => {
            console.error(error)
            container.innerHTML = `<p style="color: red;" class="erro">Erro: ${error.message}</p>`
            paisInput.value = "";
        })

})