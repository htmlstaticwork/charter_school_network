document.addEventListener('DOMContentLoaded', () => {
    // Sidebar active state logic
    const currentPath = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    
    sidebarLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // Mobile sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }
});
