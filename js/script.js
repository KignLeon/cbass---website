/**
 * Base Template - Core Interaction Script
 * Handles: Mobile Menu, Modals, Forms (AJAX + Validation)
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initModalSystem();
    initForms();
    initStats();
    initScrollReveal();
    initMobileStickyCTA();
});

/* --- Stats Counter --- */
function initStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));
                if (finalValue) animateValue(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + (obj.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

/* --- Mobile Menu --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('#mobile-menu a');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        toggleMenu(!isOpen);
    });

    // Close on link click
    links.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    function toggleMenu(show) {
        if (show) {
            menu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Lock Body Scroll
            btn.innerHTML = '<i class="fas fa-times text-2xl text-electric"></i>';
        } else {
            menu.classList.remove('open');
            document.body.style.overflow = '';
            btn.innerHTML = '<i class="fas fa-bars text-2xl text-white"></i>';
        }
    }
}

/* --- Modal System (Consolidated) --- */
function initModalSystem() {
    const modal = document.getElementById('modal-overlay');
    const triggers = document.querySelectorAll('[data-trigger="modal"]');
    const closers = document.querySelectorAll('[data-close="modal"]');
    const fab = document.getElementById('fab-cta');

    if (!modal) return;

    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Button Triggers
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // FAB Trigger
    if (fab) {
        fab.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    // Close Triggers
    closers.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Outside Click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    // Exit Intent (Desktop Only)
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
            if (!sessionStorage.getItem('modalShown')) {
                openModal();
                sessionStorage.setItem('modalShown', 'true');
            }
        }
    });

    // Auto-Open (Aggressive - 5s delay)
    const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    if (isHomepage && !sessionStorage.getItem('autoModalShown')) {
        setTimeout(() => {
            if (modal.classList.contains('hidden')) {
                openModal();
                sessionStorage.setItem('autoModalShown', 'true');
            }
        }, 5000);
    }
}

/* --- Mobile Sticky CTA --- */
function initMobileStickyCTA() {
    const stickyCTA = document.getElementById('mobile-sticky-cta');
    if (!stickyCTA) return;

    let lastScrollY = 0;
    let ticking = false;

    function updateStickyCTA() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        // Show after scrolling past hero (300px) and hide near bottom
        const shouldShow = scrollY > 300 && (scrollY + windowHeight) < (docHeight - 200);

        if (shouldShow) {
            stickyCTA.classList.add('visible');
        } else {
            stickyCTA.classList.remove('visible');
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateStickyCTA);
            ticking = true;
        }
    }, { passive: true });
}
