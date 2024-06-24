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
