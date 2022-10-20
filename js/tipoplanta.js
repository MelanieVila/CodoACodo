let url = "../js/tipoplanta.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.tipoplanta
        console.log(datos)

        let cad = `<div class="container"></div>`

        for (tipoplanta of datos) {
            cad += `<div class="tarjeta">
            <img src="${tipoplanta.img}" alt="${tipoplanta.nombre}">
            <div class="cuerpo">
                <h4>${tipoplanta.numero} - ${tipoplanta.nombre}</h4>
                <p>${tipoplanta.region}</p>
            </div>
        </div>`
        }

        console.log(cad)

        document.getElementById("tarjeta").innerHTML = cad;

    }
    );