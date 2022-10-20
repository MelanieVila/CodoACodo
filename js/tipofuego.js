let url = "../js/tipofuego.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.tipofuego
        console.log(datos)

        let cad = `<div class="container"></div>`

        for (tipofuego of datos) {
            cad += `<div class="tarjeta">
            <img src="${tipofuego.img}" alt="${tipofuego.nombre}">
            <div class="cuerpo">
                <h4>${tipofuego.numero} - ${tipofuego.nombre}</h4>
                <p>${tipofuego.region}</p>
            </div>
        </div>`
        }

        console.log(cad)

        document.getElementById("tarjeta").innerHTML = cad;

    }
    );