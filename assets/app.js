document.addEventListener('DOMContentLoaded', function() {
    const Year = new Date().getFullYear();
    document.querySelector('.copyright-footer').innerHTML = `Mart Haamer &copy; ${Year}`;

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 1000) {
            navbar.classList.add('animate__animated', 'animate__fadeOutUp');
        } else if (scrollTop < lastScrollTop) {
            navbar.classList.remove('animate__fadeOutUp');
            navbar.classList.add('animate__fadeInDown');
        }
        lastScrollTop = scrollTop;
    });

    const profileImage = document.getElementById('profileImage');
    let timeout;

    profileImage.addEventListener('mousedown', function() {
        if (profileImage.classList.contains('animate__shakeX') || profileImage.classList.contains('animate__bounce') || profileImage.src.includes('pilt-2.jpg')) {
            return;
        }

        timeout = setTimeout(() => {
            profileImage.classList.remove('animate__shakeX');
            profileImage.style.setProperty('--animate-duration', '1s');

            profileImage.classList.add('animate__animated', 'animate__wobble');
            profileImage.style.cursor = 'default';
            profileImage.src = 'assets/pilt-2.jpg';
        }, 5000);

        profileImage.classList.add('animate__animated', 'animate__shakeX');
        profileImage.style.setProperty('--animate-duration', '5s');

        profileImage.style.cursor = 'wait';
    });

    profileImage.addEventListener('mouseup', function() {
        clearTimeout(timeout);
        profileImage.style.cursor = 'default';
        profileImage.classList.remove('animate__shakeX');
    });

    profileImage.addEventListener('mouseleave', function() {
        clearTimeout(timeout);
        profileImage.style.cursor = 'default';
        profileImage.classList.remove('animate__shakeX');
    });


    const animatedHeader = document.querySelector('.home-animated-header');
    const texts = ['/Junior Software Developer/', 'I build things for the web...'];
    let currentTextIndex = 0;
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const currentText = texts[currentTextIndex];
        if (isDeleting) {
            animatedHeader.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
            }
        } else {
            animatedHeader.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 5000);
                return;
            }
        }

        setTimeout(type, isDeleting ? 50 : 100);
    }

    type();

    const Projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam nec dolor tincidunt tincidunt. Donec nec erat nec ligula vehicula accumsan. Nullam auctor, turpis nec vehicula aliquam',
            tools: 'HTML, CSS, JavaScript',
            gitLink: '#'
        },

        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam nec dolor tincidunt tincidunt. Donec nec erat nec ligula vehicula accumsan. Nullam auctor, turpis nec vehicula aliquam',
            tools: 'HTML, CSS, JavaScript',
            gitLink: '#'
        },

        {
            title: 'Project 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam nec dolor tincidunt tincidunt. Donec nec erat nec ligula vehicula accumsan. Nullam auctor, turpis nec vehicula aliquam',
            tools: 'HTML, CSS, JavaScript',
            gitLink: '#'
        },

        {
            title: 'Project 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at quam nec dolor tincidunt tincidunt. Donec nec erat nec ligula vehicula accumsan. Nullam auctor, turpis nec vehicula aliquam',
            tools: 'HTML, CSS, JavaScript',
            gitLink: '#'
        }
    ]

    const projectsContainer = document.querySelector('.projects-container');

    Projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('col-4');

        projectElement.innerHTML = `<div class="p-3 rounded m-2" style="background-color: rgb(28, 37, 65, 0.8); backdrop-filter: blur(5px); max-height: 300px;">	
            <div class="row">
                <div class="col-md-3 col-3">
                    <i class="fa-solid fa-folder fs-2"></i>
                </div>

                <div class="col-md-6 col-6 text-center">
                    <h5 class="m-0 fs-4">${project.title}</h5>
                </div>

                <div class="col-md-3 col-3 text-end">
                    <a
                        title="Github"
                        href="${project.gitLink}"
                        target="_blank"
                        class="side-link"
                        ><i
                            class="fa-brands fa-github"
                            style="font-size: 30px"
                        ></i
                    ></a>
                </div>

                <div class="w-100">
                    <hr />
                </div>

                <div class="col-md-12">
                    <p class="project-description fs-5">
                        ${project.description}
                    </p>
                </div>

                <div class="col-md-12">
                    <p class="m-0 fs-6">${project.tools}</p>
                </div>
            </div>
        </div>`;

        projectsContainer.appendChild(projectElement);
    });
});