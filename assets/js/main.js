if (typeof lucide !== 'undefined') { lucide.createIcons(); }
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggles = document.querySelectorAll('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileMenuToggles.length > 0 && navbarNav) {
        mobileMenuToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                navbarNav.classList.toggle('active');
                const icon = toggle.querySelector('i');
                if(icon) {
                    if(navbarNav.classList.contains('active')) {
                        icon.setAttribute('data-lucide', 'x');
                    } else {
                        icon.setAttribute('data-lucide', 'menu');
                    }
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        });
    }

    // Dropdown toggle for mobile
    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown .nav-link');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if(window.innerWidth <= 1024) {
                const dropdownMenu = toggle.nextElementSibling;
                if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                    e.preventDefault();
                    toggle.parentElement.classList.toggle('open');
                }
            }
        });
    });

    // Theme Toggle
    const themeToggles = document.querySelectorAll('.theme-toggle-btn');
    
    function updateThemeUI(isDark) {
        themeToggles.forEach(btn => {
            if (isDark) {
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
            } else {
                btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
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




