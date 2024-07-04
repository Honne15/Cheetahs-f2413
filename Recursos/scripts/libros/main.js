//Javascript para el menu principal
const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('visible');
});

//Javasript para el carrusel que va en los libros
var swiper = new Swiper(".books-container-wrappers", {
  slidesPerView: 4, // Mostrar 4 libros a la vez
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2, // Mostrar 2 libros en dispositivos móviles
    },
    568: {
      slidesPerView: 3, // Mostrar 3 libros en pantallas pequeñas
    },
    768: {
      slidesPerView: 4, // Mostrar 4 libros en pantallas medianas
    },
    968: {
      slidesPerView: 4, // Mostrar 4 libros en pantallas grandes
    },
  },
 navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Javascript para abrir los PDFs
function openBook(pdfUrl) {
  document.getElementById('pdfFrame').src = pdfUrl;
  document.getElementById('pdfViewer').style.display = "block";
}

function closeBook() {
  document.getElementById('pdfFrame').src = "";
  document.getElementById('pdfViewer').style.display = "none";
}