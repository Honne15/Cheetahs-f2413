document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores de los campos del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validar los campos
        if (!validateName(name)) {
            alert('El nombre debe tener al menos 3 caracteres.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!validatePassword(password, confirmPassword)) {
            alert('Las contraseñas no coinciden o son demasiado cortas (mínimo 6 caracteres).');
            return;
        }

        // Guardar los datos en localStorage
        saveUserData(name, email, password);

        // Redirigir a la página principal después de guardar los datos
        alert('Registro exitoso');
        window.location.href = 'principal.html';
    });

    function validateName(name) {
        return name.length >= 3;
    }

    function validateEmail(email) {
        // Expresión regular para validar el correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password, confirmPassword) {
        return password.length >= 6 && password === confirmPassword;
    }

    function saveUserData(name, email, password) {
        // Obtener los datos existentes de localStorage
        let users = localStorage.getItem('users');

        if (users) {
            users = JSON.parse(users);
        } else {
            users = [];
        }

        // Agregar el nuevo usuario al arreglo
        const newUser = { name, email, password };
        users.push(newUser);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btnFacebook = document.getElementById('btn-facebook');
    const btnGoogle = document.getElementById('btn-google');

    btnFacebook.addEventListener('click', function() {
        window.location.href = 'https://www.facebook.com';
    });

    btnGoogle.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
});
