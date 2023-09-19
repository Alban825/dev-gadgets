const prevButton = document.querySelector('.pictures-prev');
const pictures = document.querySelector('.pictures-img');
const thumbnailImages = document.querySelectorAll('.thumbs-img');
const imageSources = [
    'img/canard-jaune-1-l.png',
    'img/canard-jaune-2-l.png',
    'img/canard-jaune-3-l.png',
    'img/canard-jaune-4-l.png',
    'img/canard-jaune-5-l.png'
];

let currentImageIndex = 0;
prevButton;addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
    pictures.src = imageSources[currentImageIndex];
    thumbnailImages[currentImageIndex].classList.add('active');
    thumbnailImages.forEach((image, index) => {
        if (index !== currentImageIndex)  {
            image.classList.remove('active');
        }
    });
});		
    