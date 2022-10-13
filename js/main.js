const { createApp } = Vue //creo un objeto VUE llamado createApp

createApp({
    data() {
        return {
            url: 'https://api.sampleapis.com/wines/reds',
            vinos: []
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vinos = data
                    console.log(this.vinos)
                })
        }
    },
    created() {
        this.fetchData(this.url)
    }
}).mount('#app')



/* No funciona, lo copié de la clase plus que nos dio el jueves la profe.

let url = "./js/tipoagua.json"
let datos = [];

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.datos
        console.log(datos)

        let cad = `<div class="container">`

        for (tipoagua of datos) {
            cad += `
        <div class="tarjeta">
            <img src="${tipoagua.img}" alt="${tipoagua.nombre}">
                <div class="cuerpo">
                     <h4>Nombre:${tipoagua.name}</h4>
                 </div>
        </div>
        `
        }

        cad += `</div>`

        console.log(cad)

        document.getElementById("tipoagua").innerHTML = cad

    }
    )
*/