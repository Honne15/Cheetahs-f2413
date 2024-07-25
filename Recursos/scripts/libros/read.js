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
                    scale = 0.45;
                } else {
                    scale = 1.5;
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
                        
                        const lastPage = parseInt(localStorage.getItem(`book-${bookId}-lastPage`)) || 1;
                        const lastScroll = parseInt(localStorage.getItem(`book-${bookId}-lastScroll`)) || 0;
                        
                        if (lastPage > 1) {
                            pdfDoc_.getPage(lastPage).then(renderPage);
                        }
                        
                        setTimeout(() => {
                            window.scrollTo(0, lastScroll);
                        }, 100);
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

//Barra de progreso
    function setupScrollProgress(pdfViewer, pdfDoc, totalPages) {
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progressBar');
    
        function updateProgressBar() {
            const scrollTop = window.scrollY;
            const documentHeight = pdfViewer.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
            const roundedProgress = scrollProgress.toFixed(0);
    
            progressBar.style.width = roundedProgress + '%';
            progressBar.setAttribute('data-progress', roundedProgress + '%');
            progressBarContainer.style.display = 'block';
    
            const currentPage = Math.ceil(scrollTop / pdfViewer.clientHeight) + 1;
            localStorage.setItem(`book-${bookId}-lastPage`, currentPage);
            localStorage.setItem(`book-${bookId}-lastScroll`, scrollTop);
        }
    
        window.addEventListener('scroll', updateProgressBar);
        window.addEventListener('resize', updateProgressBar);
    
        setTimeout(updateProgressBar, 200);
    }

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
