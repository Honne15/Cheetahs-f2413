let currentIndex = 1;
let autoSlideInterval;

function cloneItems() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    const firstClone = firstItem.cloneNode(true);
    const lastClone = lastItem.cloneNode(true);

    firstClone.classList.add('clone');
    lastClone.classList.add('clone');

    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, firstItem);
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; 

    carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

function movePrev() {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; 

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
    if (items[currentIndex].classList.contains('clone')) {
        setTimeout(() => {
            currentIndex = items.length - 2;
            carousel.style.transition = 'none';
            updateCarousel();
            requestAnimationFrame(() => carousel.style.transition = '');
        }, 500);
    }
}

function moveNext() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; 

    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
    if (items[currentIndex].classList.contains('clone')) {
        setTimeout(() => {
            currentIndex = 1;
            carousel.style.transition = 'none';
            updateCarousel();
            requestAnimationFrame(() => carousel.style.transition = '');
        }, 500);
    }
}

function startAutoSlide() {
    autoSlideInterval = setInterval(moveNext, 2000); 
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoSlide);

cloneItems();
updateCarousel();
startAutoSlide();
