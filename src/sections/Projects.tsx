import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Data = [
	{
		title: "Alien Webshop",
		description:
			"Alien-themed webshop, complete with a cart system and admin view! This project was brought to life by a dedicated team of three as part of a school assignment.",
		tools: "fa-html5 fa-css3-alt fa-database fa-js",
		gitLink: "https://github.com/robinristo78/web-shop",
		previewImage: "/webshop-preview.webp",
	},

	{
		title: "GetScambo",
		description:
			"An game where player should learn to recognize scam emails. The game was created as a part of a school project.",
		tools: "fa-html5 fa-css3-alt fa-database fa-react",
		gitLink: "https://github.com/Mart556/getscambo",
		previewImage: "/getscambo-preview.webp",
	},

	{
		title: "VotingSys",
		description:
			"Simple web app what demostrate how voting system works. The app was created as a part of a school project.",
		tools: "fa-html5 fa-css3-alt fa-database fa-react",
		gitLink: "https://github.com/Mart556/votingsys",
		previewImage: "/votingsys-preview.webp",
	},

	{
		title: "To-Do App",
		description:
			"A simple To-Do app with a clean and minimalistic design. The app allows you to add, delete and filter tasks.",
		tools: "fa-html5 fa-css3-alt fa-vuejs",
		gitLink: "https://github.com/Mart556/lopuprojekt_v1",
		previewImage: "/todo-preview.webp",
	},

	{
		title: "Weather App",
		description:
			"App that allows user to search for any Estonian city and view its current weather. The app utilizes the OpenWeather API for retrieving weather data.",
		tools: "fa-html5 fa-css3-alt fa-js",
		gitLink: "https://github.com/Mart556/weather_express",
		previewImage: "/weather-app-preview.webp",
	},
];

const ProjectCard = ({ project }: { project: (typeof Data)[0] }) => {
	const [showPreview, setShowPreview] = useState(false);

	return (
		<div
			className='group relative h-96 overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300'
			onMouseEnter={() => setShowPreview(true)}
			onMouseLeave={() => setShowPreview(false)}
		>
			<div
				className={`absolute inset-0 transition-all duration-500 ease-out ${
					showPreview
						? "translate-y-0 opacity-100"
						: "-translate-y-full opacity-0"
				}`}
			>
				<img
					src={project.previewImage}
					alt={project.title}
					className='h-full w-full object-contain'
				/>

				<div className='absolute inset-0 bg-black/30' />
			</div>

			<div className='relative z-10 flex h-full flex-col justify-between p-6'>
				<div>
					<h3 className='text-2xl font-bold text-white mb-3'>
						{project.title}
					</h3>
					<p className='text-gray-300 text-sm line-clamp-3'>
						{project.description}
					</p>
				</div>

				<div className='flex items-center justify-between pt-4 border-t border-gray-700'>
					<a
						href={project.gitLink}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200'
					>
						<FaGithub className='h-5 w-5' />
						<span className='text-sm font-semibold'>View Code</span>
					</a>
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div id='projects' className='h-full flex flex-col text-white'>
			<h2 className='text-4xl font-semibold mb-12'>Featured Projects</h2>

			<div className='w-full overflow-hidden'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{Data.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
