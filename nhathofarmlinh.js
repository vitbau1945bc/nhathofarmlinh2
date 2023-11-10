// Add animations when the page loads
window.onload = function () {
    // Function to add a fade-in effect to the header
    const header = document.querySelector('header');
    header.style.opacity = 0;
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transition = 'opacity 1s ease-in-out';
    }, 500);

    // Add a bouncing effect to the images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });

        image.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease-in-out';
        });
    });

    // Create a typewriter effect for the h2 elements
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        typewriterEffect(heading);
    });
};

// Function for a typewriter effect
function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    const speed = 50; // Adjust the speed of typing

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
