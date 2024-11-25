let subCards = document.querySelectorAll('.sub-card');
let state = false;

// Loop through each card
subCards.forEach((card, index) => {
    let content = card.querySelector('.content'); // Get the content specific to this card

    card.addEventListener('click', () => {
        // Hide the content of all other cards
        subCards.forEach((otherCard, otherIndex) => {
            if (otherIndex !== index) {
                let otherContent = otherCard.querySelector('.content');
                otherContent.style.display = 'none';
                otherCard.style.height = '70px'; // Adjust height of other cards if needed
            }
        });

        // Toggle the clicked card's content visibility
        if (content.style.display === 'block') {
            content.style.display = 'none';
            card.style.height = '70px'; // Adjust height when closing
            state = false;
        } else {
            content.style.display = 'block';
            card.style.height = 'fit-content'; // Adjust height when opening
            state = true;
        }

        console.log(state ? 'Opened' : 'Closed');
    });
});

// const password = process.env.MY_PASSWORD;
// console.log(password);  // prints your secret password

// DOWNLOAD PDF BTN
function downloadPDF() {
    // Set the correct password here
    const correctPassword = CONFIG.PASSWORD;
    
    // Prompt the user to enter the password
    const userPassword = prompt("Please enter the password to download the PDF:");

    // Check if the entered password is correct
    if (userPassword === correctPassword) {
        // If the password is correct, trigger the download
        // window.location.href = "path/to/your-protected-resources.pdf"; // Replace with your PDF path
        window.location.href = "../../assets/resource-library/sat-student-guide.pdf"; // Replace with your PDF path
        console.log('You entered correct password!');
    } else if (userPassword === null) {
        // If the user cancels the prompt, do nothing
        alert("Download canceled.");
    } else {
        // If the password is incorrect, show an error
        alert("Incorrect password. Please try again.");
    }
}
console.log("The password is:", CONFIG.PASSWORD);
