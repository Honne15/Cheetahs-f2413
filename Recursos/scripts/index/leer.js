const url = '/Recursos/pdfs/';

const conFavoritos = [
      ['1', '/Recursos/pdfs/A_QUE_TE_COJO_RATON.pdf'],
      ['13', '/Recursos/pdfs/ENTRE_CUENTO_Y_CUENTO.pdf'],
      ['24', '/Recursos/pdfs/LOS_PRIMEROS_ANOS.pdf']
  ];

  window.addEventListener('load', () => {
    localStorage.setItem('conFavoritos', JSON.stringify(conFavoritos));

    conFavoritos.forEach((fila, index) => {
        let divPadre = document.getElementById(`buttonRead${index + 1}`);
        let id = fila[0];
        
        const aLeer = document.createElement('a');
        aLeer.href = '/leerlibro.html?id=' + id;
        aLeer.target = '_blank';
        aLeer.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> Leer';
        aLeer.classList.add('buttonRead');
        
        divPadre.appendChild(aLeer);
    });
});