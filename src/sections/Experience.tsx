import { motion } from "framer-motion";
import { useMemo } from "react";
import Experiences from "../data/experiences.json" with { type: "json" };

interface WorkExperience {
	company: string;
	role: string;
	description: string;
	internship: boolean;
	location: string;
	skills: string[];
	startDate: string;
	endDate?: string;
	webLink?: string;
}

const Experience = () => {
	const experienceData = Experiences as WorkExperience[];

	const sortedExperienceData = useMemo(() => {
		const sorted = experienceData.sort((a, b) => {
			const dateA = new Date(a.endDate || new Date().toISOString());
			const dateB = new Date(b.endDate || new Date().toISOString());
			return dateB.getTime() - dateA.getTime();
		});
		return sorted;
	}, []);

	return (
		<div
			id="experience"
			className="h-full py-12 md:py-20 flex flex-col items-center text-theme-primary px-4 xl:px-6"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 0.5 }}
				className="flex items-center text-4xl font-semibold mb-12 text-textLight dark:text-textDark gap-3 w-full max-w-4xl"
			>
				Experience
			</motion.div>

			<div className="w-full max-w-4xl flex flex-col space-y-10">
				{sortedExperienceData.map((exp, index) => (
					<motion.div
						key={`${exp.company}-${exp.role}`}
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.5, delay: index * 0.15 }}
						className="relative pl-6 sm:pl-8 border-l-2 border-accentDark/30 dark:border-cyan-800 space-y-3"
					>
						<div
							className={`absolute -left-2.25 w-4 h-4 rounded-full bg-accentDark dark:bg-cyan-500 border-4 border-white dark:border-[#0f172a]`}
							style={{ top: `${index * 5 + 1}%` }}
						/>

						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-accentLight dark:text-textDark/80">
							<div className="font-semibold text-sm md:text-base">
								{exp.startDate} - {exp.endDate || "Present"}
							</div>
							<div className="text-sm italic">{exp.location}</div>
						</div>

						<div className="flex flex-col">
							<h3 className="text-xl md:text-2xl font-bold text-textLight dark:text-textDark flex items-center flex-wrap gap-2">
								{exp.role}
								{exp.internship && (
									<span className="text-xs md:text-sm font-normal text-accentDark dark:text-cyan-400 bg-accentDark/10 dark:bg-cyan-900/30 px-2 py-0.5 rounded-full">
										Internship
									</span>
								)}
							</h3>
							{exp.webLink ? (
								<a
									href={exp.webLink}
									target="_blank"
									rel="noreferrer"
									className="text-lg md:text-xl font-medium text-accentLight dark:text-textDark/90 hover:underline decoration-accentDark dark:decoration-cyan-400 max-w-max mt-1"
								>
									{exp.company}
								</a>
							) : (
								<span className="text-lg md:text-xl font-medium text-accentLight dark:text-textDark/90 mt-1">
									{exp.company}
								</span>
							)}
						</div>

						<p className="text-base md:text-lg text-textLight dark:text-textDark">
							{exp.description}
						</p>

						<div className="flex flex-wrap gap-2 pt-2">
							{exp.skills.map((skill) => (
								<span
									key={skill}
									className="text-xs md:text-sm px-3 py-1 rounded bg-black/5 dark:bg-white/5 border border-accentDark/20 dark:border-cyan-800 text-textLight dark:text-textDark shadow-sm hover:shadow-md transition-shadow"
								>
									{skill}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Experience;
