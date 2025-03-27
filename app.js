document.addEventListener('DOMContentLoaded', function () {
	const Year = new Date().getFullYear();
	document.querySelector(
		'.copyright-footer'
	).innerHTML = `Mart Haamer &copy; ${Year}`;

	const birthDate = new Date(2003, 5, 25);
	const ageDifMs = Date.now() - birthDate.getTime();
	const ageDate = new Date(ageDifMs);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
	document.getElementById('myAge').innerHTML = age;

	const animatedHeader = document.querySelector('.home-animated-header');
	const texts = [
		'/Junior Software Developer/',
		'I build things for the web..',
	];

	let currentTextIndex = 0;
	let charIndex = 0;

	function type() {
		const currentText = texts[currentTextIndex];
		animatedHeader.textContent = currentText.substring(0, charIndex + 1);
		charIndex++;
		if (charIndex === currentText.length) {
			charIndex = 0;
			currentTextIndex = (currentTextIndex + 1) % texts.length;
			setTimeout(() => {
				animatedHeader.classList.add(
					'animate__animated',
					'animate__fadeOut'
				);
				setTimeout(() => {
					animatedHeader.classList.remove('animate__fadeOut');
					animatedHeader.classList.add('animate__fadeIn');
					type();
				}, 1000);
			}, 5000);
			return;
		}
		setTimeout(type, 100);
	}

	type();

	const isMobile = /Mobi|Android/i.test(navigator.userAgent);

	if (!isMobile) {
		let lastClickTime = 0;

		document.body.addEventListener('click', function (event) {
			const currentTime = new Date().getTime();
			if (currentTime - lastClickTime < 1000) {
				return;
			}
			lastClickTime = currentTime;

			const hammerSmashGif = document.createElement('img');
			hammerSmashGif.src = 'assets/hammer-smash.gif';
			hammerSmashGif.style.position = 'absolute';
			hammerSmashGif.style.left = `${event.pageX}px`;
			hammerSmashGif.style.top = `${event.pageY}px`;
			hammerSmashGif.style.width = '32px';
			hammerSmashGif.style.height = '32px';
			document.body.appendChild(hammerSmashGif);

			setTimeout(() => {
				hammerSmashGif.remove();
			}, 1000);
		});
	}

	const Projects = [
		{
			title: 'Alien Webshop',
			description:
				'Alien-themed webshop, complete with a cart system and admin view! This project was brought to life by a dedicated team of three as part of a school assignment.',
			tools: 'fa-html5 fa-css3-alt fa-database fa-js',
			gitLink: 'https://github.com/robinristo78/web-shop',
			previewImage: 'assets/webshop-preview.webp',
		},

		{
			title: 'GetScambo',
			description:
				'An game where player should learn to recognize scam emails. The game was created as a part of a school project.',
			tools: 'fa-html5 fa-css3-alt fa-database fa-react',
			gitLink: 'https://github.com/Mart556/getscambo',
			previewImage: 'assets/getscambo-preview.webp',
		},

		{
			title: 'VotingSys',
			description:
				'Simple web app what demostrate how voting system works. The app was created as a part of a school project.',
			tools: 'fa-html5 fa-css3-alt fa-database fa-react',
			gitLink: 'https://github.com/Mart556/votingsys',
			previewImage: 'assets/votingsys-preview.webp',
		},

		{
			title: 'To-Do App',
			description:
				'A simple To-Do app with a clean and minimalistic design. The app allows you to add, delete and filter tasks.',
			tools: 'fa-html5 fa-css3-alt fa-vuejs',
			gitLink: 'https://github.com/Mart556/lopuprojekt_v1',
			previewImage: 'assets/todo-preview.webp',
		},

		{
			title: 'Weather App',
			description:
				'App that allows user to search for any Estonian city and view its current weather. The app utilizes the OpenWeather API for retrieving weather data.',
			tools: 'fa-html5 fa-css3-alt fa-js',
			gitLink: 'https://github.com/Mart556/weather_express',
			previewImage: 'assets/weather-app-preview.webp',
		},
	];

	function showPreview(previewImage, title) {
		const previewModal = document.getElementById('previewModal');
		const modalImage = document.getElementById('modalImage');

		const previewModalHeader = document.getElementById('modalHeader');
		previewModalHeader.innerHTML = 'Preview of ' + title;

		modalImage.src = previewImage;
		previewModal.style.display = 'block';

		previewModal.addEventListener('click', function () {
			previewModal.style.display = 'none';
		});
	}

	let projectIndex = -1;

	function createProject(project) {
		projectIndex++;

		const projectElement = document.createElement('div');
		projectElement.classList.add('col-md-4', 'col-12', 'py-2');

		let projectTools = ``;

		project.tools.split(' ').forEach((tool) => {
			const toolClass = tool === 'fa-database' ? 'fa-solid' : 'fa-brands';
			projectTools += `<div class="d-flex align-items-center me-3">
            <i class="${toolClass} ${tool} fs-4"></i>
            </div>`;
		});

		let randomFolderState = '-open';
		/* 
        if (Math.random() > 0.4) {
            randomFolderState = "-closed";
        } */

		projectElement.innerHTML = `<div class="p-3 rounded m-2 project-box">	
            <div>
            <div class="row mb-3">
            <div class="col-md-3 col-3">
            <i class="fa-regular fa-folder${randomFolderState} fs-2"></i>
            </div>

            <div class="col-md-6 col-6 text-center">
            <h5 class="m-0 fs-4 project-box-title">${project.title}</h5>
            </div>

            <div class="col-md-3 col-3 text-end">
            <a
                title="Github"
                href="${project.gitLink}"
                target="_blank"
                class="side-link"
                >
                <i
                class="fa-brands fa-github"
                style="font-size: 30px"
                >
                </i>
            </a>
            </div>
            </div>

            <div class="w-100">
            <hr />
            </div>

            <div class="row mb-3">
            <div class="col-12 col-md-12">
            <p class="project-description fs-6 m-0">
            ${project.description}
            </p>
            </div>
            </div>
            </div>

            <div class="row mt-auto align-items-center">
            <div class="col-6 col-md-6">
                <div class="d-flex flex-row project-tools">
                ${projectTools}
                </div>
            </div>

            <div class="col-6 col-md-6 d-flex justify-content-end">
                <button id="previewButton-${projectIndex}" target="_blank" class="btn-preview" ${
			!project.previewImage ? 'disabled' : ''
		}><span>Preview</span></button>
            </div>
            </div>
        </div>`;

		const previewButton = projectElement.querySelector(
			`#previewButton-${projectIndex}`
		);

		previewButton.addEventListener('click', function () {
			showPreview(project.previewImage, project.title);
		});

		return projectElement;
	}

	const showMoreBtn = document.getElementById('showMore');
	const projectsContainer = document.querySelector('.projects-container');

	// Hide the button by default
	if (showMoreBtn) {
		showMoreBtn.style.display = 'none';
	}

	function loadProjects(projects) {
		projects.forEach((project, index) => {
			setTimeout(() => {
				let projectElement = createProject(project);
				projectsContainer.appendChild(projectElement);

				// Only show the button after loading if there are more than 6 projects total
				if (index === projects.length - 1 && Projects.length > 6) {
					setTimeout(() => {
						showMoreBtn.style.display = 'inline-block';
						showMoreBtn.classList.add(
							'animate__animated',
							'animate__fadeIn'
						);
					}, 300);
				}
			}, index * 300);
		});
	}

	if (Projects.length > 6) {
		let displayedProjects = 6;

		projectsContainer.style.minHeight = `${
			Math.ceil(displayedProjects / 3) * 260
		}px`;

		showMoreBtn.addEventListener('click', function () {
			const additionalProjects = Projects.slice(displayedProjects);
			loadProjects(additionalProjects);
			showMoreBtn.style.display = 'none';
		});
	} else {
		// If there are 6 or fewer projects, make sure the button is hidden
		if (showMoreBtn) {
			showMoreBtn.style.display = 'none';
		}
	}
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					loadProjects(Projects.slice(0, 6));
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.8 }
	);

	observer.observe(projectsContainer);

	const projectBox = document.querySelectorAll('.project-box');

	projectBox.forEach((box) => {
		box.addEventListener('mouseenter', function () {
			box.classList.add('animate__animated', 'animate__pulse');
		});

		box.addEventListener('mouseleave', function () {
			box.classList.remove('animate__pulse');
		});
	});
});
