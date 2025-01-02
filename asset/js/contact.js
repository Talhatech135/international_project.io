document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    
    // Function to filter input value
    function filterName(value) {
      return value.replace(/[^A-Za-z\s]/g, '');
    }

    // Handle input event for typing and pasting
    function handleInput(event) {
      const newValue = filterName(event.target.value);
      if (event.target.value !== newValue) {
        event.target.value = newValue;
      }
    }

    // Handle paste event
    function handlePaste(event) {
      event.preventDefault();
      const pastedData = (event.clipboardData || window.clipboardData).getData('text');
      event.target.value = filterName(pastedData);
    }

    // Event listeners for the name input field
    nameInput.addEventListener('input', handleInput);
    nameInput.addEventListener('paste', handlePaste);

    // Handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Show an alert message
      alert('Form Submitted\nThank you for Contacting us');

      // Refresh the page
      window.location.reload();
    });
  });