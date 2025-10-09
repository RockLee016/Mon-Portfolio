document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contact-form');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

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

    sections.forEach(section => {
        observer.observe(section);
    });

    const skillLevels = document.querySelectorAll('.skill-level');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillLevels.forEach(skill => {
        skillObserver.observe(skill);
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const formSuccess = document.getElementById('form-success');
        const message_api = document.getElementById('message_api');
        const success_icone = document.getElementById('success_icone');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        nameError.style.display = 'none';
        emailError.style.display = 'none';
        messageError.style.display = 'none';
        formSuccess.classList.remove('show');

        let isValid = true;

        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Le nom doit contenir au moins 2 caractères';
            nameError.style.display = 'block';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Veuillez entrer une adresse email valide';
            emailError.style.display = 'block';
            isValid = false;
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Le message doit contenir au moins 10 caractères';
            messageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            sendDataByAjax (
                "https://contact-client.nathanbgaena.workers.dev/",
                "POST",
                {
                    nom: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim()
                }
            )
            .then ((promise) => {
                if(promise.status){
                    success_icone.style.display = "block";
                    message_api.innerText= promise.message;
                    formSuccess.style.backgroundColor = "#10b981"; // Rouge pour l'erreur
                    formSuccess.classList.add('show');

                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';

                    setTimeout(() => {
                        formSuccess.classList.remove('show');
                        message_api.innerText= "";
                    }, 5000);
                }else{
                    success_icone.style.display = "none";
                    message_api.innerText= promise.message;
                    formSuccess.style.backgroundColor = "#e74c3c"; // Rouge pour l'erreur
                    formSuccess.classList.add('show');
                    
                    setTimeout(() => {
                        formSuccess.classList.remove('show');
                        message_api.innerText= "";
                    }, 5000);
                }
            })
            .catch ((error) => {
                console.log(error);
                success_icone.style.display = "none";
                message_api.innerText = `Une erreur est survenue dans le traitement des données. Veuillez réessayer dans un instant !`;
                formSuccess.style.backgroundColor = "#e74c3c"; // Rouge pour l'erreur
                formSuccess.classList.add('show');
                
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                    message_api.innerText= "";
                }, 5000);
            });
            // console.log('Form data:', {
            //     name: nameInput.value.trim(),
            //     email: emailInput.value.trim(),
            //     message: messageInput.value.trim()
            // });

            // formSuccess.classList.add('show');

            // nameInput.value = '';
            // emailInput.value = '';
            // messageInput.value = '';

            // setTimeout(() => {
            //     formSuccess.classList.remove('show');
            // }, 5000);
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


function sendDataByAjax (url, methode, data) {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url: url,
            type: methode,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (data) {
                if(!data.status){
                    // Cela veut dire qu'il y a eu une erreur et que le code HTTP est 200
                    reject({
                        status: data.status,
                        message: data.message,
                        message_admin: data.message_admin
                    })
                }
                else{
                    // Cela veut dire qu'il n'y a pas eu d'erreur
                    resolve({
                        status: data.status,
                        message: data.message,
                        message_admin: data.message_admin
                    })
                }
            },
            error: function () {
                // la fonction atteindra cette erreur que si elle n'arrive pas à se connecter à l'url
                reject(new Error ("oups"));
            }
        })
    });
}