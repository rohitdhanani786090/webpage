// Application Data
const appData = {
  "services": [
    {
      "title": "Web Development",
      "description": "Custom websites and web applications built with modern technologies",
      "icon": "🌐"
    },
    {
      "title": "UI/UX Design", 
      "description": "Beautiful, user-centered designs that convert visitors into customers",
      "icon": "🎨"
    },
    {
      "title": "E-commerce",
      "description": "Powerful online stores that drive sales and grow your business",
      "icon": "🛒"
    },
    {
      "title": "Mobile Apps",
      "description": "Native and cross-platform mobile applications for iOS and Android",
      "icon": "📱"
    },
    {
      "title": "SEO Optimization",
      "description": "Improve your search rankings and drive organic traffic",
      "icon": "🚀"
    },
    {
      "title": "Digital Marketing",
      "description": "Comprehensive digital marketing strategies to grow your brand",
      "icon": "📊"
    }
  ],
  "portfolio": [
    {
      "title": "E-commerce Platform",
      "category": "Web Development",
      "description": "Modern online store with advanced features including payment integration, inventory management, and responsive design. Built with cutting-edge technologies to ensure optimal performance and user experience.",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      "title": "Mobile Banking App",
      "category": "Mobile App",
      "description": "Secure and intuitive banking application with biometric authentication, real-time transactions, and comprehensive financial management tools. Designed with security and user experience as top priorities.",
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
    },
    {
      "title": "Restaurant Website",
      "category": "UI/UX Design",
      "description": "Beautiful restaurant website with online ordering system, table reservations, and menu management. Features elegant design that captures the restaurant's atmosphere and brand identity.",
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop"
    },
    {
      "title": "Fitness Tracker App",
      "category": "Mobile App",
      "description": "Comprehensive health and fitness tracking application with workout plans, nutrition tracking, progress analytics, and social features to keep users motivated and engaged.",
      "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
    }
  ],
  "stats": [
    {
      "number": 150,
      "label": "Projects Completed"
    },
    {
      "number": 98,
      "label": "Happy Clients"
    },
    {
      "number": 5,
      "label": "Years Experience"
    },
    {
      "number": 24,
      "label": "Team Members"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "company": "Tech Startup",
      "text": "Amazing work! They delivered exactly what we needed and more. The website looks incredible and performs flawlessly.",
      "rating": 5
    },
    {
      "name": "Mike Chen",
      "company": "E-commerce Store",
      "text": "Professional team with great attention to detail. Our sales increased by 300% after launching the new website.",
      "rating": 5
    },
    {
      "name": "Emma Wilson",
      "company": "Digital Agency",
      "text": "Best web development agency we've worked with. Highly recommend their services to anyone looking for quality work.",
      "rating": 5
    }
  ],
  "team": [
    {
      "name": "Alex Rodriguez",
      "role": "Lead Developer",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      "name": "Sarah Kim",
      "role": "UI/UX Designer",
      "image": "https://images.unsplash.com/photo-1494790108755-2616b612b278?w=300&h=300&fit=crop&crop=face"
    },
    {
      "name": "David Thompson",
      "role": "Project Manager",
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ]
};

// Global Variables
let currentTestimonial = 0;
let particleAnimation;
let isLoading = true;

// DOM Elements
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const loadingScreen = document.getElementById('loadingScreen');
const loadingProgress = document.getElementById('loadingProgress');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const themeToggle = document.getElementById('themeToggle');
const typewriter = document.getElementById('typewriter');
const servicesGrid = document.getElementById('servicesGrid');
const portfolioGrid = document.getElementById('portfolioGrid');
const teamGrid = document.getElementById('teamGrid');
const testimonialsContainer = document.getElementById('testimonialsContainer');
const contactForm = document.getElementById('contactForm');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Application Initialization
function initializeApp() {
    // Start loading animation
    simulateLoading();
    
    // Initialize components after a short delay
    setTimeout(() => {
        initializeParticles();
        initializeCustomCursor();
        initializeNavigation();
        initializeTypewriter();
        populateServices();
        populatePortfolio();
        populateTeam();
        populateTestimonials();
        initializeScrollAnimations();
        initializePortfolioFilters();
        initializeTestimonialCarousel();
        initializeContactForm();
        initializeThemeToggle();
        initializeModal();
        initializeSmoothScroll();
        
        // Hide loading screen
        setTimeout(hideLoadingScreen, 1000);
    }, 500);
}

// Loading Animation
function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
        }
        loadingProgress.style.width = progress + '%';
    }, 100);
}

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        isLoading = false;
        document.body.style.overflow = 'auto';
    }, 500);
}

// Custom Cursor
function initializeCustomCursor() {
    if (window.innerWidth <= 768) return; // Disable on mobile
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorFollower.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .team-member');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// Particle System
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => createParticle(), Math.random() * 5000);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 200);
}

// Navigation
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Fixed Typewriter Effect
function initializeTypewriter() {
    const texts = [
        'Building the future of web development',
        'Creating stunning digital experiences',
        'Transforming ideas into reality',
        'Your vision, our expertise'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typingSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before starting new text
        }
        
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(typeWriter, typingSpeed);
    }
    
    // Start typewriter effect after a delay
    setTimeout(() => {
        typeWriter();
    }, 1500);
}

// Populate Services
function populateServices() {
    appData.services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;
        
        serviceCard.innerHTML = `
            <span class="service-icon">${service.icon}</span>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Populate Portfolio
function populatePortfolio() {
    appData.portfolio.forEach((project, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', project.category.toLowerCase().replace(/[^a-z0-9]/g, '-'));
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${project.image}')"></div>
            <div class="portfolio-content">
                <div class="portfolio-category">${project.category}</div>
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
            </div>
        `;
        
        // Add click event for modal
        portfolioItem.addEventListener('click', (e) => {
            e.preventDefault();
            openProjectModal(project);
        });
        
        portfolioItem.style.cursor = 'pointer';
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Portfolio Filters
function initializePortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                const shouldShow = filter === 'all' || itemCategory === filter;
                
                if (shouldShow) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(50px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Fixed Project Modal
function initializeModal() {
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            closeProjectModal();
        });
    }
    
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            closeProjectModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    if (!projectModal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div style="padding: 20px;">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 24px;">
            <div style="text-align: center;">
                <span style="color: var(--color-primary); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">${project.category}</span>
                <h2 style="font-size: 32px; margin: 16px 0; color: var(--color-text);">${project.title}</h2>
                <p style="font-size: 18px; line-height: 1.6; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 32px;">${project.description}</p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn--primary" onclick="alert('Demo functionality would redirect to live project')">View Live Demo</button>
                    <button class="btn btn--outline" onclick="alert('Source code would open in new tab')">View Source Code</button>
                </div>
            </div>
        </div>
    `;
    
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    if (projectModal) {
        projectModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Populate Team
function populateTeam() {
    appData.team.forEach((member, index) => {
        const teamMember = document.createElement('div');
        teamMember.className = 'team-member';
        teamMember.style.animationDelay = `${index * 0.1}s`;
        
        teamMember.innerHTML = `
            <div class="team-avatar" style="background-image: url('${member.image}')"></div>
            <h4 class="team-name">${member.name}</h4>
            <p class="team-role">${member.role}</p>
        `;
        
        teamGrid.appendChild(teamMember);
    });
}

// Populate Testimonials
function populateTestimonials() {
    appData.testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial-item';
        if (index !== 0) testimonialItem.style.display = 'none';
        
        const stars = '★'.repeat(testimonial.rating);
        
        testimonialItem.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <p class="testimonial-company">${testimonial.company}</p>
            <div class="testimonial-rating">
                <div class="stars" style="color: #ffd700;">${stars}</div>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialItem);
    });
}

// Testimonial Carousel
function initializeTestimonialCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    if (testimonialItems.length === 0) return;
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            testimonialItems[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
            testimonialItems[currentTestimonial].style.display = 'flex';
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            testimonialItems[currentTestimonial].style.display = 'none';
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            testimonialItems[currentTestimonial].style.display = 'flex';
        });
    }
    
    // Auto-rotate testimonials
    setInterval(() => {
        if (!isLoading && nextBtn) {
            nextBtn.click();
        }
    }, 5000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Trigger specific animations
                if (entry.target.classList.contains('stat-item')) {
                    const statNumber = entry.target.querySelector('.stat-number');
                    if (statNumber) {
                        animateCounter(statNumber);
                    }
                }
                
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.service-card, .portfolio-item, .team-member, .stat-item, .skill-item').forEach(el => {
        observer.observe(el);
    });
}

// Fixed Counter Animation
function animateCounter(element) {
    if (element.classList.contains('animated')) return;
    element.classList.add('animated');
    
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        step++;
        current = Math.min(Math.ceil(increment * step), target);
        element.textContent = current;
        
        if (step >= steps || current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, duration / steps);
}

// Skill Bar Animation
function animateSkillBar(skillItem) {
    if (skillItem.classList.contains('animated')) return;
    skillItem.classList.add('animated');
    
    const progressBar = skillItem.querySelector('.skill-progress');
    if (progressBar) {
        const targetWidth = progressBar.getAttribute('data-width');
        
        setTimeout(() => {
            progressBar.style.width = targetWidth + '%';
        }, 200);
    }
}

// Contact Form
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('span');
        const originalText = btnText.textContent;
        
        // Simulate form submission
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            btnText.textContent = 'Message Sent!';
            setTimeout(() => {
                btnText.textContent = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
                
                // Reset form labels
                const formControls = contactForm.querySelectorAll('.form-control');
                formControls.forEach(control => {
                    const label = control.parentNode.querySelector('.form-label');
                    if (label && !control.value) {
                        label.style.top = '16px';
                        label.style.fontSize = 'var(--font-size-base)';
                        label.style.color = 'var(--color-text-secondary)';
                    }
                });
            }, 2000);
        }, 1500);
    });
    
    // Enhanced floating label animation
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        const label = control.parentNode.querySelector('.form-label');
        
        if (control && label) {
            control.addEventListener('focus', () => {
                label.style.top = '-8px';
                label.style.fontSize = 'var(--font-size-sm)';
                label.style.color = 'var(--color-primary)';
            });
            
            control.addEventListener('blur', () => {
                if (!control.value.trim()) {
                    label.style.top = '16px';
                    label.style.fontSize = 'var(--font-size-base)';
                    label.style.color = 'var(--color-text-secondary)';
                }
            });
            
            // Check on load if field has value
            if (control.value.trim()) {
                label.style.top = '-8px';
                label.style.fontSize = 'var(--font-size-sm)';
                label.style.color = 'var(--color-primary)';
            }
        }
    });
}

// Theme Toggle
function initializeThemeToggle() {
    if (!themeToggle) return;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle?.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    updateActiveNavLink();
}, 10));

// Preload images
function preloadImages() {
    const images = [
        ...appData.portfolio.map(p => p.image),
        ...appData.team.map(t => t.image)
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
setTimeout(preloadImages, 2000);

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Failed to load image:', e.target.src);
    }
}, true);

// Intersection Observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all sections for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            fadeObserver.observe(section);
        });
    }, 100);
});