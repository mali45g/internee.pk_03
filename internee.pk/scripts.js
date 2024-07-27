document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.style.display = 'none';
        element.style.opacity = 0;
    });
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('successMessage').style.opacity = 0;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        const nameError = document.getElementById('nameError');
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        setTimeout(() => nameError.style.opacity = 1, 0);
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
        setTimeout(() => emailError.style.opacity = 1, 0);
        isValid = false;
    } else if (!emailPattern.test(email)) {
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Invalid email format.';
        emailError.style.display = 'block';
        setTimeout(() => emailError.style.opacity = 1, 0);
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        const messageError = document.getElementById('messageError');
        messageError.textContent = 'Message is required.';
        messageError.style.display = 'block';
        setTimeout(() => messageError.style.opacity = 1, 0);
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.style.display = 'block';
        setTimeout(() => successMessage.style.opacity = 1, 0);
        document.getElementById('contactForm').reset();
    }
});
