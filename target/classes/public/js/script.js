/**
 * Integrity Electrical - Precision Script
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFormHandling();
    initScrollLogic();
});

/* --- Smooth Scroll to Hero Form --- */
window.scrollToForm = function () {
    const form = document.getElementById('hero-form-card');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Optional: Focus the first input
        setTimeout(() => {
            const firstInput = form.querySelector('input');
            if (firstInput) firstInput.focus();
        }, 800);
    }
}

/* --- Header Scroll Effect (Transparent -> White) --- */
function initScrollLogic() {
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

/* --- Mobile Menu Logic --- */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }

        // Icon Toggle
        const icon = menuButton.querySelector('i');
        if (icon) {
            icon.className = isHidden ? 'fas fa-times' : 'fas fa-bars';
        }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuButton.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });
}

/* --- Form Handling (Inline Hero Form) --- */
function initFormHandling() {
    // Handle both the hero form any other forms
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);

        // Real-time phone formatting
        const phoneInput = form.querySelector('input[type="tel"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', formatPhoneNumber);
        }
    });
}

function formatPhoneNumber(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? '-' + x[3] : ''}`;
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    // Clear previous success messages
    const existingMsg = form.querySelector('.success-msg');
    if (existingMsg) existingMsg.remove();

    // Prepare UI
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate AJAX
    setTimeout(() => {
        form.reset();
        submitBtn.innerText = 'Consultation Requested!';

        // Add inline success message
        const msg = document.createElement('div');
        msg.className = 'mt-3 p-3 bg-green-50 text-green-700 text-xs font-bold rounded-lg text-center animate-fadeIn success-msg';
        msg.innerHTML = '<i class="fas fa-check-circle mr-1"></i> Received. We will call you shortly.';

        // Insert after button
        submitBtn.parentNode.insertBefore(msg, submitBtn.nextSibling);

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
            setTimeout(() => msg.remove(), 5000);
        }, 3000);
    }, 1200);
}
