document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Example validation logic
    if (email && password) {
        alert('Inicio de sesión exitoso!');
        // You can add your login logic here
    } else {
        alert('Por favor, complete todos los campos.');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const btnFacebook = document.getElementById('btn-facebook');
    const btnGoogle = document.getElementById('btn-google');

    btnFacebook.addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com/login';
    });

    btnGoogle.addEventListener('click', function() {
        window.location.href = 'https://accounts.google.com/signin';
    });
});

//Javascript del login

document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío del formulario para poder verificar los datos primero

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Recuperar los datos almacenados en localStorage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Verificar los datos ingresados con los almacenados
        if (email === storedEmail && password === storedPassword) {
            // Redirigir a la página principal si las credenciales son correctas
            window.location.href = 'principal.html';
        } else {
            // Mostrar un mensaje de error si las credenciales son incorrectas
            alert('Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    });
});

