document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple event listener for a button click
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }

    // Function to dynamically update content
    function updateContent() {
        const content = document.getElementById('dynamicContent');
        if (content) {
            content.innerHTML = '<p>This content was updated dynamically!</p>';
        }
    }

    // Call the function to update content on page load
    updateContent();
});