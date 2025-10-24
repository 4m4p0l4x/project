document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });  
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-blue-600');
                });
                
                const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('text-blue-600');
                }
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
    
    const dashboardItems = document.querySelectorAll('.dashboard-item');
    
    dashboardItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Dashboard item clicked:', this);
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
     const heroTitle = document.querySelector('#hero h1');
     if (heroTitle) {
         const originalText = heroTitle.textContent;
         typeWriter(heroTitle, originalText, 70);
     }
       
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = this.querySelector('span').textContent;
                    this.querySelector('span').textContent = '¡Copiado!';
                    
                    setTimeout(() => {
                        this.querySelector('span').textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar:', err);
                });
            }
        });
    }
    
        function createScrollToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none z-40';
        button.id = 'scroll-to-top';
        document.body.appendChild(button);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                button.classList.remove('opacity-0', 'pointer-events-none');
                button.classList.add('opacity-100');
            } else {
                button.classList.add('opacity-0', 'pointer-events-none');
                button.classList.remove('opacity-100');
            }
        });
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    createScrollToTopButton();
    
    function lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    lazyLoadImages();
    
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    function trackEvent(category, action, label) {
        console.log('Event:', category, action, label);
    }
    
    // Trackear clicks en proyectos
    document.querySelectorAll('.dashboard-item').forEach(item => {
        item.addEventListener('click', function() {
            trackEvent('Project', 'View Dashboard', this.querySelector('h5').textContent);
        });
    });
    
    document.querySelectorAll('.contact-link').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Contact', 'Click', this.querySelector('span').textContent);
        });
    });
    
    
    console.log('%c👨‍💻 Portfolio Developer', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%c¿Interesado en colaborar? Contáctame!', 'color: #4b5563; font-size: 14px;');
    console.log('%cGitHub: tu-usuario', 'color: #6b7280; font-size: 12px;');
    
});

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function throttle(func, wait) {
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

console.log('Mobile:', isMobile());
console.log('Screen:', window.innerWidth + 'x' + window.innerHeight);