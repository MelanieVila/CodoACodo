let url = "../js/tipoagua.json"
let tipoagua = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        tipoagua = data.tipoagua
        console.log(tipoagua)

        let cad = `<div class="container">`
        for (pokemon of tipoagua) {
            cad += `<div class="tarjeta">
            <img src="${pokemon.img}" alt="${pokemon.nombre}">
            <div class="cuerpo">
                <h4>${pokemon.numero} - ${pokemon.nombre}</h4>
                <p>${pokemon.region}</p>
            </div>
        </div>`
        }
        cad += `</div>`

        console.log(cad)

        document.getElementById("tarjeta").innerHTML = cad

    }
    );