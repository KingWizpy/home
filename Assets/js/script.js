
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    // Dark mode toggle
    document.addEventListener('DOMContentLoaded', () => {
        const darkModeToggle = document.getElementById('darkModeToggle');
    
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('darkMode', isDark);
            });
        }
    });
    

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                }
            }
        });
    });


    // Select all skill bars
    const skillBars = document.querySelectorAll('.skill-bar');

    // Create an intersection observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Check if the skill bar is in view
            if (entry.isIntersecting) {
                const skillBarFill = entry.target.querySelector('.skill-bar-fill');
                
                // Add the animate class to start the animation
                skillBarFill.classList.add('animate');
            } else {
                const skillBarFill = entry.target.querySelector('.skill-bar-fill');
                
                // Optionally, remove the animation class when it's out of view
                skillBarFill.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the skill bar is in view
    });

    // Observe each skill bar
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });

    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const fadeObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                fadeObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.3
    });

    fadeInSections.forEach(section => {
        fadeObserver.observe(section);
    });

    //switch job
    const words = ["Game Developer..", "App Developer..", "Animator.."];
    let wordIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500; // delay before switching to next word
    const typingElement = document.getElementById("typing-text");
  
    function type() {
      const currentWord = words[wordIndex];
  
      if (isDeleting) {
        currentText = currentWord.substring(0, charIndex--);
      } else {
        currentText = currentWord.substring(0, charIndex++);
      }
  
      typingElement.textContent = currentText;
  
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      type();
    });


    const container = document.getElementById('spline-container');
    const Splineobserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
        document.body.appendChild(script);

        container.innerHTML = `<spline-viewer url="https://prod.spline.design/QMUdiKNT5nODLgdL/scene.splinecode"></spline-viewer>`;
        observer.unobserve(container);
        }
    }, { threshold: 0.5 });

    observer.observe(container);

    //3D Lazy Load
    const splineContainer = document.getElementById('spline-container');
    let hasLoadedSpline = false;
    
    const fade2Observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika belum pernah dimuat
                if (!hasLoadedSpline) {
                    // Tambahkan script viewer
                    const script = document.createElement('script');
                    script.type = 'module';
                    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
                    document.body.appendChild(script);
    
                    // Tambahkan spline-viewer
                    splineContainer.innerHTML = `
                        <spline-viewer url="https://prod.spline.design/QMUdiKNT5nODLgdL/scene.splinecode"></spline-viewer>
                    `;
    
                    hasLoadedSpline = true;
                }
    
                // Fade in
                splineContainer.classList.remove('opacity-0');
                splineContainer.classList.add('opacity-100');
            } else {
                // Delay penghilangan
                setTimeout(() => {
                    splineContainer.classList.remove('opacity-100');
                    splineContainer.classList.add('opacity-0');
                    splineContainer.innerHTML = '';
                    hasLoadedSpline = false;
                }, 500); // delay 1 detik sebelum unload
            }
        });
    }, { threshold: 0.3 });
    
    fade2Observer.observe(splineContainer);

    // Scroll tombol untuk desktop
    const containersertifikat = document.getElementById('scrollContainer');
    const scrollLeft = document.getElementById('scrollLeft');
    const scrollRight = document.getElementById('scrollRight');

    if (scrollLeft && scrollRight) {
        scrollLeft.addEventListener('click', () => {
        containersertifikat.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRight.addEventListener('click', () => {
        containersertifikat.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // IntersectionObserver untuk animasi saat scroll
    const observersertifikat = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', '-translate-x-10');
            entry.target.classList.add('opacity-100', 'translate-x-0');
            }
        });
        },
        {
        root: containersertifikat,
        threshold: 0.5,
        }
    );

    document.querySelectorAll('.certificate-card').forEach(card => {
        observersertifikat.observe(card);
    });

    //modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.certificate-card img').forEach(img => {
        img.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modalImg.src = img.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalImg.src = "";
    });

    // Tutup modal jika klik di luar gambar
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
        modal.classList.add('hidden');
        modalImg.src = "";
        }
    });

        
