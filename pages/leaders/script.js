const cards = document.querySelectorAll('.carousel .card');
console.log(cards);

const totalCards = cards.length;
let activeIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === activeIndex) {
            card.style.transform = `translateX(0px) scale(1)`;
            card.style.opacity = '1';
            // card.setAttribute('style', 'filter:brightness(1)')
        } else if (index < activeIndex) {
            card.style.transform = `translateX(-${(activeIndex - index) * 220}px) scale(0.85)`;
            card.style.opacity = '0.5';
            // card.setAttribute('style', 'filter:brightness(0.5)')
        } else {
            card.style.transform = `translateX(${(index - activeIndex) * 220}px) scale(0.85)`;
            card.style.opacity = '0.5';
            // card.setAttribute('style', 'filter:brightness(0.5)')
        }
    });
    cards[activeIndex].classList.add('active');
}

function nextSlide() {
    activeIndex = (activeIndex + 1) % totalCards;
    updateCarousel();
}

function prevSlide() {
    activeIndex = (activeIndex - 1 + totalCards) % totalCards;
    updateCarousel();
    console.log('Left Clicked');
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial update to set the first slide active
updateCarousel();

// Add event listeners for manual slide control
document.querySelector('.carousel-left').addEventListener('click', prevSlide);
document.querySelector('.carousel-right').addEventListener('click', nextSlide);
