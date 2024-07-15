//Modos pagina libros
const themeSwitch = document.getElementById('theme-switch');
        const body = document.body;

        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }
        });

        // Comprobar el tema guardado en localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeSwitch.checked = true;
        }


// Header responsive
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 20) { // Ajusta este valor según sea necesario
      document.body.classList.add('scroll-down');
    } else {
      document.body.classList.remove('scroll-down');
    }
  });

