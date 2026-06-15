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

// --- OSHIOKES DELICACIES NAVIGATION SCRIPT ---

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileBtn');
    const navLinks = document.getElementById('navLinks');
    const contactBtn = document.getElementById('contactBtn');
    const contactDropdown = document.getElementById('contactDropdown');

    // 1. Mobile Hamburger Menu Toggle
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents immediate closing
            navLinks.classList.toggle('active');
            
            // Optional: Changes hamburger icon to an 'X' close icon when active
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // 2. Contact Dropdown Toggle
    if (contactBtn && contactDropdown) {
        contactBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            contactDropdown.classList.toggle('show');
        });
    }

    // 3. Close Menus Automatically When Clicking Outside
    document.addEventListener('click', (e) => {
        // Close mobile nav if clicking outside of nav area
        if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').className = 'fas fa-bars';
        }

        // Close contact dropdown if clicking outside of contact container
        if (contactDropdown && contactDropdown.classList.contains('show') && !contactDropdown.contains(e.target) && !contactBtn.contains(e.target)) {
            contactDropdown.classList.remove('show');
        }
    });

    // 4. Close Mobile Menu When A Link Is Clicked (For smooth scrolling)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
    });
});