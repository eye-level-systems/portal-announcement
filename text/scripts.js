document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    benefitItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate-in');
    });
    
    // Initialize the carousel
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    // Go to Top button functionality
    var goToTopBtn = document.getElementById("goToTopBtn");

    // When the user scrolls down 40px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    goToTopBtn.addEventListener("click", function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // Countdown Timer functionality
    function updateCountdown() {
        const targetDate = new Date("2024-08-12T11:00:00+09:00");
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const countdownElement = document.getElementById("countdown");
            if (countdownElement) {
                countdownElement.innerHTML = 
                    `<span>${String(days).padStart(2, '0')}</span>:` +
                    `<span>${String(hours).padStart(2, '0')}</span>:` +
                    `<span>${String(minutes).padStart(2, '0')}</span>:` +
                    `<span>${String(seconds).padStart(2, '0')}</span>`;
            }
        } else {
            const countdownElement = document.getElementById("countdown");
            if (countdownElement) {
                countdownElement.innerHTML = "The event has passed!";
            }
        }
    }

    // Initialize and update the countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
