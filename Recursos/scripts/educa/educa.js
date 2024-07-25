//Javascript para el menu principal
const menuIcon = document.getElementById('menuIcon');
const mainMenu = document.querySelector('.main-menu');

menuIcon.addEventListener('click', () => {
  mainMenu.classList.toggle('visible');
});

const menuCate = document.getElementById('menuCate');
const listCate = document.querySelector('.list-cate');

menuCate.addEventListener('click', () => {
  listCate.style.visibility = listCate.style.visibility === 'visible' ? 'hidden' : 'visible';
  listCate.style.opacity = listCate.style.opacity === '1' ? '0' : '1';
});

//Javasript para el carrusel que va en los libros
const url = '/Recursos/pdfs/guias/';

const conCategoria = [
      ['1', '/Recursos/img/img_libros/Portada-reconocer-bases-de-los-aprendizajes-tomo-1.webp', 'Reconocer 1', 'reconocer', '/Recursos/pdfs/guias/RECONOCER_1.pdf'],
      ['2', '/Recursos/img/img_libros/portada-reconocer-2.webp', 'Reconocer 2', 'reconocer', '/Recursos/pdfs/guias/RECONOCER_2.pdf'],
      ['3', '/Recursos/img/img_libros/portad-reconocer-5-y-6.webp', 'Reconocer 5 y 6', 'reconocer', '/Recursos/pdfs/guias/RECONOCER_5_Y_6.pdf'],
      ['4', '/Recursos/img/img_libros/portada-reconocer-7.webp', 'Reconocer 7', 'reconocer', '/Recursos/pdfs/guias/RECONOCER_7.pdf'],
      ['5', '/Recursos/img/img_libros/portada-reconocer-8.webp', 'Reconocer 8', 'reconocer', '/Recursos/pdfs/guias/RECONOCER_8.pdf'],
      ['6', '/Recursos/img/img_libros/plan-lector-1.webp', 'Plan lector', 'lector', '/Recursos/pdfs/guias/PLAN_LECTOR.pdf'],
      ['7', '/Recursos/img/img_libros/Portada-plan-lector-bachillerato.webp', 'Plan lector bachillerato', 'lector', '/Recursos/pdfs/guias/PLAN_LECTOR_BACHILLERATO.pdf'],
      ['8', '/Recursos/img/img_libros/portada-guia-1.webp', 'Guía de talleres 1', 'guias','/Recursos/pdfs/guias/GUIA_DE_TALLERES_1.pdf'],
      ['9', '/Recursos/img/img_libros/portada-guia-de-talleres-2.webp', 'Guía de talleres 2', 'guias', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_2.pdf'],
      ['10', '/Recursos/img/img_libros/guia2.png', 'Guía de talleres 2 - Planeta vivo', 'guia', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_2_PLANETA.pdf'],
      ['11', '/Recursos/img/img_libros/portada_guia_de_talleres3.webp', 'Guía de talleres 3', 'guias', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_3.pdf'],
      ['12', '/Recursos/img/img_libros/portada-guia-4.webp', 'Guía de talleres 4', 'guias', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_4.pdf'],
      ['13', '/Recursos/img/img_libros/portada-guia-de-talleres-5.webp', 'Guía de talleres 5', 'guias', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_5.pdf'],
      ['14', '/Recursos/img/img_libros/portada-guia-6.webp', 'Guía de talleres 6', 'guias', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_6.pdf'],
      ['15', '/Recursos/img/img_libros/portada-el-palabrero.webp', 'El palabrero', 'palabrero', '/Recursos/pdfs/guias/EL_PALABRERO.pdf']
  ];

  let reconocer = [];
  let guias = [];
  let lector = [];
  let palabrero = [];
  const listaCategorias = [['reconocer', reconocer], ['guias', guias], ['lector', lector], ['palabrero', palabrero]];

  window.addEventListener('load', () => {

  localStorage.setItem('conCategoria', JSON.stringify(conCategoria));

  let divPadre = document.getElementById('listbooks');
  const searchInput = document.getElementById('searchInput');

  conCategoria.forEach((fila, index) => {
      let divHijoPorTitulo = document.createElement('div');
      divHijoPorTitulo.classList.add('book-item');
      let id = fila[0];

      const divEnlaces = document.createElement('div');
      divEnlaces.classList.add('book-links');
      
      fila.forEach((element, index) => {
          switch (index) {
              case 0:                    
                  break;
              case 1:
                  const img = document.createElement('img');
                  img.src = element;
                  img.classList.add('book-image');
                  divHijoPorTitulo.appendChild(img);
                  break;
              case 2:
                  const h2 = document.createElement('h2');
                  h2.textContent = element;
                  h2.classList.add('book-title');
                  divHijoPorTitulo.appendChild(h2);
                  break;
              case 3:
                  filtrarCategoria(fila, element.toLowerCase());
                  break;
               case 4:
                  const aDescargar = document.createElement('a');
                  aDescargar.href = element;
                  aDescargar.download = element;
                  aDescargar.classList.add('download-link'); // Clase para aplicarle el estilo
                  aDescargar.innerHTML = '<i class="fa-regular fa-circle-down"></i> Descargar';
                  divHijoPorTitulo.appendChild(aDescargar);

                  const aLeer = document.createElement('a');
                  aLeer.href = '/leerlibro.html?id=' + id;
                  aLeer.target = '_blank';
                  aLeer.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> Leer';
                  aLeer.classList.add('read-link'); // Clase para aplicarle el estilo
                  divHijoPorTitulo.appendChild(aLeer);
                  break;

              default:
                break;
          }
      });

      divPadre.appendChild(divHijoPorTitulo);
  });
});

//Filtrar categorias
function filtrarCategoria(filaDeLibro, categoria) {

  switch (categoria) {
    
    case 'Reconocer':
      if (!reconocer.includes(filaDeLibro))
        reconocer.push(filaDeLibro);
      break;

    case 'Guias talleres':
      if (!guias.includes(filaDeLibro))
        guias.push(filaDeLibro);
      break;
      
    case 'Plan Lector':
      if (!lector.includes(filaDeLibro))
        lector.push(filaDeLibro);
      break;

    case 'Palabrero':
      if (!palabrero.includes(filaDeLibro))
        palabrero.push(filaDeLibro);
      break;
  }
}

const ddlCategorias = document.querySelectorAll('.list-categories');
  ddlCategorias.forEach((categoria) => {
    categoria.addEventListener('click', (event) => {
      const selectedCategory = event.target.getAttribute('data-categoria');
      filterBooksByCategory(selectedCategory);
    localStorage.setItem('conCategoria', JSON.stringify(conCategoria));
    console.log(listaCategorias);
    });
  });

function filterBooksByCategory(category) {
  const conCategoria = JSON.parse(localStorage.getItem('conCategoria'));
  const listbooks = document.getElementById('listbooks');
  listbooks.innerHTML = '';

  conCategoria.forEach((fila) => {
    if (fila[3].toLowerCase() === category || category === 'todos') {
      const divHijoPorTitulo = document.createElement('div');
      divHijoPorTitulo.classList.add('book-item');
      let id = fila[0];

      fila.forEach((element, index) => {
        switch (index) {
          case 1:
            const img = document.createElement('img');
            img.src = element;
            img.classList.add('book-image');
            divHijoPorTitulo.appendChild(img);
            break;
          case 2:
            const h2 = document.createElement('h2');
            h2.textContent = element;
            h2.classList.add('book-title');
            divHijoPorTitulo.appendChild(h2);
            break;
          case 4:
            const aDescargar = document.createElement('a');
            aDescargar.href = element;
            aDescargar.download = element;
            aDescargar.classList.add('download-link');
            aDescargar.innerHTML = '<i class="fa-regular fa-circle-down"></i> Descargar';
            divHijoPorTitulo.appendChild(aDescargar);

            const aLeer = document.createElement('a');
            aLeer.href = '/leerlibro.html?id=' + id;
            aLeer.target = '_blank';
            aLeer.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> Leer';
            aLeer.classList.add('read-link');
            divHijoPorTitulo.appendChild(aLeer);
            break;
  
          default:
            break;
        }
      });

      listbooks.appendChild(divHijoPorTitulo);
    }
  });
}
window.conCategoria = conCategoria;


//Buscador funcional 
let librosFiltrados = [];

// Función para buscar libros por nombre
function searchBooks() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  librosFiltrados = conCategoria.filter(libro => libro[2].toLowerCase().includes(searchInput));
  mostrarLibros(librosFiltrados);
}

// Función para mostrar libros en la interfaz
function mostrarLibros(libros) {
  const listbooks = document.getElementById('listbooks');
  listbooks.innerHTML = '';

  libros.forEach(libro => {
    const divHijoPorTitulo = document.createElement('div');
    divHijoPorTitulo.classList.add('book-item');
    let id = libro[0];

    libro.forEach((element, index) => {
      switch (index) {
        case 1:
          const img = document.createElement('img');
          img.src = element;
          img.classList.add('book-image');
          divHijoPorTitulo.appendChild(img);
          break;
        case 2:
          const h2 = document.createElement('h2');
          h2.textContent = element;
          h2.classList.add('book-title');
          divHijoPorTitulo.appendChild(h2);
          break;
        case 4:
          const aDescargar = document.createElement('a');
          aDescargar.href = element;
          aDescargar.download = element;
          aDescargar.classList.add('download-link');
          aDescargar.innerHTML = '<i class="fa-regular fa-circle-down"></i> Descargar';
          divHijoPorTitulo.appendChild(aDescargar);

          const aLeer = document.createElement('a');
          aLeer.href = '/leerlibro.html?id=' + id;
          aLeer.target = '_blank';
          aLeer.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> Leer';
          aLeer.classList.add('read-link');
          divHijoPorTitulo.appendChild(aLeer);
          break;

        default:
          break;
      }
    });

    listbooks.appendChild(divHijoPorTitulo);
  });
}

// Mostrar todos los libros al cargar la página
window.addEventListener('load', () => {
  mostrarLibros(conCategoria);
});