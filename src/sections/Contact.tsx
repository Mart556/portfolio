import { FaGithub, FaDev, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<div
			id='contact'
			className='h-full py-20 mx-10 flex flex-col text-textLight dark:text-textDark'
		>
			<h2 className='text-4xl font-semibold mb-12'>Get in Touch</h2>
			<p className='text-lg mb-6'>
				I'm always open to discussing new projects, creative ideas, or
				opportunities to be part of your visions. Feel free to reach out to me
				through any of the platforms below or send me an email directly.
			</p>
			<div className='space-y-6'>
				<a
					href='mailto:mart.haamer@voco.ee'
					className='text-accentDark dark:text-accentDark hover:text-textLight dark:hover:text-textDark transition-colors duration-200'
				>
					Email:
					<span className='ml-2 underline'>mart.haamer@voco.ee</span>
				</a>

				<div className='pt-6 md:hidden'>
					<h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
					<div className='flex gap-4'>
						<a
							href='https://github.com/Mart556'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-accentDark dark:text-accentDark text-2xl transition-all duration-300 bg-accentDark/10 dark:bg-accentDark/10 border-2 border-transparent hover:text-textLight dark:hover:text-textDark hover:bg-accentDark/20 dark:hover:bg-accentDark/20 hover:border-accentDark dark:hover:border-accentDark hover:-translate-y-1'
							title='GitHub'
						>
							<FaGithub />
						</a>
						<a
							href='https://dev.to'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-accentDark dark:text-accentDark text-2xl transition-all duration-300 bg-accentDark/10 dark:bg-accentDark/10 border-2 border-transparent hover:text-textLight dark:hover:text-textDark hover:bg-accentDark/20 dark:hover:bg-accentDark/20 hover:border-accentDark dark:hover:border-accentDark hover:-translate-y-1'
							title='Dev.to'
						>
							<FaDev />
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-accentDark dark:text-accentDark text-2xl transition-all duration-300 bg-accentDark/10 dark:bg-accentDark/10 border-2 border-transparent hover:text-textLight dark:hover:text-textDark hover:bg-accentDark/20 dark:hover:bg-accentDark/20 hover:border-accentDark dark:hover:border-accentDark hover:-translate-y-1'
							title='LinkedIn'
						>
							<FaLinkedin />
						</a>
					</div>
				</div>

				<div className='md:hidden'>
					<h3 className='text-xl font-semibold mb-4'>My CV</h3>
					<a
						href='./mart_haamer_cv.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center justify-center w-12 h-12 rounded-lg text-accentDark dark:text-accentDark text-2xl transition-all duration-300 bg-accentDark/10 dark:bg-accentDark/10 border-2 border-transparent hover:text-textLight dark:hover:text-textDark hover:bg-accentDark/20 dark:hover:bg-accentDark/20 hover:border-accentDark dark:hover:border-accentDark hover:-translate-y-1'
						title='CV'
					>
						<FaFileAlt />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
