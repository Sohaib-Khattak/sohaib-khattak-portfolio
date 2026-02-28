// ========================================
// Portfolio JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // Preloader
    // ========================================
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });

    // ========================================
    // Theme Toggle
    // ========================================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        const theme = htmlElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update icon
        if (newTheme === 'light') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // ========================================
    // Smooth Scroll for Navigation
    // ========================================
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
    
    // ========================================
    // Navbar Background on Scroll
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
    
    // ========================================
    // Video Player Functionality
    // ========================================
    const video = document.getElementById('mainVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const playbackStatus = document.getElementById('playbackStatus');

    // Scene files array - plays sequentially
    const sceneFiles = ['scene 1.mp4', 'scene 2.mp4', 'scene 3.mp4', 'scene 4.mp4'];

    let currentSceneIndex = 0;

    // ========================================
    // Play/Pause Toggle
    // ========================================
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // ========================================
    // Stop Button
    // ========================================
    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        currentSceneIndex = 0;
        loadScene(0);
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playbackStatus.textContent = '';
    });

    // ========================================
    // Volume Control
    // ========================================
    volumeSlider.addEventListener('input', (e) => {
        video.volume = e.target.value / 100;
    });

    // ========================================
    // Video Play/Pause Icon Update
    // ========================================
    video.addEventListener('play', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });

    video.addEventListener('pause', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });

    // ========================================
    // Auto-play Next Scene When Current Ends
    // ========================================
    video.addEventListener('ended', () => {
        if (currentSceneIndex < sceneFiles.length - 1) {
            currentSceneIndex++;
            loadScene(currentSceneIndex);
            video.play();
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playbackStatus.textContent = '✓ Showreel completed!';
            setTimeout(() => {
                playbackStatus.textContent = '';
            }, 3000);
        }
    });

    // ========================================
    // Load Scene Function
    // ========================================
    function loadScene(sceneIndex) {
        if (sceneIndex >= 0 && sceneIndex < sceneFiles.length) {
            video.src = sceneFiles[sceneIndex];
            video.load();
            currentSceneIndex = sceneIndex;
        }
    }

    // ========================================
    // Update Playback Status
    // ========================================
    video.addEventListener('timeupdate', () => {
        const currentTime = Math.floor(video.currentTime);
        const duration = Math.floor(video.duration) || 1;
        const progress = ((currentTime / duration) * 100).toFixed(0);
        playbackStatus.textContent = `${formatTime(currentTime)} / ${formatTime(duration)} (${progress}%)`;
    });

    // ========================================
    // Format Time Helper
    // ========================================
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // ========================================
    // Scroll Animation Observer
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-category, .timeline-item, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========================================
    // Contact Form Handler
    // ========================================
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btnText = contactForm.querySelector('.btn-text');
        const btnLoader = contactForm.querySelector('.btn-loader');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        submitBtn.disabled = true;

        // Send email using EmailJS
        // TODO: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values from https://www.emailjs.com/
        // Service ID: Get from EmailJS Dashboard → Email Services
        // Template ID: Get from EmailJS Dashboard → Email Templates
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
            .then(() => {
                // Success
                formMessage.innerHTML = '<p style="color: #10b981; margin-top: 15px;"><i class="fas fa-check-circle"></i> Message sent successfully! I will get back to you soon.</p>';
                contactForm.reset();
            }, (error) => {
                // Error
                formMessage.innerHTML = '<p style="color: #ef4444; margin-top: 15px;"><i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or email me directly.</p>';
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                // Reset button state
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;

                // Clear message after 5 seconds
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            });
    });

    // ========================================
    // Typing Effect for Hero (Optional Enhancement)
    // ========================================
    const heroTitle = document.querySelector('.hero-text h2');
    const roles = [
        'BS Computer Science | Web Developer',
        'Python Developer | AI Enthusiast',
        'Data Analytics | PowerBI Expert',
        'Agentic AI | Robotics Engineering'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            heroTitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            heroTitle.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect after page load
    setTimeout(typeEffect, 2000);

    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        });
    });

    // Add active link styles
    const style = document.createElement('style');
    style.textContent = `
        .active-link {
            color: #3b82f6 !important;
        }
        .active-link::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Stats Counter Animation
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Trigger animation when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // Skills Progress Bar Animation
    // ========================================
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    function animateSkills() {
        skillProgressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }

    // Trigger animation when skills section is visible
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !skillsAnimated) {
                    animateSkills();
                    skillsAnimated = true;
                }
            });
        }, { threshold: 0.3 });

        skillsObserver.observe(skillsSection);
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c👋 Welcome to Sohaib Khattak\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%c💼 BS Computer Science | Web Developer | AI Enthusiast', 'font-size: 14px; color: #64748b;');
    console.log('%c🔗 GitHub: https://github.com/Sohaib-Khattak', 'font-size: 12px; color: #94a3b8;');
    console.log('%c🔗 LinkedIn: https://www.linkedin.com/in/sohaib-khattak-b50497304/', 'font-size: 12px; color: #94a3b8;');
    
});
