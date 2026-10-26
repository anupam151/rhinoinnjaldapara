/* ==========================================================================
   Main Application Script & Image Slider Logic
   ================================================================---------- */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Rhino Inn Jaldapara modern frontend initialized.");

    // Highlight active navbar link automatically
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split("/").pop();
        if (linkHref === currentPath) {
            link.classList.add('active');
        }
    });

    // Hero Image Slider Script
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Auto-advance slides every 5 seconds
    if (slides.length > 0) {
        slideInterval = setInterval(nextSlide, 5000);

        // Allow manual clicking on pagination dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(index);
                slideInterval = setInterval(nextSlide, 5000);
            });
        });
    }
});