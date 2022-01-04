//import {swall} from 'sweetalert';

// Declaración de variables
let nombreC = '';
let apellidoC = '';
let telefonoC = '';
let direccionC = '';
let observacionC = '';
let Personas = [];



let btnEnviar = document.getElementById('btnSend');

btnEnviar.addEventListener('click', capturarDatos);
//Captura de datos 
function capturarDatos(e) {
    e.preventDefault();
    nombreC = document.getElementById('txtname').value;
    apellidoC = document.getElementById('txtsurname').value;
    telefonoC = document.getElementById('phone').value;
    direccionC = document.getElementById('txtadress').value;
    observacionC = document.getElementById('txtnote').value;

    validacionFormulario(nombreC, apellidoC, telefonoC, direccionC, observacionC)

    //agregarDatos(nombreC, apellidoC, telefonoC, direccionC, observacionC);  


}
const cleanInputs = () => {
    document.getElementById('txtname').value = "";
    document.getElementById('txtsurname').value = "";
    document.getElementById('phone').value = "";
    direccionC = document.getElementById('txtadress').value = "";
    observacionC = document.getElementById('txtnote').value = "";
}
//Validaciones del formulario
function validacionFormulario(nombre, apellido, telefono, direccion, observacion) {
    if (isNaN(telefono)) {
        crearValidar('Por favor digite un número de teléfono')
    }
    else {
        agregarDatos(nombre, apellido, telefono, direccion, observacion);
    }

}
function crearValidar(msj) {
    const validar = document.getElementById('validar');
    validar.innerHTML = '';
    validar.innerHTML += `
    <div class="alert alert-danger alert-dismissible fade-show" role="alert">${msj}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
}
//Agregar los datos al arreglo
function agregarDatos(nombre, apellido, telefono, direccion, observacion) {
    Personas.push({
        nombreCliente: nombre,
        apellidoCliente: apellido,
        telefonoCliente: telefono,
        direccionCliente: direccion,
        observacionCliente: observacion
    })
    sendToLocalStorage(Personas);

}
//Se envía al localStorage 
function sendToLocalStorage(Persona) {
    localStorage.setItem('Clientes', JSON.stringify(Persona))
    alerta();

}
function alerta() {
    Swal.fire('Registro Completado!', '', 'success')
    cleanInputs();
}