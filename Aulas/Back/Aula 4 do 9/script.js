const paisInput = document.getElementById("paisinput");
const buscarBtn = document.getElementById("buscarbtn");
const container = document.getElementById("container");

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buscarBtn.click();
    }
});

buscarBtn.addEventListener('click', () => {
    const nomepais = paisInput.value.trim();
    if (nomepais === "") {
        alert("Por favor, digite o nome de um país");
        return;
    }

    container.innerHTML = `<p class="coloridinho">Buscando...</p>`;

    const url = `https://restcountries.com/v3.1/translation/${nomepais}`; 
    // alternativa: `https://restcountries.com/v3.1/name/${nomepais}?fullText=true`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("País não encontrado");
            }
            return response.json();
        })
        .then(data => {
            const pais = data[0];

            // Pega a moeda dinamicamente (primeira chave do objeto currencies)
            const moeda = pais.currencies ? 
                Object.values(pais.currencies)[0].name : "Não disponível";

            container.innerHTML =
                `<h2>Nome: ${pais.translations.por.common}</h2>
                <p>Continente: <strong>${pais.continents}</strong></p>
                <img src="${pais.flags.png}" alt="Bandeira ${pais.name.common}" width="150">
                <p>Capital: <strong>${pais.capital ? pais.capital[0] : "Não disponível"}</strong></p>
                <p>População: <strong>${pais.population.toLocaleString()}</strong></p>
                <p>Região: <strong>${pais.region}</strong></p>
                <p>Sub-Região: <strong>${pais.subregion || "Não disponível"}</strong></p>
                <p>Nome Oficial: <strong>${pais.name.official}</strong></p>
                <p>Moeda: <strong>${moeda}</strong></p>`;

            paisInput.value = "";
        })
        .catch(error => {
            console.error(error);
            container.innerHTML = `<p style="color: red;" class="erro">Erro: ${error.message}</p>`;
            paisInput.value = "";
        });
});
