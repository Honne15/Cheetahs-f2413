const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('visible');
});
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

//funcion modo oscuro 
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


//microfono 
function startVoiceRecognition() {
  if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'es-ES';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.start();

      recognition.onresult = function(event) {
          const transcript = event.results[0][0].transcript;
          document.getElementById('input').value = transcript;
          searchPage();
      };

      recognition.onerror = function(event) {
          console.error(event.error);
      };

      recognition.onend = function() {
          console.log('Speech recognition service disconnected');
      };
  } else {
      alert('Your browser does not support speech recognition');
  }
}

document.querySelector('.micButton').addEventListener('click', startVoiceRecognition);
