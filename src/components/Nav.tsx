const Nav = () => {
	const navItems = ["Home", "About", "Projects", "Contact"];

	const scrollToSection = (section: string) => () => {
		const sectionId = section.toLowerCase();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className='p-6 text-white flex flex-row justify-between items-center z-9999 fixed w-full bg-white/1 backdrop-blur-md'>
			<div className='flex flex-end'>
				<img src='./logo.svg' alt='Logo' className='h-10' />
			</div>

			<ul className='flex space-x-6 justify-end'>
				{navItems.map((item) => (
					<li
						onClick={scrollToSection(item)}
						key={item}
						className='hover:underline  cursor-pointer hover:transition-all text-xl'
					>
						{item}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
