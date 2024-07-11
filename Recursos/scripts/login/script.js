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

        // Si todas las validaciones pasan, enviar el formulario
        alert('Registro exitoso');
        registerForm.submit();
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
