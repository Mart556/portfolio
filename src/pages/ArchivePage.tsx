import { FaGithub, FaStar } from "react-icons/fa";
import Nav from "../components/Nav";
import SideBars from "../components/SideBars";
import ProjectsList from "../data/projects.json";
import type { DataType } from "../types/projects.ts";

const ArchiveList = () => {
	return (
		<div className="min-h-screen max-h-screen pt-25 md:mx-10 flex flex-col items-center ">
			<div className="flex flex-col items-center gap-2 justify-center">
				<h1 className="text-5xl font-bold mb-4 text-theme-primary">
					All My Projects
				</h1>
				<p className="text-theme-secondary mb-12 text-lg">
					A collection of my work and side projects
				</p>
			</div>

			<div className="w-full md:max-w-7xl p-2 ">
				<ul className="space-y-3">
					{ProjectsList.sort((a, b) =>
						a.featured === b.featured ? 0 : a.featured ? -1 : 1,
					).map((project: DataType) => (
						<li
							key={project.title}
							className="group bg-theme-secondary flex flex-col mx-5 sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-5 sm:py-4 border-theme border rounded-lg  transition-all duration-300 backdrop-blur-sm"
						>
							<div className="flex-1 min-w-0">
								<div className="flex justify-between items-center">
									<h2 className="text-xl sm:text-2xl font-semibold text-theme-primary  truncate flex items-center gap-3">
										{project.featured && (
											<FaStar className=" text-yellow-400" />
										)}
										{project.title}
									</h2>
									{project.gitLink && (
										<a
											href={project.gitLink}
											target="_blank"
											rel="noopener noreferrer"
											className="flex justify-end items-center gap-2 text-xl font-medium  text-theme-primary whitespace-nowrap"
										>
											<FaGithub className="h-6 w-6" />
										</a>
									)}
								</div>

								<p className="text-sm sm:text-base text-theme-secondary line-clamp-2 mt-1">
									{project.description}
								</p>
							</div>
						</li>
					))}
				</ul>
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
