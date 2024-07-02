document.getElementById('input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        searchSite();
    }
});

function searchSite() {
    const query = document.getElementById('input').value.toLowerCase();
    const sections = {
        'servicios': 'servicios',
        'libros': 'libros',
        'objetivo': 'objetivo',
        'popular': 'libros',
        'favorito': 'libros',
        'fundación': 'fundacion',
        'leer': 'leer',
        'aliados': 'aliados',
        'redes sociales': 'redes',
        'redes': 'redes',
        'Servicios': 'servicios',
        'Libros': 'libros',
        'Objectivo': 'objectivo',
        'Accesibilidad': 'objectivo',
        'Popular': 'libros',
        'Favorito': 'libros',
        'Fundación': 'fundacion',
        'Leer': 'leer',
        'Aliados': 'aliados',
        'Redes Sociales': 'redes',
        'Redes': 'redes'
        // Puedes agregar más términos y sus ids correspondientes aquí
    };

    if (sections[query]) {
        document.getElementById(sections[query]).scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('No se encontró la sección correspondiente.');
    }
}
