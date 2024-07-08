document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    let pdfLibro = '/Recursos/pdfs/' + bookId + '.pdf';

    const conCategoria = JSON.parse(localStorage.getItem('conCategoria'));

    // Función para obtener el libro por su ID
    function getBook(id) {
        const libro = conCategoria.find((fila) => fila[0] === id);
        if (libro) {
            pdfLibro = libro[4];
            console.log('pdfLibro', pdfLibro);
            mostrarPDF(pdfLibro);
        } else {
            console.error('Libro no encontrado');
        }
    }

    // Función para mostrar el PDF en el visor
    function mostrarPDF(url) {
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

        pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
            const pdfViewer = document.getElementById('pdf-viewer');
            let pageNum = 1;

            function renderPage(page) {
                const scale = 1.5;
                const viewport = page.getViewport({ scale: scale });

                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                const renderContext = {
                    canvasContext: ctx,
                    viewport: viewport
                };

                page.render(renderContext).promise.then(() => {
                    pdfViewer.appendChild(canvas);
                    if (pageNum < pdfDoc_.numPages) {
                        pageNum++;
                        pdfDoc_.getPage(pageNum).then(renderPage);
                    }
                });
            }

            pdfDoc_.getPage(pageNum).then(renderPage);
        });
    }

    // Al cargar la página, obtener el libro por su ID y mostrarlo
    getBook(bookId);
});