import { useRef, useState } from "react";
import { FaJava } from "react-icons/fa6";
import {
	SiCss,
	SiHtml5,
	SiJavascript,
	SiLua,
	SiMariadb,
	SiNodedotjs,
	SiReact,
	SiTypescript,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";

const Schools = [
	/* 	{
		year: "2019 - 2022",
		degree: "High School Diploma",
		institution: "Rõngu Keskkool",
	}, */

	{
		year: "2024 - 2026",
		degree: "Full Stack Web Development",
		institution: "Tartu Vocational College",
	},
];

const Skills = [
	{
		name: "JavaScript",
		icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="text-sky-500 w-6 h-6" />,
	},
	{
		name: "Lua",
		icon: <SiLua className="text-sky-500 w-6 h-6" />,
	},
	{ name: "HTML", icon: <SiHtml5 className="text-orange-600 w-6 h-6" /> },
	{ name: "CSS", icon: <SiCss className="text-blue-600 w-6 h-6" /> },
	{ name: "React", icon: <SiReact className="text-cyan-400 w-6 h-6" /> },
	{
		name: "Node.js",
		icon: <SiNodedotjs className="text-green-500 w-6 h-6" />,
	},
	{ name: "MariaDB", icon: <SiMariadb className="text-blue-700 w-6 h-6" /> },
	{ name: "Java", icon: <FaJava className="text-red-500 w-6 h-6" /> },
];

const About = () => {
	const [showEasterEgg, setShowEasterEgg] = useState(false);
	const easterEggClickRef = useRef(0);

	return (
		<div
			id="about"
			className="h-full py-12 md:py-20 flex flex-col xl:flex-row items-center justify-around gap-8 xl:gap-0 text-theme-primary"
		>
			<div className="flex flex-row justify-center items-center">
				{showEasterEgg ? (
					<video
						src="./mart_easter_vid.mp4"
						className="rounded w-80 sm:w-100 xl:w-120"
						autoPlay
						muted
						playsInline
						onEnded={() => {
							setShowEasterEgg(false);
							easterEggClickRef.current = 0;
						}}
					></video>
				) : (
					<Tilt
						tiltReverse={true}
						glareEnable={true}
						glareMaxOpacity={0.3}
					>
						<img
							src="./mart.webp"
							alt="Mart Haamer"
							className="rounded w-80 sm:w-100  xl:w-120 shadow-lg object-contain border-2 border-accentDark/30 dark:border-accentDark/30 cursor-pointer"
							onClick={() => {
								easterEggClickRef.current += 1;
								if (easterEggClickRef.current >= 7) {
									setShowEasterEgg(true);
								}
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									easterEggClickRef.current += 1;
									if (easterEggClickRef.current >= 7) {
										setShowEasterEgg(true);
									}
								}
							}}
						/>
					</Tilt>
				)}
			</div>

			<div className="max-w-3xl px-4 xl:px-6 space-y-6 md:max-w-xl lg:max-w-3xl ">
				<div className="flex items-center text-4xl font-semibold mb-12 text-textLight dark:text-textDark gap-3">
					About Me
				</div>

				<p className="text-base md:text-lg text-textLight dark:text-textDark">
					My path into tech started in 2018 building custom Lua
					scripts for FiveM servers, where I instantly fell in love
					with turning complex logic into playable experiences.
					<br />
					Following high school and my military service, I formalized
					that drive by studying Junior Software Development at Tartu
					Vocational College. Today, I build modern web applications,
					explore new frameworks, and contribute to open-source
					projects. I thrive on solving tricky problems, writing clean
					code, and constantly leveling up my stack.
				</p>

				<h3 className="text-xl md:text-2xl text-accentLight dark:text-textDark font-bold mb-6">
					Education
				</h3>

				<div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
					{Schools.map((school) => (
						<div
							key={school.institution}
							className="space-y-2 flex-1"
						>
							<div className="text-accentLight dark:text-textDark font-semibold text-sm md:text-base">
								{school.year}
							</div>
							<div className="text-base md:text-lg font-medium">
								{school.degree}
							</div>
							<div className="text-accentLight dark:text-textDark text-sm md:text-base">
								{school.institution}
							</div>
						</div>
					))}
				</div>

				<h3 className="text-xl md:text-2xl text-accentLight dark:text-textDark font-bold mb-6">
					Skills
				</h3>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
					{Skills.map((skill) => (
						<div
							key={skill.name}
							className="flex items-center space-x-2 p-2 rounded bg-black/5 dark:bg-white/5 hover:bg-secondaryLight/30 dark:hover:bg-white/10 transition border-2 border-accentDark/20 dark:border-cyan-800"
						>
							{skill.icon}
							<span className="text-sm md:text-lg">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
