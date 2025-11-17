import { FaGithub, FaDev, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Contact = () => {
	return (
		<div
			id='contact'
			className='h-full py-20 px-10 md:px-20 flex flex-col text-theme-primary'
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
					className='text-theme-primary transition-colors duration-200'
				>
					Email:
					<span className='ml-2 underline'>mart.haamer@voco.ee</span>
				</a>{" "}
				<div className='pt-6 md:hidden'>
					<h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
					<div className='flex gap-4'>
						<a
							href='https://github.com/Mart556'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-theme-primary md:text-theme-secondary text-2xl transition-all duration-300 border-theme border-2 hover:text-theme-primary hover:scale-110'
							title='GitHub'
						>
							<FaGithub />
						</a>
						<a
							href='https://dev.to'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-theme-primary md:text-theme-secondary text-2xl transition-all duration-300 border-theme border-2 hover:text-theme-primary hover:scale-110'
							title='Dev.to'
						>
							<FaDev />
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center w-12 h-12 rounded-lg text-theme-primary md:text-theme-secondary text-2xl transition-all duration-300 border-theme border-2 hover:text-theme-primary hover:scale-110'
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
						className='flex items-center justify-center w-12 h-12 rounded-lg text-theme-primary md:text-theme-secondary text-2xl transition-all duration-300 border-theme border-2 hover:text-theme-primary hover:scale-110'
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
