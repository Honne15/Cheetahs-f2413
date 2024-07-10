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

document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar datos desde localStorage o establecer valores predeterminados
    function cargarDatos() {
        const fechaNacimiento = localStorage.getItem('fechaNacimiento') || '';
        const ubicacion = localStorage.getItem('ubicacion') || '';
        const profesion = localStorage.getItem('profesion') || '';

        document.getElementById('spanFechaNacimiento').textContent = fechaNacimiento;
        document.getElementById('spanUbicacion').textContent = ubicacion;
        document.getElementById('spanProfesion').textContent = profesion;
    }

    // Cargar datos al cargar la página
    cargarDatos();

    // Evento para editar datos al hacer clic en el botón "Editar datos"
    const editarDatosButton = document.querySelector('.editar-datos');
    editarDatosButton.addEventListener('click', function() {
        const nuevoFechaNacimiento = prompt('Ingrese una nueva fecha de nacimiento:');
        const nuevaUbicacion = prompt('Ingrese una nueva ubicación:');
        const nuevaProfesion = prompt('Ingrese una nueva profesión:');

        if (nuevoFechaNacimiento) {
            localStorage.setItem('fechaNacimiento', nuevoFechaNacimiento);
        }
        if (nuevaUbicacion) {
            localStorage.setItem('ubicacion', nuevaUbicacion);
        }
        if (nuevaProfesion) {
            localStorage.setItem('profesion', nuevaProfesion);
        }

        cargarDatos(); // Actualizar la visualización de los datos
    });
});
 
document.addEventListener('DOMContentLoaded', function() {
    // Cargar libros favoritos almacenados localmente al cargar la página
    favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    displayBooks();
});

let favoriteBooks = [];

// Mostrar la ventana emergente para agregar un libro
function showAddBookModal() {
    document.getElementById('addBookModal').style.display = 'block';
}

// Cerrar la ventana emergente
function closeAddBookModal() {
    document.getElementById('addBookModal').style.display = 'none';
}

// Función para agregar un libro a la lista de favoritos
function addBook() {
    const titleInput = document.getElementById('newBookTitle');
    const title = titleInput.value.trim();

    if (title !== '') {
        // Agregar el título a la lista de favoritos
        favoriteBooks.push(title);
        
        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
        
        // Actualizar la lista en el HTML
        displayBooks();
        
        // Limpiar el campo de entrada y cerrar la ventana emergente
        titleInput.value = '';
        closeAddBookModal();
    }
}

// Función para mostrar los libros favoritos en la lista
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Limpiar la lista antes de volver a mostrar
    
    favoriteBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}

// Cerrar la ventana emergente si se hace clic fuera de ella
window.onclick = function(event) {
    const modal = document.getElementById('addBookModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    loadFavorites();
});

function showAddBookModal() {
    document.getElementById('addBookModal').style.display = 'block';
}

function closeAddBookModal() {
    document.getElementById('addBookModal').style.display = 'none';
}

function addBook() {
    const bookTitle = document.getElementById('newBookTitle').value;
    if (bookTitle) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(bookTitle);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        document.getElementById('newBookTitle').value = '';
        closeAddBookModal();
        loadFavorites();
    }
}

function loadFavorites() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach((bookTitle, index) => {
        let li = document.createElement('li');
        li.textContent = bookTitle;
        bookList.appendChild(li);
    });
}

function showRemoveBookModal() {
    const bookSelect = document.getElementById('bookSelect');
    bookSelect.innerHTML = '';
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach((bookTitle, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.textContent = bookTitle;
        bookSelect.appendChild(option);
    });
    document.getElementById('removeBookModal').style.display = 'block';
}

function closeRemoveBookModal() {
    document.getElementById('removeBookModal').style.display = 'none';
}

function removeBook() {
    const bookSelect = document.getElementById('bookSelect');
    let selectedIndex = bookSelect.value;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(selectedIndex, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    closeRemoveBookModal();
    loadFavorites();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const addBookModal = document.getElementById('addBookModal');
    const removeBookModal = document.getElementById('removeBookModal');
    if (event.target == addBookModal) {
        addBookModal.style.display = 'none';
    }
    if (event.target == removeBookModal) {
        removeBookModal.style.display = 'none';
    }
}

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

