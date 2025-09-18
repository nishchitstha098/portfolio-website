document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close the mobile menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

// Check for saved theme preference on load
const savedTheme = localStorage.getItem('theme');

// Function to set theme and update button icon
function setTheme(theme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme);
    if (theme === 'dark-mode') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
}

// Set initial theme
if (savedTheme) {
    setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If no saved theme, check system preference
    setTheme('dark-mode');
} else {
    // Default to light mode
    setTheme('light-mode');
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        setTheme('light-mode');
    } else {
        setTheme('dark-mode');
    }
});