const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('visible');
});
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}






//buscador
function searchPage() {
  const input = document.getElementById('input').value.toLowerCase();
  const sections = document.querySelectorAll('section, div, main, footer, header');
  for (let section of sections) {
      if (section.innerText.toLowerCase().includes(input)) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
      }
  }
}

document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      searchPage();
  }
});



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


//buscador 
document.getElementById('input').addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
      searchSite();
  }
});

function searchSite() {
  const query = document.getElementById('input').value.toLowerCase();
  const sections = {
     
      
      'cangrejo': 'cangrejo',
      'Batalla': 'batalla',
      'leon': 'leon',
      'amigo fiel': 'amigo fiel',
      'matrimonio de gatos':'matrimonio de gatos',
      'los tres cerditos': 'los tres cerditos',
      'ciudad de pamplona ':'ciudad de pamplona',
      'parejas': 'parejas',
      'herencia del rey': 'herencia del rey',
      'tierra': 'tierra',
      'como se formaron los pueblos': 'como se formaron los pueblos',
      'el hombre que contaba historias': 'el hombre que contaba historias',
      'tradicion':'tradicion',
      'los ciegos y el elefante': 'los ciegos y el elefante',
      'la suerte de ozu':'la suerte de ozu',
      'cien años': 'cien años',
      'ducados': 'nudos',
      'pajaro': 'pajaro',
      'finca':'finca',
      'abuelos':'abuelos',
      'vive como creas': 'vive como creas',
      'la hoja de hierva': 'la hoja',




      
  };

  if (sections[query]) {
      document.getElementById(sections[query]).scrollIntoView({ behavior: 'smooth' });
  } else {
      alert('No se encontró la sección correspondiente.');
  }
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


