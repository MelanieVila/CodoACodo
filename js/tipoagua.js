let url = "../js/tipoagua.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.tipoagua
        console.log(datos)

        let cad = `<div class="container">`

        for (tipoplanta of datos) {
            cad += `<div class="tarjeta">
            <img src="${tipoplanta.img}" alt="${tipoplanta.nombre}">
            <div class="cuerpo">
                <h2>${tipoplanta.numero}</h2><h4>${tipoplanta.nombre}</h4>
                <p>${tipoplanta.region}</p>
            </div>
        </div>`
        }

        cad+=`</div>`

        console.log(cad)

        document.getElementById("tarjeta").innerHTML = cad;

    }
    );
