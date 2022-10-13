const datos = {
    nombreyapellido = '',
    DNI = '',
    email = ''
}

const nombreyapellido = document.querySelector('#nombreyapellido');
const DNI = document.querySelector('#DNI');
const email = document.querySelector('#email');
const formulario = document.querySelector('.formulario');

nombreyapellido.addEventListener('input', leerTexto);
DNI.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
}

// const {nombreyapellido, email, mensaje} = datos;

if (nombreyapellido === '') {
    alert('El campo Nombre y Apellido está vacío');
    return;
}

if (DNI === '') {
    alert('El campo DNI está vacío');
    return;
}

if (email === '') {
    alert('El campo Correo electrónico está vacío');
    return;
}