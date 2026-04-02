document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if(icon) {
                if(navbarNav.classList.contains('active')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            }
        });
    }

    // Dropdown toggle for mobile
    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if(window.innerWidth <= 992) {
                e.preventDefault();
                toggle.parentElement.classList.toggle('open');
            }
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Checking local storage for theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
