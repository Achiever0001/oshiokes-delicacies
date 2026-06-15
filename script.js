const contactBtn = document.getElementById('contactBtn');
const contactDropdown = document.getElementById('contactDropdown');

// Toggle dropdown visibility when clicking the contact button
contactBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops event from bubbling to document click listener
    contactDropdown.classList.toggle('show');
});

// Smoothly close the dropdown window if the user clicks anywhere else on the screen
document.addEventListener('click', (e) => {
    if (!contactDropdown.contains(e.target) && e.target !== contactBtn) {
        contactDropdown.classList.remove('show');
    }
});