// Features data
const features = [
    {
        icon: "💰",
        title: "Sales & Purchase",
        description: "Complete sales order management, invoicing, and purchase tracking"
    },
    {
        icon: "🏦",
        title: "Banking Integration",
        description: "Direct bank integration for payments, reconciliation, and check writing"
    },
    {
        icon: "👥",
        title: "Employee Management",
        description: "Payroll, attendance, leave tracking, and employee performance"
    },
    {
        icon: "⚙️",
        title: "Production Management",
        description: "Job costing, phase management, and production planning"
    },
    {
        icon: "📦",
        title: "Inventory Control",
        description: "Stock status, reorder points, and inventory valuation"
    },
    {
        icon: "📊",
        title: "Financial Reports",
        description: "Aged receivables, payables, ratios, and key indicators"
    },
    {
        icon: "📋",
        title: "Tax Reports",
        description: "Complete tax reporting and compliance"
    },
    {
        icon: "📈",
        title: "Business Analytics",
        description: "Real-time business insights and KPIs"
    }
];

// Load features into grid
function loadFeatures() {
    const grid = document.getElementById('features-grid');
    if (!grid) return;
    
    features.forEach((feature, index) => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        grid.appendChild(card);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
    } else {
        navbar.style.background = 'rgba(255,255,255,0.95)';
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! A representative will contact you soon.');
        contactForm.reset();
    });
}

// Loading animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1000);
    }
});

// Animate stats counter
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.innerText = target + '+';
                clearInterval(timer);
            } else {
                stat.innerText = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .solution-card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFeatures();
    animateStats();
    
    // Add loading overlay
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    loadingDiv.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingDiv);
});
