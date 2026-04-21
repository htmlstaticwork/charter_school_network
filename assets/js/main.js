if (typeof lucide !== 'undefined') { lucide.createIcons(); }
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
            if(window.innerWidth <= 1024) {
                e.preventDefault();
                toggle.parentElement.classList.toggle('open');
            }
        });
    });

    // Theme Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    
    function updateThemeUI(isDark) {
        themeToggles.forEach(btn => {
            if (isDark) {
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
            } else {
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
            }
        });
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    if (themeToggles.length > 0) {
        // Initial state
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            updateThemeUI(true);
        } else {
            updateThemeUI(false);
        }

        themeToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateThemeUI(isDark);
            });
        });
    }

    // RTL Toggle
    const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
    
    if (rtlToggles.length > 0) {
        // Initial state
        if (localStorage.getItem('rtl') === 'true') {
            document.body.classList.add('rtl');
        }
        
        rtlToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.classList.toggle('rtl');
                const isRTL = document.body.classList.contains('rtl');
                localStorage.setItem('rtl', isRTL ? 'true' : 'false');
                
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }

    // Initialize Lucide icons if available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Navigation Active State Highlighting
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            
            // If it's a dropdown item, highlight its parent nav-link
            const dropdownParent = link.closest('.dropdown');
            if (dropdownParent) {
                const parentNavLink = dropdownParent.querySelector('.nav-link');
                if (parentNavLink) {
                    parentNavLink.classList.add('active');
                }
            }
        }
    });
});




