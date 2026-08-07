import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";

import {
	FaCss3Alt,
	FaDatabase,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLink,
	FaNode,
	FaReact,
	FaStar,
	FaVuejs,
} from "react-icons/fa";
import { SiLua } from "react-icons/si";
import LivePlayerCount from "../components/LivePlayerCount";
import ProjectsList from "../data/projects.json" with { type: "json" };
import type { DataType } from "../types/projects.ts";

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
}: {
	project: DataType;
	index: number;
}) => {
	return (
		<motion.button
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.5, delay: index * 0.15 }}
			className='group bg-theme-secondary relative h-96 overflow-hidden rounded-lg shadow-lg transition-colors duration-300 border-2 dark:border-cyan-800 border-primaryDark text-[#9be3e2] text-left'
			onClick={() => {}}
		>
			<motion.div
				className='absolute inset-0 z-0'
				transition={{ duration: 0.4, ease: "easeOut" }}
			>
				<img
					src={project.previewImage}
					alt={project.title}
					className='h-full w-full object-cover'
				/>
				<div className='absolute inset-0 dark:bg-black/50 bg-black/30 backdrop-blur-xs' />
			</motion.div>

			{project.playersEndpoint && (
				<div className='absolute top-4 right-4 z-10'>
					<LivePlayerCount endpoint={project.playersEndpoint} />
				</div>
			)}

			<div className='relative z-10 flex h-full flex-col justify-between p-6 '>
				<div>
					<div className='flex items-center gap-2 mb-3'>
						{project.logo && (
							<img
								src={project.logo}
								alt=''
								className='h-8 w-8 object-contain'
							/>
						)}
						<h3 className='text-2xl font-bold'>{project.title}</h3>
					</div>
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
							className='flex items-center gap-2 hover:text-accentDark dark:hover:text-cyan-400 transition-colors'
							onClick={(e) => e.stopPropagation()}
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
							className='flex items-center gap-2 hover:text-accentDark dark:hover:text-cyan-400 transition-colors'
							onClick={(e) => e.stopPropagation()}
						>
							<FaLink className='h-5 w-5' />
							<span className='text-sm font-semibold'>Live Preview</span>
						</a>
					)}
				</div>
			</div>
		</motion.button>
	);
};

const Projects = () => {
	const navigate = useNavigate();
	const featuredProjects = ProjectsList.filter((project) => project.featured);

	return (
		<div
			id='projects'
			className='h-full py-20 mx-4 md:mx-10 flex flex-col text-theme-primary'
		>
			<motion.h2
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				className='text-3xl md:text-4xl font-semibold mb-12 text-theme-primary flex items-center gap-3'
			>
				<FaStar className=' text-yellow-300' /> Featured Projects
			</motion.h2>

			<div className='w-full overflow-hidden text-theme-primary flex flex-col gap-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{featuredProjects.map((project, index) => (
						<ProjectCard key={project.title} project={project} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: featuredProjects.length * 0.15 + 0.2,
					}}
					className='flex justify-center mt-6'
				>
					<button
						onClick={() => navigate({ to: "/archive" })}
						className='px-6 text-xl py-3 bg-theme-secondary border-2 border-theme text-theme-primary rounded-md hover:border-theme/80 transition-all duration-300 cursor-pointer hover:scale-105'
					>
						View All Projects
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;
