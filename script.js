document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAV TOGGLER ================= */
    const navToggler = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");
    const mainContent = document.querySelector(".main-content");

    navToggler.style.display = "flex";

    navToggler.addEventListener("click", () => {
        navToggler.classList.toggle("active");
        aside.classList.toggle("active");
        mainContent.classList.toggle("active");
    });

    document.querySelectorAll(".nav a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                navToggler.classList.remove("active");
                aside.classList.remove("active");
                mainContent.classList.remove("active");
            }
        });
    });



    // Typing animation
    new Typed('.typing', {
        strings: ['Web Developer', 'Python Developer', 'UI/UX Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // dark and light mode toggle
    const dayNight = document.querySelector('.day-night');
    dayNight.addEventListener('click', function () {
        this.querySelector('i').classList.toggle('fa-sun');
        this.querySelector('i').classList.toggle('fa-moon');
        document.body.classList.toggle('dark');
    });
});
// Certificate Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

document.querySelectorAll('.certificate-img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Sticky Aside on Scroll
const aside = document.querySelector('.aside');
const footer = document.querySelector('.footer');
const mainContent = document.querySelector('.main-content');

window.addEventListener('scroll', () => {
    const asideHeight = aside.offsetHeight;
    const footerOffsetTop = footer.offsetTop;
    const scrollTop = window.scrollY;

    // distance from top where aside should stop
    const stopPoint = footerOffsetTop - asideHeight;

    if (scrollTop >= stopPoint) {
        aside.classList.add('stop');
    } else {
        aside.classList.remove('stop');
    }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
