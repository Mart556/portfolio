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
		<nav className='p-4 text-white flex flex-row justify-between items-center z-50 fixed w-full bg-white/5 backdrop-blur-md border-b border-cyan-400/10'>
			<div className='flex flex-end'>
				<img src='./logo.svg' alt='Logo' className='h-10' />
			</div>

			<style>{`
				@keyframes underline-expand {
					from {
						width: 0;
						left: 50%;
					}
					to {
						width: 100%;
						left: 0;
					}
				}
				.nav-link {
					position: relative;
					display: inline-block;
					color: #fff;
					font-weight: 700;
					font-size: 1.25rem;
					cursor: pointer;
					transition: color 0.3s ease;
				}
				.nav-link::after {
					content: '';
					position: absolute;
					bottom: -4px;
					left: 50%;
					width: 0;
					height: 2px;
					background-color: #06b6d4;
					transition: all 0.3s ease;
				}
				.nav-link:hover::after {
					animation: underline-expand 0.3s ease forwards;
				}
			`}</style>

			<ul className='flex space-x-8 justify-end'>
				{navItems.map((item) => (
					<li key={item}>
						<button onClick={scrollToSection(item)} className='nav-link'>
							{item}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
