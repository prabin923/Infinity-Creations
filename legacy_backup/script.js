
// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade In Animation on Scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Hero Video Slider Logic
const videoSlides = document.querySelectorAll('.video-slide');
if (videoSlides.length > 0) {
    let currentSlide = 0;

    // Function to rotate slides
    const nextSlide = () => {
        // Remove active class from current
        videoSlides[currentSlide].classList.remove('active');

        // Calculate next slide index
        currentSlide = (currentSlide + 1) % videoSlides.length;

        // Add active class to next
        videoSlides[currentSlide].classList.add('active');
    };

    // Change slide every 6 seconds
    setInterval(nextSlide, 6000);
}
