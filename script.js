// ============================================
// 1. NAVIGATION & SCROLL HANDLING
// ============================================

const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
            navLinks.forEach(link => link.classList.remove('active'));
            
            const activeLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}


// ============================================
// 2. CONTACT FORM HANDLING (EmailJS)
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }

    // Send via EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("service_yyosqov", "template_gwdj26p", templateParams)
        .then(() => {
            showFormMessage('Message sent successfully! Thank you for contacting me.', 'success');
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        })
        .catch((error) => {
            showFormMessage('Failed to send message. Please try again.', 'error');
            console.error('EmailJS error:', error);
        });
});

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// ============================================
// 5. NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// 6. SMOOTH SCROLL BEHAVIOR
// ============================================

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 7. SKILL BARS ANIMATION
// ============================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress && !skillProgress.style.width) {
                // Animation is already handled by CSS
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// ============================================
// 8. EXPORT CONTACT MESSAGES
// ============================================

function exportContactMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    
    if (messages.length === 0) {
        alert('No messages to export');
        return;
    }
    
    // Create CSV content
    let csvContent = 'Name,Email,Message,Date\n';
    messages.forEach(msg => {
        const date = new Date(msg.timestamp).toLocaleString();
        const escapedMessage = `"${msg.message.replace(/"/g, '""')}"`;
        csvContent += `${msg.name},${msg.email},${escapedMessage},${date}\n`;
    });
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-messages-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// ============================================
// 9. CLEAR ALL DATA
// ============================================

function clearAllData() {
    if (confirm('Are you sure you want to clear all saved data? This cannot be undone.')) {
        localStorage.clear();
        location.reload();
    }
}

// ============================================
// 10. KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'E' to edit profile image
    if (e.key === 'e' || e.key === 'E') {
        const profileImage = document.getElementById('profileImage');
        if (profileImage && profileImage.parentElement) {
            currentImageElement = profileImage;
            openImageUploadModal();
        }
    }
    
    // Press 'Escape' to close modal
    if (e.key === 'Escape') {
        closeImageUploadModal();
    }
});

// ============================================
// 11. PRINT PORTFOLIO
// ============================================

function printPortfolio() {
    window.print();
}

// ============================================
// 12. DEVELOPER CONSOLE HELPERS
// ============================================

console.log('%c Portfolio Website', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%c Commands:', 'color: #1a2332; font-size: 14px; font-weight: bold;');
console.log('exportContactMessages() - Export all contact messages as CSV');
console.log('clearAllData() - Clear all saved data');
console.log('printPortfolio() - Print the portfolio');

// ============================================
// 13. PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// 14. RESPONSIVE BEHAVIOR
// ============================================

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
        }
    }, 250);
});

// ============================================
// 15. ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add keyboard navigation for buttons
document.querySelectorAll('button, a[href]').forEach(element => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && element.tagName === 'BUTTON') {
            element.click();
        }
    });
});

// ============================================
// INITIALIZATION
// ============================================

// Initialize on page load
window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully');
    updateActiveNavLink();
});