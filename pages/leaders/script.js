const cards = document.querySelectorAll('.carousel .card');
const infoBox = document.createElement('div');
infoBox.classList.add('info-box');
document.body.appendChild(infoBox);

const totalCards = cards.length;
let activeIndex = 0;

// Leader data
const leaderData = [
    {
        name: "Andrew Ng",
        birthDate: "April 18, 1976",
        img: "../../assets/leaders/01_andrewNG.jpg",
        works: "Founder of DeepLearning.AI, Co-founder of Coursera",
        quotes: "AI is the new electricity.",
        education: "Stanford University, University of California, Berkeley",
        vision: "Empowering millions through AI education and research.",
    },
    {
        name: "Demis Hassabis",
        birthDate: "July 27, 1976",
        img: "../../assets/leaders/02_demisHassabis.webp",
        works: "CEO and Co-founder of DeepMind",
        quotes: "The future of AI is the future of humanity.",
        education: "University of Cambridge, University College London",
        vision: "Advancing AI to solve complex scientific challenges.",
    },
    {
        name: "Geoffrey Hinton",
        birthDate: "December 6, 1947",
        img: "../../assets/leaders/03_geofferyHinton.webp",
        works: "Godfather of Deep Learning, Turing Award winner",
        quotes: "Our brains have evolved to perform complex tasks effortlessly.",
        education: "University of Edinburgh, University of Cambridge",
        vision: "Understanding the workings of the human brain through AI.",
    },
    // Add similar entries for other leaders...
];

// Function to display leader info in the info box
function displayInfo(index) {
    const leader = leaderData[index];
    infoBox.innerHTML = `
        <div class="info-content">
            <img src="${leader.img}" alt="${leader.name}" class="leader-img">
            <h2>${leader.name}</h2>
            <p><strong>Birth Date:</strong> ${leader.birthDate}</p>
            <p><strong>Notable Works:</strong> ${leader.works}</p>
            <p><strong>Quotes:</strong> "${leader.quotes}"</p>
            <p><strong>Education:</strong> ${leader.education}</p>
            <p><strong>Future Vision:</strong> ${leader.vision}</p>
        </div>
    `;
    infoBox.style.display = "block";
}

// Function to update carousel and info box
function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === activeIndex) {
            card.style.transform = `translateX(0px) scale(1)`;
            card.style.opacity = '1';
        } else if (index < activeIndex) {
            card.style.transform = `translateX(-${(activeIndex - index) * 220}px) scale(0.85)`;
            card.style.opacity = '0.5';
        } else {
            card.style.transform = `translateX(${(index - activeIndex) * 220}px) scale(0.85)`;
            card.style.opacity = '0.5';
        }
    });
    cards[activeIndex].classList.add('active');
    displayInfo(activeIndex);
}

function nextSlide() {
    activeIndex = (activeIndex + 1) % totalCards;
    updateCarousel();
}

function prevSlide() {
    activeIndex = (activeIndex - 1 + totalCards) % totalCards;
    updateCarousel();
}

// Initial setup
updateCarousel();

// Event listeners for manual slide control
document.querySelector('.carousel-left').addEventListener('click', prevSlide);
document.querySelector('.carousel-right').addEventListener('click', nextSlide);

// Add event listeners to cards for manual selection
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        activeIndex = index;
        updateCarousel();
    });
});

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseout', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});


// CSS for the info box (add this to your style.css)
/*
.info-box {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    display: none;
    z-index: 1000;
}
.info-box .info-content {
    display: flex;
    align-items: center;
    gap: 20px;
}
.info-box .leader-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}
*/
