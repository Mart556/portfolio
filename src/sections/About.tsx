import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiNodedotjs,
	SiMariadb,
} from "react-icons/si";

const Schools = [
	{
		year: "2019 - 2022",
		degree: "High School Diploma",
		institution: "Rõngu Keskkool",
	},

	{
		year: "2023 - Present",
		degree: "Full Stack Web Development",
		institution: "Tartu Vocational College",
	},
];

const Skills = [
	{
		name: "JavaScript",
		icon: <SiJavascript className='text-yellow-400 w-6 h-6' />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className='text-sky-500 w-6 h-6' />,
	},
	{ name: "HTML", icon: <SiHtml5 className='text-orange-600 w-6 h-6' /> },
	{ name: "CSS", icon: <SiCss3 className='text-blue-600 w-6 h-6' /> },
	{ name: "React", icon: <SiReact className='text-cyan-400 w-6 h-6' /> },
	{ name: "Node.js", icon: <SiNodedotjs className='text-green-500 w-6 h-6' /> },
	{ name: "MariaDB", icon: <SiMariadb className='text-blue-700 w-6 h-6' /> },
];

const About = () => {
	return (
		<div
			id='about'
			className='h-full py-12 md:py-20 mx-5 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0 text-textLight dark:text-textDark'
		>
			<div className='max-w-3xl px-4 md:px-6 space-y-6 md:max-w-xl lg:max-w-3xl '>
				<h2 className='text-3xl md:text-4xl font-bold mb-6'>About Me</h2>

				<p className='text-base md:text-lg text-textLight dark:text-textDark'>
					I'm Mart Haamer, a passionate web developer with a knack for creating
					dynamic and responsive web applications. With a strong foundation in
					JavaScript and React, I enjoy bringing ideas to life through code.
					<br />
					My journey into web development started during my studies, where I
					discovered the power of building user-centric applications. Since
					then, I've been honing my skills and staying updated with the latest
					industry trends.
					<br />
					When I'm not coding, I love exploring new technologies, contributing
					to open-source projects, and sharing knowledge with the developer
					community. Let's build something amazing together!
				</p>

				<h3 className='text-xl md:text-2xl text-accentLight dark:text-textDark font-bold mb-6'>
					Education
				</h3>

				<div className='flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0'>
					{Schools.map((school, index) => (
						<div key={index} className='space-y-2 flex-1'>
							<div className='text-accentLight dark:text-textDark font-semibold text-sm md:text-base'>
								{school.year}
							</div>
							<div className='text-base md:text-lg font-medium'>
								{school.degree}
							</div>
							<div className='text-accentLight dark:text-textDark text-sm md:text-base'>
								{school.institution}
							</div>
						</div>
					))}
				</div>

				<h3 className='text-xl md:text-2xl text-accentLight dark:text-textDark font-bold mb-6'>
					Skills
				</h3>

				<div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4'>
					{Skills.map((skill, index) => (
						<div
							key={index}
							className='flex items-center space-x-2 p-2 rounded bg-black/5 dark:bg-white/5 hover:bg-secondaryLight/30 dark:hover:bg-white/10 transition border-2 border-accentDark/20 dark:border-cyan-800'
						>
							{skill.icon}
							<span className='text-sm md:text-lg'>{skill.name}</span>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-row justify-center items-center'>
				<img
					src='./mart.webp'
					alt='Mart Haamer'
					className='rounded w-80 md:w-120 shadow-lg object-contain border-2 border-accentDark/30 dark:border-accentDark/30'
				/>
			</div>
		</div>
	);
};

export default About;
