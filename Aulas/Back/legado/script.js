const latlong = document.getElementById("latlong");
const buscarBtn = document.getElementById("buscarbtn");
const container = document.getElementById("container");

document.addEventListener('keydown', (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        buscarBtn.click();
    }
});

buscarBtn.addEventListener('click', () => {
    const nomepais = latlong.value.trim();
    if (nomepais === "") {
        alert("Por favor, digite o nome de um país");
        return;
    }

    container.innerHTML = `<p class="buscar">Buscando...</p>`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(nomepais)}&format=json`;

    fetch(url)
        .then(response => {
            if(!response.ok) throw new Error("País não encontrado");
            return response.json();
        })
        .then(data => {
            if(data.length === 0) throw new Error("País não encontrado");
            
            const pais = data[0];
            const lat = pais.lat;
            const lon = pais.lon;

            const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}current=temperature_2m,is_day`;

            fetch(url2)
                .then(response => {
                    if(!response.ok) throw new Error("Temperatura não encontrada");
                    return response.json();
                })
                .then(tempData => {
                    const temp = tempData;
                    const temperatura = tempData.current_weather.temperature

                    const is_day = tempData.current.is_day
                    is_dayDisplay = ""

                    if(is_day) {
                        is_dayDisplay = "Dia"
                    }else{
                        is_dayDisplay = "Noite"
                        container.classList = "noite"
                    }


                    //Diego e Joao
                    container.innerHTML = `
                        <h3>${pais.display_name}</h3>

                        <h2>${temperatura}°C</h2>

                        <p>${is_dayDisplay}</p>
                        
                        `;
                    latlong.value = "";
                });
        })
        .catch(error => {
            console.error(error);
            container.innerHTML = `<p class="erro">Erro: ${error.message}</p>`;
            latlong.value = "";
    });
});
