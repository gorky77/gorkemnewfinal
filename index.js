document.addEventListener('DOMContentLoaded', (event) => {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation (you can enhance this)
        if (name && email && message) {
            formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
            formResponse.style.color = 'green';
        } else {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.style.color = 'red';
        }

        // Clear form fields
        contactForm.reset();
    });
});

