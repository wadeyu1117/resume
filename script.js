document.addEventListener('DOMContentLoaded', function() {

    // --- Scroll Fade-in Effect ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: Stop observing the element once it's visible
                    // observer.unobserve(entry.target);
                }
                 // Optional: Remove class if element scrolls out of view (for re-animation)
                 // else {
                 //    entry.target.classList.remove('is-visible');
                 // }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
            // rootMargin: "0px 0px -50px 0px" // Optionally trigger slightly before it enters viewport
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers (simply show elements)
        animatedElements.forEach(el => {
            // Ensure fallback styles match the 'is-visible' state
            el.style.opacity = 1;
            el.style.transform = 'none';
        });
    }

     // --- Update Copyright Year ---
     const yearSpan = document.getElementById('current-year');
     if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
     }

     // --- Placeholder Image Handling ---
     const profilePic = document.getElementById('profilePic');
     if (profilePic && profilePic.src.includes('placeholder.jpg')) {
         profilePic.style.backgroundColor = '#e0e0e0'; // Light gray background for placeholder
         // You could add initials or an icon via CSS pseudo-elements if desired
     }

});