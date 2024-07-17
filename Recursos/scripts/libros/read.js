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
                const isSpreaker = audioUrl.includes('spreaker.com/player');
                const isSpotify = audioUrl.includes('spotify.com');
                if (audioUrl) {
                    setupAudioPlayer(audioUrl, isSpreaker, isSpotify);
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
            pdfViewer.classList.add('pdf-viewer')
            
            pdfViewer.innerHTML = '';

            let pageNum = 1;
            const totalPages = pdfDoc_.numPages;

            function renderPage(page) {
                const viewportWidth = window.innerWidth;
            
                if (viewportWidth < 768) {
                    scale = 0.45; // Escala para dispositivos móviles
                } else {
                    scale = 1.5; // Escala para dispositivos de escritorio
                }

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
        const progressBar = document.getElementById('progressBar');
        const pdfContainer = document.querySelector('.pdf-container');

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

    document.addEventListener('DOMContentLoaded', setupScrollProgress);

    // Función para el reproductor de audio
    function setupAudioPlayer(audioUrl, isSpreaker, isSpotify) {
        const audioPlayerContainer = document.getElementById('audio-player');
        audioPlayerContainer.innerHTML = '';

        if (isSpreaker || isSpotify) {
            
            const playerWrapper = document.createElement('div');
            playerWrapper.classList.add('player-wrapper');

            const iframe = document.createElement('iframe');
            iframe.classList.add('audio-player-iframe');
            iframe.src = audioUrl;
            iframe.width = '100%';
            iframe.height = '40%';
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
