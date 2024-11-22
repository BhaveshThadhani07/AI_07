const cards = document.querySelectorAll('.carousel .card');
const infoBox = document.createElement('div');
infoBox.classList.add('info-box');
document.body.appendChild(infoBox);

const center = document.querySelector('.center')
center.appendChild(infoBox)

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
        philosophy: "Andrew Ng views Artificial Intelligence as a transformative tool akin to electricity, capable of reshaping every industry. His philosophy centers on solving real-world problems, democratizing AI to benefit as many people as possible, and emphasizing ethical and responsible development.",
        insights: [
            "Adopt a growth mindset by continuously learning and experimenting with AI.",
            "Focus on impactful projects that solve meaningful problems and improve lives.",
            "Ensure ethical and responsible AI development to align with societal well-being.",
            "Prioritize high-quality data as it is more critical than complex algorithms.",
            "Combine AI with domain expertise for transformative solutions."
        ]
    },
    {
        name: "Demis Hassabis",
        birthDate: "July 27, 1976",
        img: "../../assets/leaders/02_demisHassabis.webp",
        works: "CEO and Co-founder of DeepMind",
        quotes: "The future of AI is the future of humanity.",
        education: "University of Cambridge, University College London",
        vision: "Advancing AI to solve complex scientific challenges.",
        philosophy: "Demis Hassabis believes that AI is a powerful tool to unlock the mysteries of science, revolutionizing areas like medicine, energy, and space exploration. His philosophy emphasizes creating AI to tackle humanity’s grand challenges while ensuring ethical boundaries.",
        insights: [
            "Use AI to push the boundaries of scientific discovery and solve critical problems.",
            "Focus on ethical development to maintain trust and ensure societal benefit.",
            "Collaborate across disciplines to amplify the impact of AI innovations.",
            "Adopt a vision of long-term AI development to maximize global benefit."
        ]
    },
    {
        name: "Geoffrey Hinton",
        birthDate: "December 6, 1947",
        img: "../../assets/leaders/03_geofferyHinton.jpg",
        works: "Godfather of Deep Learning, Turing Award winner",
        quotes: "Our brains have evolved to perform complex tasks effortlessly.",
        education: "University of Edinburgh, University of Cambridge",
        vision: "Understanding the workings of the human brain through AI.",
        philosophy: "Geoffrey Hinton sees AI as a bridge to unravel the mysteries of human intelligence. His philosophy revolves around leveraging AI to emulate human brain functions, paving the way for smarter and more intuitive systems.",
        insights: [
            "Study biological systems for inspiration in AI development.",
            "Take risks in exploring unconventional approaches to advance AI.",
            "Focus on the fundamental understanding of neural networks to build transformative technologies.",
            "Balance innovation with ethical considerations to avoid misuse."
        ]
    },
    {
        name: "Andrej Karpathy",
        birthDate: "October 23, 1986",
        img: "../../assets/leaders/04_andrejKarpathy.jpg",
        works: "Former Director of AI at Tesla, Researcher in Deep Learning",
        quotes: "Machine learning is like farming; it requires care and nurturing.",
        education: "Stanford University, University of Toronto",
        vision: "Building AI systems that bridge the gap between perception and decision-making.",
        philosophy: "Andrej Karpathy believes in building AI systems that are adaptive and reliable. His philosophy focuses on making AI accessible for real-world applications, especially in areas like autonomous systems and robotics.",
        insights: [
            "Develop AI with an iterative approach—experiment, learn, and improve.",
            "Balance technical depth with practical applications to create usable solutions.",
            "Invest in the data pipeline, as clean and labeled data is the foundation of AI.",
            "Collaborate with domain experts to align AI with real-world needs."
        ]
    },
    {
        name: "Kai-Fu Lee",
        birthDate: "December 3, 1961",
        img: "../../assets/leaders/06_kaiFuLee.jpg",
        works: "Author of 'AI Superpowers,' Former President of Google China",
        quotes: "AI will be the defining technology of the 21st century.",
        education: "Columbia University, Carnegie Mellon University",
        vision: "Transforming industries with AI while fostering human creativity and collaboration.",
        philosophy: "Kai-Fu Lee views AI as a tool to enhance productivity while empowering human creativity. His philosophy stresses the need for collaboration between humans and machines to achieve greater societal progress.",
        insights: [
            "Embrace AI to automate repetitive tasks, freeing humans for creative pursuits.",
            "Ensure AI development aligns with cultural and ethical norms of diverse societies.",
            "Foster collaborations across industries to fully utilize AI’s transformative power.",
            "Invest in education and training to prepare the workforce for an AI-driven future."
        ]
    },
    {
        name: "Sam Altman",
        birthDate: "April 22, 1985",
        img: "../../assets/leaders/05_samAltman..jpg",
        works: "CEO of OpenAI, Former President of Y Combinator",
        quotes: "The power of AI lies in its potential to amplify human capability.",
        education: "Stanford University (dropped out)",
        vision: "Ensuring AI benefits all of humanity by focusing on safety and inclusivity.",
        philosophy: "Sam Altman believes in creating AI that enhances human potential while addressing its risks. His philosophy revolves around building safe and inclusive AI systems that prioritize global welfare.",
        insights: [
            "Focus on creating AI that complements human strengths, not replaces them.",
            "Invest in long-term AI safety to mitigate risks of misuse or unintended consequences.",
            "Ensure inclusivity by making AI accessible and equitable to all communities.",
            "Encourage innovation while fostering discussions about ethical guidelines."
        ]
    },
    {
        name: "Mustafa Suleyman",
        birthDate: "July 15, 1984",
        img: "../../assets/leaders/07_mustafaSuleyman.jpg",
        works: "Co-founder of DeepMind, Author of 'The Coming Wave'",
        quotes: "AI must be guided by ethics and values to shape a better future.",
        education: "University of Oxford",
        vision: "Leveraging AI to address global challenges and enhance human potential.",
        philosophy: "Mustafa Suleyman emphasizes the importance of aligning AI development with human values and ethics. He advocates for responsible innovation to solve global challenges and improve societal well-being.",
        insights: [
            "Integrate ethics into the design process to ensure AI aligns with societal values.",
            "Focus on solving pressing global challenges through collaborative AI initiatives.",
            "Balance technological advancement with transparency and accountability.",
            "Encourage multi-disciplinary efforts to maximize AI’s positive impact."
        ]
    },
    {
        name: "Yann LeCun",
        birthDate: "July 8, 1960",
        img: "../../assets/leaders/08_yannLecun.jpg",
        works: "Chief AI Scientist at Meta, Turing Award Winner",
        quotes: "The path to AI is through understanding how intelligence works.",
        education: "Pierre and Marie Curie University",
        vision: "Developing self-supervised learning methods to unlock the next wave of AI innovation.",
        philosophy: "Yann LeCun focuses on understanding intelligence to create autonomous systems that learn like humans. He emphasizes self-supervised learning as the cornerstone of scalable AI development.",
        insights: [
            "Explore self-supervised learning to build systems that learn from unstructured data.",
            "Emulate human learning processes to create adaptable AI models.",
            "Focus on fundamental research to drive long-term AI progress.",
            "Bridge the gap between theory and application to unlock AI’s potential."
        ]
    },
    {
        name: "Ian Goodfellow",
        birthDate: "March 11, 1985",
        img: "../../assets/leaders/09_ianGoodfellow.jpg",
        works: "Inventor of Generative Adversarial Networks (GANs), AI Researcher at Apple",
        quotes: "GANs open the door to creativity in machines.",
        education: "Stanford University, University of Montreal",
        vision: "Developing AI systems that creatively collaborate with humans.",
        philosophy: "Ian Goodfellow envisions AI as a creative collaborator that augments human potential. He emphasizes the role of generative models like GANs in unlocking new possibilities for creativity and innovation.",
        insights: [
            "Explore generative models to push the boundaries of machine creativity.",
            "Foster collaboration between AI systems and human creators.",
            "Use adversarial training to improve model robustness and performance.",
            "Blend creativity with technical rigor to build impactful AI solutions."
        ]
    },
    {
        name: "Elon Musk",
        birthDate: "June 28, 1971",
        img: "../../assets/leaders/10_elonMusk.jpg",
        works: "CEO of Tesla and SpaceX, Founder of Neuralink and The Boring Company",
        quotes: "When something is important enough, you do it even if the odds are not in your favor.",
        education: "University of Pennsylvania, Wharton School",
        vision: "Accelerating the world’s transition to sustainable energy and making life multi-planetary through advanced technologies.",
        philosophy: "Elon Musk believes in first-principles thinking, leveraging innovation to solve existential challenges, and balancing audacious goals with calculated risks to achieve breakthroughs.",
        insights: [
            "Adopt first-principles thinking to solve complex problems fundamentally.",
            "Embrace resilience and learn from failures to fuel progress.",
            "Pursue cross-disciplinary knowledge to drive innovation and solve diverse challenges.",
            "Combine vision with relentless execution to achieve ambitious goals."
        ]
    },
    {
        name: "Fei-Fei Li",
        birthDate: "December 14, 1976",
        img: "../../assets/leaders/11_feiFeiLi.png",
        works: "Co-Director of Stanford Human-Centered AI Institute, Visionary in Computer Vision",
        quotes: "We need to build AI systems that reflect human values.",
        education: "Princeton University, California Institute of Technology",
        vision: "Bridging AI and humanity by focusing on ethical and inclusive AI development.",
        philosophy: "Fei-Fei Li advocates for building human-centered AI systems that align with human values and ethics. She emphasizes inclusivity, transparency, and societal impact in AI innovation.",
        insights: [
            "Focus on ethical AI development that respects human rights and values.",
            "Use AI to amplify human capabilities while addressing societal needs.",
            "Promote inclusivity in AI research and deployment.",
            "Encourage interdisciplinary collaboration to design impactful AI solutions."
        ]
    },
    {
        name: "Stuart J. Russell",
        birthDate: "May 29, 1962",
        img: "../../assets/leaders/12_stuartRuseel.jpg",
        works: "Author of 'Artificial Intelligence: A Modern Approach,' AI Ethicist",
        quotes: "The real challenge of AI is ensuring it serves humanity responsibly.",
        education: "University of Oxford, Stanford University",
        vision: "Designing AI systems that prioritize human safety and benefit future generations.",
        philosophy: "Stuart J. Russell highlights the importance of building AI systems that prioritize safety, transparency, and alignment with human goals. He views ethical governance as key to ensuring AI serves humanity.",
        insights: [
            "Design AI systems that are safe, predictable, and beneficial.",
            "Incorporate ethical principles into AI development and deployment.",
            "Anticipate long-term risks and plan for responsible AI governance.",
            "Foster open dialogue about the societal impact of AI."
        ]
    },
    {
        name: "Timnit Gebru",
        birthDate: "1982",
        img: "../../assets/leaders/13_timnitGebru.jpg",
        works: "AI Ethics Researcher, Co-founder of the Distributed AI Research Institute (DAIR)",
        quotes: "AI without diversity is AI without accountability.",
        education: "Stanford University",
        vision: "Ensuring AI is developed transparently, inclusively, and for the greater good.",
        philosophy: "Timnit Gebru emphasizes the role of diversity, equity, and accountability in AI research and development. She believes that inclusive teams create more ethical and effective AI solutions.",
        insights: [
            "Promote diversity and inclusion in AI research and development.",
            "Address biases in AI systems to ensure equitable outcomes.",
            "Foster transparency and accountability in AI decision-making processes.",
            "Advocate for collaborative and community-driven AI initiatives."
        ]
    },
    {
        name: "Ray Kurzweil",
        birthDate: "February 12, 1948",
        img: "../../assets/leaders/14_rayKurzweil.jpg",
        works: "Futurist, Author of 'The Singularity is Near,' Director of Engineering at Google",
        quotes: "The singularity is an opportunity, not a threat.",
        education: "Massachusetts Institute of Technology (MIT)",
        vision: "Pioneering AI advancements to merge human intelligence with machine capabilities.",
        philosophy: "Ray Kurzweil emphasizes exponential thinking and predicts the convergence of biological and artificial intelligence to create transformative technologies.",
        insights: [
            "Explore the ethical implications of merging human and machine intelligence.",
            "Understand exponential growth models in technology development.",
            "Encourage innovation to solve complex challenges through AI."
        ]
    },
    {
        name: "Jensen Huang",
        birthDate: "February 17, 1963",
        img: "../../assets/leaders/15_jensenHuang.jpg",
        works: "Founder and CEO of NVIDIA, Pioneer in GPU Computing",
        quotes: "The future is about software that can learn from data.",
        education: "Stanford University, Oregon State University",
        vision: "Revolutionizing AI with high-performance computing to empower industries worldwide.",
        philosophy: "Jensen Huang believes in leveraging GPUs to accelerate AI research and innovation, transforming industries with cutting-edge computing power.",
        insights: [
            "Harness the power of GPUs for AI and deep learning applications.",
            "Develop scalable systems for high-performance computing.",
            "Innovate continuously to push the boundaries of AI capabilities."
        ]
    },
    {
        name: "Ilya Sutskever",
        birthDate: "1985",
        img: "../../assets/leaders/16_ilyaSutskever.jpg",
        works: "Co-founder and Chief Scientist of OpenAI, Developer of GPT Models",
        quotes: "The power of AI lies in its ability to generalize and create.",
        education: "University of Toronto",
        vision: "Advancing general AI to benefit humanity and drive technological progress.",
        philosophy: "Ilya Sutskever envisions AI as a transformative tool that can generalize knowledge to solve complex problems and enhance human creativity.",
        insights: [
            "Explore the development and applications of general AI.",
            "Address ethical concerns in AI deployment.",
            "Foster interdisciplinary collaboration to advance AI technologies."
        ]
    },
    {
        name: "Sundar Pichai",
        birthDate: "June 10, 1972",
        img: "../../assets/leaders/17_sundarPichai.jpg",
        works: "CEO of Alphabet Inc. and Google, Visionary in Internet Technologies",
        quotes: "AI is probably the most important thing humanity has ever worked on.",
        education: "Stanford University, University of Pennsylvania (Wharton)",
        vision: "Making AI accessible and inclusive to solve global challenges and improve lives.",
        philosophy: "Sundar Pichai believes in democratizing technology to empower individuals and create solutions to global problems using AI.",
        insights: [
            "Develop user-centric AI solutions for global accessibility.",
            "Integrate AI into everyday technologies to enhance usability.",
            "Promote inclusivity and diversity in AI development."
        ]
    },
    {
        name: "Satya Nadella",
        birthDate: "August 19, 1967",
        img: "../../assets/leaders/18_satyaNadella.jpg",
        works: "CEO of Microsoft, Leader in Cloud Computing and AI Integration",
        quotes: "AI is not just about technology—it’s about empowering people.",
        education: "University of Wisconsin-Milwaukee, University of Chicago Booth School of Business",
        vision: "Driving AI innovation to transform businesses and create a sustainable future.",
        philosophy: "Satya Nadella advocates for empathy-driven leadership and emphasizes AI as a tool to empower individuals and organizations to achieve more.",
        insights: [
            "Transform businesses with AI-driven cloud computing solutions.",
            "Encourage ethical AI usage to enhance productivity and sustainability.",
            "Foster a growth mindset within organizations for continuous learning."
        ]
    },
    {
        name: "Arvind Krishna",
        birthDate: "1972",
        img: "../../assets/leaders/19_arvindKrishna.jpg",
        works: "Chairman and CEO of IBM, Innovator in Quantum Computing and AI",
        quotes: "AI and quantum computing are the twin engines of future progress.",
        education: "Indian Institute of Technology Kanpur, University of Illinois Urbana-Champaign",
        vision: "Building AI systems that are secure, ethical, and impactful for enterprise growth.",
        philosophy: "Arvind Krishna emphasizes the synergy between AI and quantum computing to drive secure and ethical enterprise solutions.",
        insights: [
            "Explore quantum computing's role in advancing AI.",
            "Implement secure and ethical practices in AI-driven enterprises.",
            "Leverage AI to optimize business processes and strategies."
        ]
    }
    
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
            <p><strong>Philosophy:</strong> ${leader.philosophy}</p>
            <p><strong>Insights to Learn:</strong></p>
            <ul>
                ${leader.insights.map(insight => `<li>${insight}</li>`).join('')}
            </ul>
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
