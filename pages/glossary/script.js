// Select all "Read More" links
document.querySelectorAll(".readMoreLink").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Close all open cards before opening the clicked one
        document.querySelectorAll(".card").forEach(function(card) {
            const moreContent = card.querySelector(".moreContent"); // Change to class
            const img = card.querySelector(".toggleImg");
            const readMoreLink = card.querySelector(".readMoreLink");
            card.style.height = "fit-content";

            // Check if elements exist before trying to access their properties
            if (moreContent) {
                moreContent.style.display = "none"; // Hide the content
            }
            if (img) {
                img.style.display = "none"; // Hide the image
            }
            readMoreLink.textContent = "Read More"; // Reset link text
        });
        
        // Toggle the clicked card's content and image
        const card = this.closest(".card");
        const moreContent = card.querySelector(".moreContent"); // Change to class
        const img = card.querySelector(".toggleImg");

        if (moreContent) {
            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block"; // Show content
                if (img) {
                    img.style.display = "block"; // Show image only if it exists
                }
                this.textContent = "Read Less"; // Change link text to "Read Less"
            } else {
                moreContent.style.display = "none"; // Hide content
                if (img) {
                    img.style.display = "none"; // Hide image only if it exists
                }
                this.textContent = "Read More"; // Change link text back to "Read More"
            }
        }
    });
});


// SEARCH BAR

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput'); // Search input field
    const glossaryTerms = document.querySelectorAll('.card'); // Each glossary card containing a term

    // Listen for input in the search bar
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim(); // Get the search term, in lowercase

        glossaryTerms.forEach(card => {
            const termTitle = card.querySelector('h3').textContent.toLowerCase(); // Get term title text
            const termContent = card.querySelector('p').textContent.toLowerCase(); // Get term content text

            // Check if the search term is in either the title or content of the term
            if (termTitle.includes(searchTerm) || termContent.includes(searchTerm)) {
                card.style.display = 'block'; // Show matching term
            } else {
                card.style.display = 'none'; // Hide non-matching term
            }
        });
    });
});

// GO TO TOP
const goToTopBtn = document.querySelector('.goToTop');

goToTopBtn.addEventListener('click', () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
    });
});
