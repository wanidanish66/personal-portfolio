 document.addEventListener('DOMContentLoaded', function () {
            const navToggler = document.querySelector('.nav-toggler');
            const aside = document.querySelector('.aside');
            const mainContent = document.querySelector('.main-content');

            navToggler.style.display = 'flex';

            navToggler.addEventListener('click', function () {
                this.classList.toggle('active');
                aside.classList.toggle('active');
                mainContent.classList.toggle('active');
            });

            const navLinks = document.querySelectorAll('.nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    if (window.innerWidth < 992) {
                        navToggler.classList.remove('active');
                        aside.classList.remove('active');
                        mainContent.classList.remove('active');
                    }
                });
            });

            new Typed('.typing', {
                strings: ['Web Developer', 'Python Developer', 'UI/UX Designer', 'Freelancer'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });

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

        // Back to Top Button
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