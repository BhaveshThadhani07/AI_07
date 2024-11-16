// script.js

document.addEventListener("scroll", function() {
    const content = document.querySelector('.content');
    const scrollPos = window.scrollY;
    
    // Adjust opacity and scale on scroll for a parallax effect
    if (scrollPos < 800) {
        content.style.transform = `translateY(${scrollPos * 0.2}px) scale(${1 + scrollPos * 0.0005})`;
        content.style.opacity = 1 - scrollPos * 0.001;
    }
});
