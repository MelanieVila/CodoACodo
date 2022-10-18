const myFormEl = document.querySelector(".form-insc");

myFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.temas = data.getAll("temas");
    console.log({ value });
});

/*
function main() {
const form = document.queryCommandValue(".form-insc");

form.addEventListener("submit", function (evento){
    evento.preventDefault();
    const formData = evento.target;
    console.log(formData.nombre.value);
    console.log(formData.apellido.value);
    console.log(formData["slect"].value);
    console.log(formData.mensaje.value);
});
};

main();
*/