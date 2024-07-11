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
