import { FaGithub, FaDev, FaLinkedin } from "react-icons/fa";

const SideBars = () => {
	return (
		<div className='fixed inset-0 justify-between pointer-events-none z-10 hidden md:flex'>
			<div className='fixed left-0 bottom-0 h-full w-20 flex flex-col items-center justify-end pt-10 pointer-events-auto '>
				<div className='flex flex-col items-center gap-5'>
					<a
						href='https://github.com/Mart556'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center justify-center w-12 h-12 rounded-lg dark:text-cyan-400 text-2xl transition-all duration-300 bg-cyan-800/20 dark:bg-cyan-400/10  border-2 border-transparent dark:hover:text-white dark:hover:bg-cyan-400/20 dark:hover:border-cyan-400 hover:-translate-y-1'
						title='GitHub'
					>
						<FaGithub />
					</a>
					<a
						href='https://dev.to'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center justify-center w-12 h-12 rounded-lg dark:text-cyan-400 text-2xl transition-all duration-300 bg-cyan-800/20 dark:bg-cyan-400/10 border-2 border-transparent dark:hover:text-white dark:hover:bg-cyan-400/20 dark:hover:border-cyan-400 hover:-translate-y-1'
						title='Dev.to'
					>
						<FaDev />
					</a>
					<a
						href='https://linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center justify-center w-12 h-12 rounded-lg dark:text-cyan-400 text-2xl transition-all duration-300 bg-cyan-800/20 dark:bg-cyan-400/10 border-2 border-transparent dark:hover:text-white dark:hover:bg-cyan-400/20 dark:hover:border-cyan-400 hover:-translate-y-1'
						title='LinkedIn'
					>
						<FaLinkedin />
					</a>
					<div className='w-0.5 h-24 bg-linear-to-b dark:from-cyan-400 from-cyan-800 to-transparent mt-5'></div>
				</div>
			</div>

			<div className='fixed right-0 top-0 h-full w-20 flex flex-col items-center justify-end pt-10 pr-4 pointer-events-auto '>
				<div className='flex flex-col items-center gap-5'>
					<a
						href='./mart_haamer_cv.pdf'
						download
						className='flex items-center justify-center dark:text-cyan-400 text-sm font-semibold tracking-widest transition-all duration-300 px-2.5 py-1.5 rounded-lg border-2 border-transparent dark:hover:text-white hover:text-priamaryDark dark:hover:border-cyan-400 hover:border-cyan-800  hover:bg-cyan-400/10 -rotate-180 origin-center'
						title='Download CV'
					>
						<span
							className='inline-block rotate-180'
							style={{ writingMode: "vertical-rl" }}
						>
							Link to the CV
						</span>
					</a>
					<div className='w-0.5 h-24 bg-linear-to-b dark:from-cyan-400 from-cyan-800 to-transparent'></div>
				</div>
			</div>
		</div>
	);
};

export default SideBars;
