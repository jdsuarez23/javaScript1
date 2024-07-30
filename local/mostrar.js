// Función para mostrar los datos almacenados en localStorage
function mostrarDatos() {
    const nombre = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');

    if (nombre) {
        document.getElementById('mostrarNombre').textContent = nombre;
    }
    if (email) {
        document.getElementById('mostrarEmail').textContent = email;
    }
}

// Mostrar los datos cuando se cargue la página
window.onload = mostrarDatos;
