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
	FaStar,
} from "react-icons/fa";
import { SiLua } from "react-icons/si";

import ProjectsList from "../data/projects.json";
import type { DataType } from "../types/projects.ts";
import { useNavigate } from "@tanstack/react-router";

const getToolIcon = (tool: string) => {
	const toolIconMap: Record<string, React.ReactNode> = {
		react: <FaReact key={tool} className='h-5 w-5' />,
		node: <FaNode key={tool} className='h-5 w-5' />,
		html5: <FaHtml5 key={tool} className='h-5 w-5 ' />,
		css3: <FaCss3Alt key={tool} className='h-5 w-5 ' />,
		database: <FaDatabase key={tool} className='h-5 w-5 ' />,
		js: <FaJs key={tool} className='h-5 w-5 ' />,
		vuejs: <FaVuejs key={tool} className='h-5 w-5 ' />,
		lua: <SiLua key={tool} className='h-5 w-5 ' />,
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
			className='group bg-theme-secondary relative h-96 overflow-hidden rounded-lg   shadow-lg transition-all duration-300 border-2 dark:border-cyan-800 border-primaryDark hover:shadow-2xl'
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
					{project.gitLink && (
						<a
							href={project.gitLink}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2  '
						>
							<FaGithub className='h-5 w-5' />
							<span className='text-sm font-semibold'>View Code</span>
						</a>
					)}

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
	const [hasAnimated, setHasAnimated] = useState(false);
	const projectsRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (hasAnimated) return;

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
	}, [isVisible, hasAnimated]);

	useEffect(() => {
		if (!isVisible) return;

		const animationDuration = 400;

		ProjectsList.forEach((_, index) => {
			setTimeout(() => {
				setAnimatedCards((prev) => new Set([...prev, index]));
			}, index * animationDuration);
		});

		setTimeout(() => {
			setHasAnimated(true);
		}, ProjectsList.length * animationDuration);

		return () => {
			setAnimatedCards(new Set());
		};
	}, [isVisible]);

	return (
		<div
			id='projects'
			className='h-full py-20 mx-10 flex flex-col text-theme-primary'
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

			<h2 className='text-3xl md:text-4xl font-semibold mb-12 text-theme-primary flex items-center gap-3'>
				<FaStar className=' text-yellow-300' /> Featured Projects
			</h2>

			<div className='w-full overflow-hidden text-theme-primary flex flex-col gap-6'>
				<div
					ref={projectsRef}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
				>
					{ProjectsList.filter((project) => project.featured).map(
						(project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
								animatedCards={animatedCards}
							/>
						)
					)}
				</div>

				<div
					className={`flex justify-center my-2 ${
						hasAnimated ? "opacity-100" : "opacity-0"
					}`}
				>
					<a
						onClick={() => navigate({ to: "/archive" })}
						className='px-6 text-xl py-3 bg-theme-secondary border-2 border-theme text-theme-primary rounded-md hover:border-theme/80 transition-all duration-300 cursor-pointer hover:scale-105'
					>
						View All Projects
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
