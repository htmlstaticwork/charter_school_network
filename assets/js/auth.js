document.addEventListener('DOMContentLoaded', () => {
    // Simple authentication form handlers
    const authForms = document.querySelectorAll('.auth-form');
    
    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Validate and redirect (mock action)
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                window.location.href = 'user-dashboard.html';
            }, 1000);
        });
    });

    // Password toggle
    const toggleBtns = document.querySelectorAll('.password-toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const wrapper = btn.closest('.password-input-wrapper');
            const input = wrapper.querySelector('input');
            const eyeIcon = btn.querySelector('.eye-icon');
            const eyeOffIcon = btn.querySelector('.eye-off-icon');

            if (input.type === 'password') {
                input.type = 'text';
                if (eyeIcon) eyeIcon.style.display = 'none';
                if (eyeOffIcon) eyeOffIcon.style.display = 'block';
            } else {
                input.type = 'password';
                if (eyeIcon) eyeIcon.style.display = 'block';
                if (eyeOffIcon) eyeOffIcon.style.display = 'none';
            }
        });
    });
});
