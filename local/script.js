// Función para guardar los datos en localStorage
function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);

    alert('Datos guardados en localStorage');
}

// Función para cargar los datos desde localStorage
function cargarDatos() {
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');

    if (nombre) {
        document.getElementById('nombre').value = nombre;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
}

// Cargar los datos cuando se cargue la página
window.onload = cargarDatos;
