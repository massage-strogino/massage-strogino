window.addEventListener('DOMContentLoaded', (event) => {
    // Slider logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.topic_image_list > img');
    const prevBtn = document.querySelector('.slider .prev');
    const nextBtn = document.querySelector('.slider .next');
    const servicesBtn = document.querySelector('.services_btn');

    servicesBtn.addEventListener('click', () => {
        const arrowicon = document.querySelector('.arrow_icon');
        arrowicon.classList.toggle('rotated_arrow_icon');
        const servicesblock = document.querySelector('.services_price');
        
        if (servicesblock.style.display === 'none' || servicesblock.style.display === '') {
            servicesblock.style.display = 'flex';
            setTimeout(() => {
                servicesblock.classList.add('show');
            }, 10); // Небольшая задержка для запуска анимации
        } else {
            servicesblock.classList.remove('show');
            servicesblock.addEventListener('transitionend', function handleTransitionEnd() {
                servicesblock.style.display = 'none';
                servicesblock.removeEventListener('transitionend', handleTransitionEnd);
            }, { once: true });
        }
    });

    function showSlides(n) {
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        slides.forEach(slide => slide.style.display = 'none');
        slides[slideIndex].style.display = 'block';
    }

    prevBtn.addEventListener('click', () => {
        showSlides(--slideIndex);
    });

    nextBtn.addEventListener('click', () => {
        showSlides(++slideIndex);
    });

    showSlides(slideIndex);

    // Lightbox logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.querySelector('.lightbox .close');
    const prevLightbox = document.getElementById('prevLightbox');
    const nextLightbox = document.getElementById('nextLightbox');

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImage.src = slide.src;
            slideIndex = index;
        });
    });

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevLightbox.addEventListener('click', () => {
        slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
        lightboxImage.src = slides[slideIndex].src;
    });

    nextLightbox.addEventListener('click', () => {
        slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
        lightboxImage.src = slides[slideIndex].src;
    });

    // Scroll effect for fixed image
});
