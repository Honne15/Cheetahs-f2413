document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Recuperar los datos almacenados en localStorage
        let users = localStorage.getItem('users');
        if (users) {
            users = JSON.parse(users);

            // Verificar si las credenciales coinciden con algún usuario en el localStorage
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                alert('Inicio de sesión exitoso!');
                // Redirigir a la página principal si las credenciales son correctas
                window.location.href = 'principal.html';
            } else {
                // Mostrar un mensaje de error si las credenciales son incorrectas
                alert('Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.');
            }
        } else {
            // Mostrar un mensaje de error si no hay usuarios registrados
            alert('No hay usuarios registrados. Por favor, regístrese primero.');
        }
    });

    const btnFacebook = document.getElementById('btn-facebook');
    const btnGoogle = document.getElementById('btn-google');

    btnFacebook.addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com/login';
    });

    btnGoogle.addEventListener('click', function() {
        window.location.href = 'https://accounts.google.com/signin';
    });
});
