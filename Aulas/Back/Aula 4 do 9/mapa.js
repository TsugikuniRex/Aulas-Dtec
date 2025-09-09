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

    container.innerHTML = `<p class="coloridinho">Buscando...</p>`;

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

            // Adiciona timezone=auto para pegar hora local
            const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

            fetch(url2)
                .then(response => {
                    if(!response.ok) throw new Error("Temperatura não encontrada");
                    return response.json();
                })
                .then(tempData => {
                    const temp = tempData.current_weather.temperature;
                    const horarioISO = tempData.current_weather.time;

                    // Pega só a hora (HH)
                    const hora = new Date(horarioISO).getHours();
                    let periodo;
                    if (hora >= 6 && hora < 18) {
                        periodo = "Dia ☀️";
                    } else {
                        periodo = "Noite 🌙";
                    }

                    container.innerHTML = `
                        <h2>Nome: ${pais.display_name}</h2>
                        <h2>Latitude: ${lat}</h2>
                        <h2>Longitude: ${lon}</h2>
                        <h2>Temperatura: ${temp}°C</h2>
                        <h2>Período: ${periodo}</h2>
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
