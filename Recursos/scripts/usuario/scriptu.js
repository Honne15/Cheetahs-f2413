document.addEventListener('DOMContentLoaded', function() {
    const changeAvatarButton = document.getElementById('changeAvatarButton');
    const avatarInput = document.getElementById('avatarInput');
    const avatarImage = document.getElementById('avatarImage');

    // Cargar imagen guardada desde localStorage para el avatar
    const savedAvatarImage = localStorage.getItem('avatarImage');
    if (savedAvatarImage) {
        avatarImage.src = savedAvatarImage;
    }

    changeAvatarButton.addEventListener('click', function() {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatarImage.src = e.target.result;
                localStorage.setItem('avatarImage', e.target.result); // Guardar la imagen en localStorage
            };
            reader.readAsDataURL(file);
        }
    });

    const changeBackgroundButton = document.getElementById('changeBackgroundButton');
    const backgroundInput = document.getElementById('backgroundInput');
    const backgroundContainer = document.getElementById('backgroundContainer');

    // Cargar imagen guardada desde localStorage para el fondo
    const savedBackgroundImage = localStorage.getItem('backgroundImage');
    if (savedBackgroundImage) {
        backgroundContainer.style.backgroundImage = `url(${savedBackgroundImage})`;
    }

    changeBackgroundButton.addEventListener('click', function() {
        backgroundInput.click();
    });

    backgroundInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                backgroundContainer.style.backgroundImage = `url(${e.target.result})`;
                localStorage.setItem('backgroundImage', e.target.result); // Guardar la imagen en localStorage
            };
            reader.readAsDataURL(file);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const editNameIcon = document.getElementById('editNameIcon');
    const usernameElement = document.getElementById('username');

    // Cargar el nombre desde localStorage si está disponible
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        usernameElement.textContent = savedName;
    }

    // Evento para editar nombre al hacer clic en el icono de lápiz
    editNameIcon.addEventListener('click', function() {
        const newName = prompt('Ingrese un nuevo nombre:');
        if (newName) {
            usernameElement.textContent = newName;
            localStorage.setItem('userName', newName);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const editBioButton = document.getElementById('editBioButton');
    const bioText = document.getElementById('bioText');

    // Cargar la presentación desde localStorage si está disponible
    const savedBio = localStorage.getItem('userBio');
    if (savedBio) {
        bioText.textContent = savedBio;
    }

    // Evento para editar la presentación al hacer clic en el botón
    editBioButton.addEventListener('click', function() {
        const newBio = prompt('Ingrese una nueva presentación:');
        if (newBio) {
            bioText.textContent = newBio;
            localStorage.setItem('userBio', newBio);
        }
    });
});


//Agregar libros guardados
function saveBook(book) {
    let librosGuardados = JSON.parse(localStorage.getItem('librosGuardados')) || [];
    librosGuardados.push(book);
    localStorage.setItem('librosGuardados', JSON.stringify(librosGuardados));
}

document.addEventListener('DOMContentLoaded', function() {
    const librosGuardados = JSON.parse(localStorage.getItem('librosGuardados'));

    if (librosGuardados.length > 0) {
        const libroContainer = document.getElementById('libroGuardadoContainer');
        libroContainer.innerHTML = '';

    librosGuardados.forEach((libro,index) => {
        const libroDiv = document.createElement('div');
        libroDiv.classList.add('book-item');

        const libroImagen = document.createElement('img');
        libroImagen.src = libro[1];
        libroImagen.classList.add('book-image');
        libroDiv.appendChild(libroImagen);

        const libroTitulo = document.createElement('h2');
        libroTitulo.textContent = libro[2];
        libroTitulo.classList.add('book-title');
        libroDiv.appendChild(libroTitulo);

        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.classList.add('button');
        eliminarButton.addEventListener('click', function() {
            eliminarLibro(index);
        });
        libroDiv.appendChild(eliminarButton);

        libroContainer.appendChild(libroDiv);
    });

    }
});

function eliminarLibro(index) {
    let librosGuardados = JSON.parse(localStorage.getItem('librosGuardados')) || [];
    librosGuardados.splice(index, 1);
    localStorage.setItem('librosGuardados', JSON.stringify(librosGuardados));
    location.reload(); // Recargar la página para actualizar la lista de libros guardados
}


//Agregar notas
document.addEventListener('DOMContentLoaded', (event) => {
    const nuevaNota = document.getElementById('nuevaNota');
    const agregarNotaBtn = document.getElementById('agregarNotaBtn');
    const listaNotas = document.getElementById('listaNotas');

    // Cargar notas desde el almacenamiento local
    const cargarNotas = () => {
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
        listaNotas.innerHTML = '';
        notas.forEach((nota, index) => {
            agregarNotaALaLista(nota, index);
        });
    };

    // Guardar notas en el almacenamiento local
    const guardarNotas = (notas) => {
        localStorage.setItem('notas', JSON.stringify(notas));
    };

    // Agregar nota a la lista en el DOM
    const agregarNotaALaLista = (nota, index) => {
        const li = document.createElement('li');
        li.textContent = nota;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.addEventListener('click', () => eliminarNota(index));
        li.appendChild(botonEliminar);
        listaNotas.appendChild(li);
    };

    // Agregar una nueva nota
    agregarNotaBtn.addEventListener('click', () => {
        const nota = nuevaNota.value.trim();
        if (nota) {
            const notas = JSON.parse(localStorage.getItem('notas')) || [];
            notas.push(nota);
            guardarNotas(notas);
            agregarNotaALaLista(nota, notas.length - 1);
            nuevaNota.value = '';
        }
    });

    // Eliminar una nota
    const eliminarNota = (index) => {
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
        notas.splice(index, 1);
        guardarNotas(notas);
        cargarNotas();
    };

    // Inicializar notas
    cargarNotas();
});

const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('visible');
});

document.addEventListener("DOMContentLoaded", function() {
    loadProfileData();

    document.querySelector(".editar-datos").addEventListener("click", function() {
        document.getElementById("editModal").style.display = "block";
    });

    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("editModal").style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById("editModal")) {
            document.getElementById("editModal").style.display = "none";
        }
    }

    document.getElementById("saveChanges").addEventListener("click", function() {
        var editOption = document.getElementById("editOption").value;
        var newValue = document.getElementById("editInput").value;

        if (editOption === "fechaNacimiento") {
            document.getElementById("spanFechaNacimiento").textContent = newValue;
            localStorage.setItem("fechaNacimiento", newValue);
        } else if (editOption === "ubicacion") {
            document.getElementById("spanUbicacion").textContent = newValue;
            localStorage.setItem("ubicacion", newValue);
        } else if (editOption === "profesion") {
            document.getElementById("spanProfesion").textContent = newValue;
            localStorage.setItem("profesion", newValue);
        }

        document.getElementById("editModal").style.display = "none";
    });
});

function loadProfileData() {
    if (localStorage.getItem("fechaNacimiento")) {
        document.getElementById("spanFechaNacimiento").textContent = localStorage.getItem("fechaNacimiento");
    }
    if (localStorage.getItem("ubicacion")) {
        document.getElementById("spanUbicacion").textContent = localStorage.getItem("ubicacion");
    }
    if (localStorage.getItem("profesion")) {
        document.getElementById("spanProfesion").textContent = localStorage.getItem("profesion");
    }
}


