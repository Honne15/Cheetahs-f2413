function setupGuardarButton(libro) {
    const guardarButtonContainer = document.getElementById('guardarButtonContainer');

    // Crear el botón de guardar dinámicamente
    const guardarButton = document.createElement('button');
    guardarButton.classList.add('favorite');
    guardarButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;

    guardarButton.addEventListener('click', function() {
        localStorage.setItem('libroGuardado', JSON.stringify(libro));
        alert(`Libro "${libro[2]}" guardado exitosamente.`);
        window.location.href = 'usuario.html'; // Redirigir a la página de usuario después de guardar
    });

    // Añadir el botón al contenedor
    guardarButtonContainer.appendChild(guardarButton);
}
