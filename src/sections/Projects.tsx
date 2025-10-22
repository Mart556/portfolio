import { useState, useEffect, useRef } from "react";
import {
	FaGithub,
	FaLink,
	FaReact,
	FaNode,
	FaHtml5,
	FaCss3Alt,
	FaDatabase,
	FaJs,
	FaVuejs,
} from "react-icons/fa";

type DataType = {
	title: string;
	description: string;
	tools: string[];
	gitLink: string;
	previewImage: string;
	previewLink?: string;
};

const Data: DataType[] = [
	{
		title: "VOCO SIM",
		description:
			"The game was created by a team of five during a school hackathon for the school's Open Doors Day.",
		tools: ["react", "node"],
		gitLink: "https://github.com/ilmarIV/VOCO_SIM",
		previewImage: "/vocosim-preview.png",
		previewLink: "http://37.27.45.218:3420/",
	},

	{
		title: "GetScambo",
		description:
			"An game where player should learn to recognize scam emails. The game was created as a part of a school project.",
		tools: ["node", "database", "react"],
		gitLink: "https://github.com/Mart556/getscambo",
		previewImage: "/getscambo-preview.webp",
		previewLink: "http://37.27.45.218:81",
	},

	{
		title: "VotingSys",
		description:
			"Simple web app what demostrate how voting system works. The app was created as a part of a school project.",
		tools: ["node", "database", "react"],
		gitLink: "https://github.com/Mart556/votingsys",
		previewImage: "/votingsys-preview.png",
		previewLink: "http://37.27.45.218:3001",
	},

	/* 	{
		title: "To-Do App",
		description:
			"A simple To-Do app with a clean and minimalistic design. The app allows you to add, delete and filter tasks.",
		tools: ["html5", "css3", "vuejs"],
		gitLink: "https://github.com/Mart556/lopuprojekt_v1",
		previewImage: "/todo-preview.webp",
	},

	{
		title: "Weather App",
		description:
			"App that allows user to search for any Estonian city and view its current weather. The app utilizes the OpenWeather API for retrieving weather data.",
		tools: ["html5", "css3", "js"],
		gitLink: "https://github.com/Mart556/weather_express",
		previewImage: "/weather-app-preview.webp",
	}, */
];

// Map tool names to React Icons components
const getToolIcon = (tool: string) => {
	const toolIconMap: Record<string, React.ReactNode> = {
		react: <FaReact key={tool} className='h-5 w-5' />,
		node: <FaNode key={tool} className='h-5 w-5' />,
		html5: <FaHtml5 key={tool} className='h-5 w-5 ' />,
		css3: <FaCss3Alt key={tool} className='h-5 w-5 ' />,
		database: <FaDatabase key={tool} className='h-5 w-5 ' />,
		js: <FaJs key={tool} className='h-5 w-5 ' />,
		vuejs: <FaVuejs key={tool} className='h-5 w-5 ' />,
	};
	return toolIconMap[tool] || null;
};

const ProjectCard = ({
	project,
	index,
	animatedCards,
}: {
	project: DataType;
	index: number;
	animatedCards: Set<number>;
}) => {
	const [showPreview, setShowPreview] = useState(false);
	const isAnimated = animatedCards.has(index);

	return (
		<div
			style={{
				animation: isAnimated ? `slideInUp 0.4s ease-out forwards` : "none",
				opacity: 0,
			}}
			className='group relative h-96 overflow-hidden rounded-lg bg-accentLight dark:bg-secondaryDark shadow-lg transition-all duration-300 border-2 dark:border-cyan-800 border-primaryDark hover:shadow-2xl'
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
					className='h-full w-full object-cover'
				/>

				<div className='absolute inset-0 bg-black/55' />
			</div>

			<div className='relative z-10 flex h-full flex-col justify-between p-6 hover:text-white transition-colors duration-500'>
				<div>
					<h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
					<p className='text-sm line-clamp-3'>{project.description}</p>

					<div className='mt-4 flex flex-wrap gap-2'>
						{Array.isArray(project.tools) &&
							project.tools.map((tool: string) => (
								<div key={tool} title={tool}>
									{getToolIcon(tool)}
								</div>
							))}
					</div>
				</div>

				<div className='flex items-center justify-between pt-4'>
					<a
						href={project.gitLink}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2  '
					>
						<FaGithub className='h-5 w-5' />
						<span className='text-sm font-semibold'>View Code</span>
					</a>

					{project.previewLink && (
						<a
							href={project.previewLink}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 '
						>
							<FaLink className='h-5 w-5' />
							<span className='text-sm font-semibold'>Live Preview</span>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());
	const [isVisible, setIsVisible] = useState(false);
	const projectsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isVisible) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		const currentRef = projectsRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [isVisible]);

	useEffect(() => {
		if (!isVisible) return;

		const animationDuration = 400;

		Data.forEach((_, index) => {
			setTimeout(() => {
				setAnimatedCards((prev) => new Set([...prev, index]));
			}, index * animationDuration);
		});

		return () => {
			setAnimatedCards(new Set());
		};
	}, [isVisible]);

	return (
		<div
			id='projects'
			className='h-full py-20 mx-10 flex flex-col dark:text-textDark'
		>
			<style>{`
				@keyframes slideInUp {
					from {
						opacity: 0;
						transform: translateY(40px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>

			<h2 className='text-4xl font-semibold mb-12 text-textLight dark:text-textDark'>
				Featured Projects
			</h2>

			<div className='w-full overflow-hidden text-textDark'>
				<div
					ref={projectsRef}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{Data.map((project, index) => (
						<ProjectCard
							key={project.title}
							project={project}
							index={index}
							animatedCards={animatedCards}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
