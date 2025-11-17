import Nav from "../components/Nav.tsx";
import SideBars from "../components/SideBars.tsx";

import ProjectsList from "../data/projects.json";
import type { DataType } from "../types/projects.ts";
import { FaGithub, FaStar } from "react-icons/fa6";

const ArchiveList = () => {
	return (
		<div className='min-h-screen max-h-screen pt-25 md:mx-10 flex flex-col items-center overflow-hidden'>
			<h1 className='text-5xl font-bold mb-4 text-theme-primary'>
				All Projects
			</h1>
			<p className='text-theme-secondary mb-12 text-lg'>
				A collection of my work and side projects
			</p>

			<div className='w-full md:max-w-7xl p-2 '>
				<ul className='space-y-3 overflow-y-auto max-h-[70vh] md:pr-3'>
					{ProjectsList.map((project: DataType, index: number) => (
						<li
							key={index}
							className='group bg-theme-secondary flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-5 border-theme border rounded-lg  transition-all duration-300 backdrop-blur-sm'
						>
							<div className='flex-1 min-w-0'>
								<h2 className='text-xl sm:text-2xl font-semibold text-theme-primary  truncate  flex items-center gap-3'>
									{project.title}{" "}
									{project.featured && <FaStar className=' text-yellow-400' />}
								</h2>
								<p className='text-sm sm:text-base text-theme-secondary line-clamp-2 mt-1'>
									{project.description}
								</p>
							</div>{" "}
							{project.gitLink && (
								<a
									href={project.gitLink}
									target='_blank'
									rel='noopener noreferrer'
									className='flex justify-end items-center gap-2 px-4 py-2 text-sm  font-medium  text-theme-primary md:border-theme md:border-2 md:rounded-md hover:scale-105 transition-all whitespace-nowrap'
								>
									<FaGithub />
									GitHub
								</a>
							)}
						</li>
					))}
				</ul>

				{ProjectsList.length === 0 && (
					<div className='text-center py-12'>
						<p className='text-theme-secondary text-lg'>No projects found</p>
					</div>
				)}
			</div>
		</div>
	);
};

const ArchivePage = () => {
	return (
		<>
			<Nav />
			<SideBars />

			<ArchiveList />
		</>
	);
};

export default ArchivePage;
