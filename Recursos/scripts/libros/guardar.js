function setupGuardarButton(libro) {
    const guardarButtonContainer = document.getElementById('guardarButtonContainer');

    // Crear el botón de guardar dinámicamente
    const guardarButton = document.createElement('button');
    guardarButton.classList.add('favorite');
    guardarButton.innerHTML = `<i class="fa-solid fa-heart"></i>`;

    guardarButton.addEventListener('click', function() {
        let librosGuardados = JSON.parse(localStorage.getItem('librosGuardados')) || [];
        librosGuardados.push(libro);
        localStorage.setItem('librosGuardados', JSON.stringify(librosGuardados));
        alert(`Libro "${libro[2]}" guardado exitosamente.`);
        window.location.href = 'usuario.html';
    });

    // Añadir el botón al contenedor
    guardarButtonContainer.appendChild(guardarButton);
}
