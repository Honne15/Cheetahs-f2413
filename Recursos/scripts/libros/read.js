document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');
    let pdfLibro = '/Recursos/pdfs/' + bookId + '.pdf';
    let pdfGuia = '/Recursos/pdfs/guias/' + bookId + '.pdf';

    const conCategoria = JSON.parse(localStorage.getItem('conCategoria'));

    // Función para obtener el libro por su ID
    function getBook(id) {
        const libro = conCategoria.find((fila) => fila[0] === id);
        if (libro) {
            pdfLibro = libro[4];
            pdfGuia = libro[6];
            audioUrl = libro[5] || '';
            console.log('pdfLibro', pdfLibro);
            console.log('pdfGuia', pdfGuia);
            if (window.location.pathname.includes('leerlibro.html')) {
                mostrarPDF(pdfLibro);
            } else if (window.location.pathname.includes('leerguia.html')) {
                mostrarPDF(pdfGuia);
            }
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
    let pdfDoc_;

    function mostrarPDF(url) {
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
    
        pdfjsLib.getDocument(url).promise.then(function(pdf) {
            pdfDoc_ = pdf;
            const pdfViewer = document.getElementById('pdf-viewer');
            pdfViewer.classList.add('pdf-viewer');
            pdfViewer.innerHTML = '';
    
            function renderPage(pageNum) {
                pdfDoc_.getPage(pageNum).then(function(page) {
                    const viewportWidth = window.innerWidth;
                    const scale = viewportWidth < 768 ? 0.45 : 1.5;
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
                            renderPage(pageNum + 1);
                        } else {
                            setupScrollProgress(pdfViewer, pdfDoc_, pdfDoc_.numPages);
                            loadSavedProgress();
                            if (audioUrl) {
                                setupAudioPlayer(audioUrl, isSpreaker, isSpotify);
                            }
                        }
                    });
                
                });
            }
    
            renderPage(1);
        }).catch(error => {
            console.error('Error al cargar el PDF:', error);
        });
    }

//Barra de progreso
    function setupScrollProgress(pdfViewer, pdfDoc_, totalPages) {
        console.log('setupScrollProgress existente');
        const progressBarContainer = document.getElementById('progress-bar-container');
        const progressBar = document.getElementById('progressBar');

        function loadSavedProgress() {
            const savedPage = localStorage.getItem(`book-${bookId}-currentPage`);
            const savedScrollPosition = localStorage.getItem(`book-${bookId}-scrollPosition`);
            if (savedPage && savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition));
            }
        }
    
        loadSavedProgress();
    
        function updateProgressBar() {
            const scrollTop = window.scrollY;
            const documentHeight = pdfViewer.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
            const roundedProgress = scrollProgress.toFixed(0);
        
            progressBar.style.width = roundedProgress + '%';
            progressBar.setAttribute('data-progress', roundedProgress + '%');
            progressBarContainer.style.display = 'block';
        
            localStorage.setItem(`book-${bookId}-progress`, roundedProgress);
            localStorage.setItem(`book-${bookId}-scrollPosition`, scrollTop);
        }
    
        window.addEventListener('scroll', updateProgressBar);
        window.addEventListener('resize', updateProgressBar);
    
        updateProgressBar();
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
