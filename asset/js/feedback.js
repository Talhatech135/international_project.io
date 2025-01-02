document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');

    // Function to filter input value
    function filterInput(value) {
        return value.replace(/[^A-Za-z]/g, '');
    }

    // Handle input event for typing and pasting
    function handleInput(event) {
        const newValue = filterInput(event.target.value);
        if (event.target.value !== newValue) {
            event.target.value = newValue;
        }
    }

    // Handle paste event
    function handlePaste(event) {
        event.preventDefault();
        const pastedData = (event.clipboardData || window.clipboardData).getData('text');
        event.target.value = filterInput(pastedData);
    }

    // Handle keydown event
    function handleKeydown(event) {
        const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
        if (/^[A-Za-z]$/.test(event.key) || allowedKeys.includes(event.key)) {
            return; // Allow alphabetic keys and control keys
        }
        event.preventDefault(); // Block other keys
    }

    // Event listeners for both input fields
    [firstNameInput, lastNameInput].forEach(inputField => {
        inputField.addEventListener('input', handleInput);
        inputField.addEventListener('paste', handlePaste);
        inputField.addEventListener('keydown', handleKeydown);
    });

    // Handle form submission
    const form = document.getElementById('feedback-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        alert('Form Submitted\nThank you for your Feedback');

        // Reload the page
        window.location.reload();
    });
});