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
        img: "../../assets/leaders/03_geofferyHinton.jpg",
        works: "Godfather of Deep Learning, Turing Award winner",
        quotes: "Our brains have evolved to perform complex tasks effortlessly.",
        education: "University of Edinburgh, University of Cambridge",
        vision: "Understanding the workings of the human brain through AI.",
    },
    {
        name: "Andrej Karpathy",
        birthDate: "October 23, 1986",
        img: "../../assets/leaders/04_andrejKarpathy.jpg",
        works: "Former Director of AI at Tesla, Researcher in Deep Learning",
        quotes: "Machine learning is like farming; it requires care and nurturing.",
        education: "Stanford University, University of Toronto",
        vision: "Building AI systems that bridge the gap between perception and decision-making.",
    },
    {
        name: "Kai-Fu Lee",
        birthDate: "December 3, 1961",
        img: "../../assets/leaders/06_kaiFuLee.jpg",
        works: "Author of 'AI Superpowers,' Former President of Google China",
        quotes: "AI will be the defining technology of the 21st century.",
        education: "Columbia University, Carnegie Mellon University",
        vision: "Transforming industries with AI while fostering human creativity and collaboration.",
    },
    {
        name: "Sam Altman",
        birthDate: "April 22, 1985",
        img: "../../assets/leaders/05_samAltman..jpg",
        works: "CEO of OpenAI, Former President of Y Combinator",
        quotes: "The power of AI lies in its potential to amplify human capability.",
        education: "Stanford University (dropped out)",
        vision: "Ensuring AI benefits all of humanity by focusing on safety and inclusivity.",
    },
    {
        name: "Mustafa Suleyman",
        birthDate: "July 15, 1984",
        img: "../../assets/leaders/07_mustafaSuleyman.jpg",
        works: "Co-founder of DeepMind, Author of 'The Coming Wave'",
        quotes: "AI must be guided by ethics and values to shape a better future.",
        education: "University of Oxford",
        vision: "Leveraging AI to address global challenges and enhance human potential.",
    },
    {
        name: "Yann LeCun",
        birthDate: "July 8, 1960",
        img: "../../assets/leaders/08_yannLecun.jpg",
        works: "Chief AI Scientist at Meta, Turing Award Winner",
        quotes: "The path to AI is through understanding how intelligence works.",
        education: "Pierre and Marie Curie University",
        vision: "Developing self-supervised learning methods to unlock the next wave of AI innovation.",
    },
    
    {
        name: "Ian Goodfellow",
        birthDate: "March 11, 1985",
        img: "../../assets/leaders/09_ianGoodfellow.jpg",
        works: "Inventor of Generative Adversarial Networks (GANs), AI Researcher at Apple",
        quotes: "GANs open the door to creativity in machines.",
        education: "Stanford University, University of Montreal",
        vision: "Developing AI systems that creatively collaborate with humans.",
    },
    {
        name: "Elon Musk",
        birthDate: "June 28, 1971",
        img: "../../assets/leaders/10_elonMusk.jpg",
        works: "CEO of Tesla and SpaceX, Founder of Neuralink and The Boring Company",
        quotes: "When something is important enough, you do it even if the odds are not in your favor.",
        education: "University of Pennsylvania, Wharton School",
        vision: "Accelerating the world’s transition to sustainable energy and making life multi-planetary through advanced technologies.",
        philosophy: "Relentless pursuit of innovation, challenging conventional wisdom, and taking calculated risks to achieve breakthroughs.",
        insights: "Advocates for first-principles thinking, which involves breaking down complex problems to their fundamental truths and solving them from the ground up.",
        thingsToLearn: [
            "The importance of resilience and learning from failures.",
            "How to align a mission-driven approach with business goals.",
            "The value of cross-disciplinary knowledge to drive innovation."
        ],
        achievements: [
            "Transformed the automotive industry with electric vehicles.",
            "Developed reusable rockets to lower space exploration costs.",
            "Spearheaded the development of brain-machine interfaces for enhanced human cognition."
        ],
    },
    
    {
        name: "Fei-Fei Li",
        birthDate: "December 14, 1976",
        img: "../../assets/leaders/11_feiFeiLi.png",
        works: "Co-Director of Stanford Human-Centered AI Institute, Visionary in Computer Vision",
        quotes: "We need to build AI systems that reflect human values.",
        education: "Princeton University, California Institute of Technology",
        vision: "Bridging AI and humanity by focusing on ethical and inclusive AI development.",
    },
    {
        name: "Stuart J. Russell",
        birthDate: "May 29, 1962",
        img: "../../assets/leaders/12_stuartRuseel.jpg",
        works: "Author of 'Artificial Intelligence: A Modern Approach,' AI Ethicist",
        quotes: "The real challenge of AI is ensuring it serves humanity responsibly.",
        education: "University of Oxford, Stanford University",
        vision: "Designing AI systems that prioritize human safety and benefit future generations.",
    },
    {
        name: "Timnit Gebru",
        birthDate: "1982",
        img: "../../assets/leaders/13_timnitGebru.jpg",
        works: "AI Ethics Researcher, Co-founder of the Distributed AI Research Institute (DAIR)",
        quotes: "AI without diversity is AI without accountability.",
        education: "Stanford University",
        vision: "Ensuring AI is developed transparently, inclusively, and for the greater good.",
    },
    {
        name: "Ray Kurzweil",
        birthDate: "February 12, 1948",
        img: "../../assets/leaders/14_rayKurzweil.jpg",
        works: "Futurist, Author of 'The Singularity is Near,' Director of Engineering at Google",
        quotes: "The singularity is an opportunity, not a threat.",
        education: "Massachusetts Institute of Technology (MIT)",
        vision: "Pioneering AI advancements to merge human intelligence with machine capabilities.",
    },
    {
        name: "Jensen Huang",
        birthDate: "February 17, 1963",
        img: "../../assets/leaders/15_jensenHuang.jpg",
        works: "Founder and CEO of NVIDIA, Pioneer in GPU Computing",
        quotes: "The future is about software that can learn from data.",
        education: "Stanford University, Oregon State University",
        vision: "Revolutionizing AI with high-performance computing to empower industries worldwide.",
    },
    {
        name: "Ilya Sutskever",
        birthDate: "1985",
        img: "../../assets/leaders/16_ilyaSutskever.jpg",
        works: "Co-founder and Chief Scientist of OpenAI, Developer of GPT Models",
        quotes: "The power of AI lies in its ability to generalize and create.",
        education: "University of Toronto",
        vision: "Advancing general AI to benefit humanity and drive technological progress.",
    },
    {
        name: "Sundar Pichai",
        birthDate: "June 10, 1972",
        img: "../../assets/leaders/17_sundarPichai.jpg",
        works: "CEO of Alphabet Inc. and Google, Visionary in Internet Technologies",
        quotes: "AI is probably the most important thing humanity has ever worked on.",
        education: "Stanford University, University of Pennsylvania (Wharton)",
        vision: "Making AI accessible and inclusive to solve global challenges and improve lives.",
    },
    {
        name: "Satya Nadella",
        birthDate: "August 19, 1967",
        img: "../../assets/leaders/18_satyaNadella.jpg",
        works: "CEO of Microsoft, Leader in Cloud Computing and AI Integration",
        quotes: "AI is not just about technology—it’s about empowering people.",
        education: "University of Wisconsin-Milwaukee, University of Chicago Booth School of Business",
        vision: "Driving AI innovation to transform businesses and create a sustainable future.",
    },
    {
        name: "Arvind Krishna",
        birthDate: "1972",
        img: "../../assets/leaders/19_arvindKrishna.jpg",
        works: "Chairman and CEO of IBM, Innovator in Quantum Computing and AI",
        quotes: "AI and quantum computing are the twin engines of future progress.",
        education: "Indian Institute of Technology Kanpur, University of Illinois Urbana-Champaign",
        vision: "Building AI systems that are secure, ethical, and impactful for enterprise growth.",
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
