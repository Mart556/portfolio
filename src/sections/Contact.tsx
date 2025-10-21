const Contact = () => {
	return (
		<div id='contact' className='h-full py-20 flex flex-col text-white'>
			<h2 className='text-4xl font-semibold mb-12'>Get in Touch</h2>
			<p className='text-lg mb-6'>
				I'm always open to discussing new projects, creative ideas, or
				opportunities to be part of your visions. Feel free to reach out to me
				through any of the platforms below or send me an email directly.
			</p>
			<div className='space-y-4'>
				<a
					href='mailto:mart.haamer@voco.ee'
					className='text-cyan-400 hover:text-cyan-300 transition-colors duration-200'
				>
					Email:
					<span className='ml-2 underline'>mart.haamer@voco.ee</span>
				</a>
			</div>
		</div>
	);
};

export default Contact;
