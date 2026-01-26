/**
 * Integrity Electrical - Production Script
 * Handles Mobile Menu, Input Formatting, and AJAX Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFormHandling();
    initScrollLogic();
});

/* --- Mobile Menu Logic --- */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            // Small timeout to allow display block to apply before opacity transition if we added one
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

/* --- Consultation Modal Logic --- */
window.toggleModal = function (show) {
    const modal = document.getElementById('consult-modal');
    if (!modal) return;

    if (show) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

/* --- Header Scroll Effect --- */
function initScrollLogic() {
    const header = document.getElementById('main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('header-hidden');
            header.classList.remove('header-visible'); // Transparent at top
            return;
        }

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling Down
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            // Scrolling Up
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        lastScroll = currentScroll;
    });
}

/* --- Form Handling (Standard) --- */
function initFormHandling() {
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

    clearErrors(form);

    // Validate Phone
    const phoneInput = form.querySelector('input[type="tel"]');
    if (phoneInput && !isValidPhone(phoneInput.value)) {
        showError(phoneInput, 'Please enter a valid US phone number.');
        return;
    }

    // Prepare UI
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';

    // Simulate AJAX
    setTimeout(() => {
        form.reset();
        submitBtn.innerText = 'Message Sent!';
        showSuccessMessage(form);

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
            // Optionally close modal on success
            if (form.id === 'consultationForm') {
                setTimeout(() => toggleModal(false), 1500);
            }
        }, 3000);
    }, 1000);
}

function isValidPhone(phone) {
    const phoneRegex = /^(\(\d{3}\)\s|\d{3}[.-]?)?\d{3}[.-]?\d{4}$/;
    return phoneRegex.test(phone);
}

function showError(input, message) {
    input.classList.add('border-red-500', 'focus:border-red-500');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-xs mt-1 error-msg font-bold';
    errorDiv.innerText = message;
    input.parentNode.appendChild(errorDiv);
}

function clearErrors(form) {
    form.querySelectorAll('.error-msg').forEach(el => el.remove());
    form.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-red-500', 'focus:border-red-500');
    });
}

function showSuccessMessage(form) {
    const existing = form.querySelector('.success-msg');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'mt-4 p-4 bg-green-50 text-green-800 border border-green-200 rounded-xl text-center font-bold animate-fadeIn success-msg';
    msg.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Request received.';
    form.appendChild(msg);
    setTimeout(() => msg.remove(), 5000);
}
