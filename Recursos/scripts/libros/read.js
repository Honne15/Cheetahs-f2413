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
            setupGuardarButton(libro);
            if (libro.length > 5) {
                const audioUrl = libro[5] || '';
                const isPlaylist = audioUrl.includes('spreaker.com/player');
                if (audioUrl) {
                    setupAudioPlayer(audioUrl, isPlaylist);
                } else {
                    console.log('Este libro no tiene audio asociado.');
                }
            } else {
                console.log('Este libro no tiene audio asociado.');
            }
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
            pdfViewer.classList.add('pdf-viewer-centered')
            
            pdfViewer.innerHTML = '';

            let pageNum = 1;
            const totalPages = pdfDoc_.numPages;

            function renderPage(page) {
                const scale = 1.3;
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

                    if (pageNum === 1) {
                        setupScrollProgress(pdfViewer, pdfDoc_, totalPages);
                    }

                    if (pageNum < totalPages) {
                        pageNum++;
                        pdfDoc_.getPage(pageNum).then(renderPage);
                    }
                });
            }

            pdfDoc_.getPage(pageNum).then(renderPage);
        });
    }

    // Función para configurar el progreso al hacer scroll
    function setupScrollProgress(pdfViewer, pdfDoc, totalPages) {
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progress-bar');

        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const documentHeight = pdfViewer.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = scrollProgress.toFixed(2) + '%';
            progressBarContainer.style.display = 'block';

            if (scrollTop + windowHeight >= documentHeight) {
                progressBarContainer.style.display = 'none';
            }
        });
    }

    // Función para el reproductor de audio
    function setupAudioPlayer(audioUrl, isPlaylist = false) {
        const audioPlayerContainer = document.getElementById('audio-player');
        audioPlayerContainer.classList.add('audio-player-centered');
        audioPlayerContainer.innerHTML = '';

        if (isPlaylist) {
            // Crear el código HTML para mostrar la lista de reproducción
            const iframe = document.createElement('iframe');
            iframe.classList.add('audio-player-iframe');
            iframe.src = audioUrl;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.allow = 'encrypted-media';

            audioPlayerContainer.appendChild(iframe);
        } else {
            // Crear el reproductor de audio individual
            const audio = document.createElement('audio');
            audio.src = audioUrl;
            audio.controls = true;

            audioPlayerContainer.appendChild(audio);
        }
    }

    // Al cargar la página, obtener el libro por su ID y mostrarlo
    getBook(bookId);
});
