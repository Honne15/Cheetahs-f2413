const images = [
  'img/secretos para contar (2).jpeg',
  'img/secretos para contar (3).jpeg',
  'img/secretos para contar (4).jpeg', 
  'img/secretos para contar (5).jpeg',
  'img/secretos para contar (6).jpeg'
];

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = '100%';
  img.style.height = '403px';
  img.style.objectFit = 'cover';
});

let currentImageIndex = 0;

const sliderImage = document.querySelector('.slider__img-secretos');
const preview = document.querySelector('.preview');

sliderImage.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  sliderImage.src = images[currentImageIndex];
});

sliderImage.addEventListener('mousemove', (e) => {
  const nextImageIndex = (currentImageIndex + 1) % images.length;
  const nextImageSrc = images[nextImageIndex];

  if (!preview.querySelector('img')) {
      const previewImg = document.createElement('img');
      previewImg.src = nextImageSrc;
      preview.appendChild(previewImg);
  } else {
      preview.querySelector('img').src = nextImageSrc;
  }

  const sliderRect = sliderImage.getBoundingClientRect();
  const previewSize = 100;
  const offset = 20;

  let left = e.clientX - sliderRect.left + offset;
  let top = e.clientY - sliderRect.top + offset;

  if (left + previewSize > sliderRect.width) {
      left = sliderRect.width - previewSize;
  }

  if (top + previewSize > sliderRect.height) {
      top = sliderRect.height - previewSize;
  }

  preview.style.left = `${left}px`;
  preview.style.top = `${top}px`;
  preview.style.display = 'block';
});

sliderImage.addEventListener('mouseleave', () => {
  preview.style.display = 'none';
});
