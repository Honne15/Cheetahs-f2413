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
const url = '/Recursos/pdfs/';
const urls = '/Recursos/pdfs/guias/';

const conCategoria = [
      ['1', '/Recursos/img/img_libros/portada-a-que-te-cojo-raton.webp', '¡A que te cojo ratón!', 'Juego', '/Recursos/pdfs/A_QUE_TE_COJO_RATON.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_5.pdf'],
      ['2', '/Recursos/img/img_libros/portada-salud-para-contar.webp', 'Salud para contar', 'Salud', '/Recursos/pdfs/SALUD_PARA_CONTAR.pdf', '', ''],
      ['3', '/Recursos/img/img_libros/portada-el-hombre-y-su-cultura.webp', 'El hombre y su cultura', 'Cultura', '/Recursos/pdfs/EL_HOMBRE_Y_SU_CULTURA.pdf', 'https://open.spotify.com/embed/show/5c3KxZDPh5CioaBDPMf1ee','/Recursos/pdfs/guias/GUIA_DE_TALLERES_2.pdf'],
      ['4', '/Recursos/img/img_libros/portada-tiempo-de-hacer.webp', 'Tiempo de hacer', 'Hacer', '/Recursos/pdfs/TIEMPO_DE_HACER.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_4.pdf'],
      ['5', '/Recursos/img/img_libros/portada-erase-una-vez-en-colombia.webp', 'Érase una vez en Colombia', 'Historia', '/Recursos/pdfs/ERASE_UNA_VEZ_EN_COLOMBIA.pdf', 'https://widget.spreaker.com/player?show_id=5822929&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true', ''],
      ['6', '/Recursos/img/img_libros/portada-los-viajes.webp', 'Los viajes del viejo Jacobo', 'Historia', '/Recursos/pdfs/LOS_VIAJES_DEL_VIEJO_JACOBO.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_5.pdf'],
      ['7', '/Recursos/img/img_libros/portada-lecturas-fantasticas.webp', 'Lecturas fantásticas', 'Historia', '/Recursos/pdfs/LITERATURA_FANTASTICA.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_3.pdf'],
      ['8', '/Recursos/img/img_libros/portada-historias-y-lugares.webp', 'Historias y lugares', 'Historia','/Recursos/pdfs/HISTORIAS_Y_LUGARES.pdf', 'https://widget.spreaker.com/player?show_id=4671213&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_1.pdf'],
      ['9', '/Recursos/img/img_libros/portada-del-campo-a-la-mesa.webp', 'Del campo a la mesa', 'Cocina', '/Recursos/pdfs/DEL_CAMPO_A_LA_MESA.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_6.pdf'],
      ['10', '/Recursos/img/img_libros/portada-tan-distintos-y-parientes.webp', 'Tan distintos y parientes', 'Cocina', '/Recursos/pdfs/TAN_DISTINTOS_Y_PARIENTES.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_4.pdf'],
      ['11', '/Recursos/img/img_libros/portada-planeta-vivo.webp', 'Planeta vivo', 'Animales', '/Recursos/pdfs/PLANETA_VIVO.pdf', 'https://open.spotify.com/embed/show/5c3KxZDPh5CioaBDPMf1ee', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_2_PLANETA.pdf'],
      ['12', '/Recursos/img/img_libros/portada-los-secretos-de-los-animales.webp', 'Los secretos de los animales', 'Animales', '/Recursos/pdfs/LOS_SECRETOS_DE_LOS_ANIMALES.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_6.pdf'],
      ['13', '/Recursos/img/img_libros/portada-entre-cuento-y-cuento.webp', 'Entre cuento y cuento', 'Cuentos', '/Recursos/pdfs/ENTRE_CUENTO_Y_CUENTO.pdf', '', ''],
      ['14', '/Recursos/img/img_libros/portada-cuentos-maravillosos.webp', 'Cuentos maravillosos', 'Cuentos', '/Recursos/pdfs/CUENTOS_MARAVILLOSOS.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_5.pdf'],
      ['15', '/Recursos/img/img_libros/portada-cuentos-para-contar.webp', 'Cuentos para contar', 'Cuentos', '/Recursos/pdfs/CUENTOS_PARA_CONTAR.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_4.pdf'],
      ['16', '/Recursos/img/img_libros/portada-cuentos-y-pasatiempos.webp', 'Cuentos y pasatiempos', 'Cuentos', '/Recursos/pdfs/CUENTOS_Y_PASATIEMPOS.pdf', 'https://open.spotify.com/embed/show/5c3KxZDPh5CioaBDPMf1ee', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_2.pdf'],
      ['17', '/Recursos/img/img_libros/portada-para-desenredar-enredos.webp', 'Cuentos para desenredar enredos', 'Cuentos', '/Recursos/pdfs/CUENTOS_PARA_DESENREDAR_ENREDOS.pdf', 'https://open.spotify.com/embed/show/4pgUCRcRIQNKwPJBLMWxjP', ''],
      ['18', '/Recursos/img/img_libros/portada-lecturas-para-todos-los-dias.webp', 'Lecturas para todos los días', 'Cuentos', '/Recursos/pdfs/LECTURAS_PARA_TODOS_LOS_DIAS.pdf', 'https://widget.spreaker.com/player?show_id=4421133&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_1.pdf'],
      ['19', '/Recursos/img/img_libros/portada-con-los-pelos-de-punta.webp', 'Con los pelos de punta', 'Familia', '/Recursos/pdfs/CON_LOS_PELOS_DE_PUNTA.pdf', 'https://open.spotify.com/embed/show/4pgUCRcRIQNKwPJBLMWxjP', ''],
      ['20', '/Recursos/img/img_libros/portada-la-tierra-el-cielo.webp', 'La Tierra, el cielo y más allá', 'Familia', '/Recursos/pdfs/LA_TIERRA_EL_CIELO_Y_MAS_ALLA.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_6.pdf'],
      ['21', '/Recursos/img/img_libros/portada-todo-lo-contrario.webp', 'Todo lo contrario', 'Familia', '/Recursos/pdfs/TODO_LO_CONTRARIO.pdf', 'https://open.spotify.com/embed/show/4pgUCRcRIQNKwPJBLMWxjP', ''],
      ['22', '/Recursos/img/img_libros/portada-mas-claro-no-canta-un-gallo.webp', 'Más claro no canta un gallo', 'Familia', '/Recursos/pdfs/MAS_CLARO_NO_CANTA_UN_GALLO.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_6.pdf'],
      ['23', '/Recursos/img/img_libros/portada-calor-de-hogar.webp', 'Calor de hogar', 'Familia', '/Recursos/pdfs/CALOR_DE_HOGAR.pdf', '','/Recursos/pdfs/guias/GUIA_DE_TALLERES_3.pdf'],
      ['24', '/Recursos/img/img_libros/portada-los-primeros-anos.webp', 'Los primeros años', 'Familia', '/Recursos/pdfs/LOS_PRIMEROS_ANOS.pdf', '', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_3.pdf'],
      ['25', '/Recursos/img/img_libros/portada-los-secretos-de-las-plantas.webp', 'Los secretos de las plantas', 'Plantas', '/Recursos/pdfs/LOS_SECRETOS_DE_LAS_PLANTAS.pdf', '',''],
      ['26', '/Recursos/img/img_libros/portada-la-finca-viva.webp', 'La finca viva', 'Plantas', '/Recursos/pdfs/LA_FINCA_VIVA.pdf', 'https://open.spotify.com/embed/show/4pgUCRcRIQNKwPJBLMWxjP', ''],
      ['27', '/Recursos/img/img_libros/portada-casa-y-campo.webp', 'La casa y el campo', 'Plantas', '/Recursos/pdfs/LA_CASA_Y_EL_CAMPO.pdf','https://widget.spreaker.com/player?show_id=4421133&theme=dark&playlist=show&playlist-continuous=true&chapters-image=true', '/Recursos/pdfs/guias/GUIA_DE_TALLERES_1.pdf']
  ];

  let juego = [];
  let salud = [];
  let cultura = [];
  let hacer = [];
  let historia = [];
  let cuentos = [];
  let familia = [];
  let cocina = [];
  let animales = [];
  let plantas = [];
  let audiolibros = [];
  const listaCategorias = [['juego', juego], ['salud', salud], ['cultura', cultura], ['hacer', hacer], ['historia', historia], 
  ['cuentos', cuentos], ['familia', familia], ['cocina', cocina], ['animales', animales], ['plantas', plantas], ['audiolibros', audiolibros]];

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
              case 5:
                if (element !== '') {
                  const aEscuchar = document.createElement('a');
                  aEscuchar.href = element;
                  aEscuchar.target = '_blank';
                  aEscuchar.innerHTML = '<i class="fa-solid fa-circle-play"></i> Escuchar';
                  aEscuchar.classList.add('listen-link'); // Clase para aplicarle el estilo
                  divHijoPorTitulo.appendChild(aEscuchar);
                }
                break;
              case 6:
                if (element !== '') {
                  const aGuia = document.createElement('a');
                  aGuia.href = '/leerguia.html?id=' + id;
                  aGuia.target = '_blank';
                  aGuia.innerHTML = '<i class="fa-solid fa-chalkboard-user"></i> Guía';
                  aGuia.classList.add('guia-link'); // Clase para aplicarle el estilo
                  divHijoPorTitulo.appendChild(aGuia);
                }
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
    
    case 'Juego':
      if (!juego.includes(filaDeLibro))
        juego.push(filaDeLibro);
      break;

    case 'Salud':
      if (!salud.includes(filaDeLibro))
        salud.push(filaDeLibro);
      break;
      
    case 'Cultura':
      if (!cultura.includes(filaDeLibro))
        cultura.push(filaDeLibro);
      break;

    case 'Hacer':
      if (!hacer.includes(filaDeLibro))
        hacer.push(filaDeLibro);
      break;

    case 'Historia':
      if (!historia.includes(filaDeLibro))
        historia.push(filaDeLibro);
      break;

    case 'Cuentos':
      if (!cuentos.includes(filaDeLibro))
        cuentos.push(filaDeLibro);
      break;

    case 'Familia':
      if (!familia.includes(filaDeLibro))
        familia.push(filaDeLibro);
      break;

    case 'Cocina':
      if (!cocina.includes(filaDeLibro))
        cocina.push(filaDeLibro);
      break;
    
    case 'Animales':
      if (!animales.includes(filaDeLibro))
        animales.push(filaDeLibro);
      break;
    
    case 'Plantas':
      if (!plantas.includes(filaDeLibro))
        plantas.push(filaDeLibro);
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
          case 5:
            if (element !== '') {
              const aEscuchar = document.createElement('a');
              aEscuchar.href = element;
              aEscuchar.target = '_blank';
              aEscuchar.innerHTML = '<i class="fa-solid fa-circle-play"></i> Escuchar';
              aEscuchar.classList.add('listen-link');
              divHijoPorTitulo.appendChild(aEscuchar);
            }
            break;
          case 6:
            if (element !== '') {
              const aGuia = document.createElement('a');
              aGuia.href = '/leerguia.html?id=' + id;
              aGuia.target = '_blank';
              aGuia.innerHTML = '<i class="fa-solid fa-chalkboard-user"></i> Guía';
              aGuia.classList.add('guia-link'); // Clase para aplicarle el estilo
              divHijoPorTitulo.appendChild(aGuia);
            }
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
        case 5:
          if (element !== '') {
            const aEscuchar = document.createElement('a');
            aEscuchar.href = element;
            aEscuchar.target = '_blank';
            aEscuchar.innerHTML = '<i class="fa-solid fa-circle-play"></i> Escuchar';
            aEscuchar.classList.add('listen-link');
            divHijoPorTitulo.appendChild(aEscuchar);
          }
          break;
        case 6:
          if (element !== '') {
            const aGuia = document.createElement('a');
            aGuia.href = '/leerguia.html?id=' + id;
            aGuia.target = '_blank';
            aGuia.innerHTML = '<i class="fa-solid fa-chalkboard-user"></i> Guía';
            aGuia.classList.add('guia-link'); // Clase para aplicarle el estilo
            divHijoPorTitulo.appendChild(aGuia);
          }
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