document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const texts = document.querySelectorAll('.carousel-text p');
    const audio = document.getElementById('background-music');
    let currentIndex = 0;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.style.transform = `translateX(-${index * 100}%)`;
        });
        texts.forEach((text, i) => {
            text.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
    
    audio.play().catch(error => {
        console.log('Autoplay não permitido pelo navegador:', error);
    });
});
