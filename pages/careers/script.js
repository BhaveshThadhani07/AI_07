// Select all "Read More" links
document.querySelectorAll(".readMoreLink").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Close all open cards before opening the clicked one
        document.querySelectorAll(".card").forEach(function(card) {
            const moreContent = card.querySelector(".moreContent"); // Change to class
            const img = card.querySelector(".toggleImg");
            const readMoreLink = card.querySelector(".readMoreLink");

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
