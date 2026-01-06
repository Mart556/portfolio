import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import ThemeToggle from "./ThemeToggle";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	const navItems = [
		{ label: "Home", route: "/" },
		{ label: "About", route: "/" },
		{ label: "Projects", route: "/" },
		{ label: "Contact", route: "/" },
		{ label: "Archive", route: "/archive" },
	];

	const scrollToSection = (section: string, route: string) => () => {
		const sectionId = section.toLowerCase();
		let element = document.getElementById(sectionId);

		if (route !== window.location.pathname) {
			navigate({ to: route });

			setTimeout(() => {
				element = document.getElementById(sectionId);

				if (element) {
					element.scrollIntoView({ behavior: "instant" });
					setIsMenuOpen(false);
				}
			}, 50);
			return;
		}

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return isMenuOpen ? (
		<div className='mobile-menu fixed inset-0 flex flex-col justify-center items-center z-50 md:hidden backdrop-blur-lg '>
			<button
				onClick={handleToggleMenu}
				className='absolute top-6 right-6 text-4xl text-theme-primary active:animate-spin'
			>
				<FaTimes />
			</button>
			<ul className='space-y-10 p-6 text-theme-primary'>
				{navItems.map((item) => (
					<li key={item.label} className='flex justify-center'>
						<button
							onClick={scrollToSection(item.label, item.route)}
							className='nav-link w-full text-center text-4xl font-bold px-4 py-3 rounded-lg transition text-shadow-md'
						>
							{item.label}
						</button>
					</li>
				))}
				<li className='flex justify-center'>
					<ThemeToggle />
				</li>
			</ul>
		</div>
	) : (
		<nav className='p-4 flex flex-row justify-between items-center z-50 fixed w-full dark:bg-white/5 bg-black/5 backdrop-blur-md border-b border-cyan-400/10  dark:border-cyan-400/10 bg-opacity-90 dark:bg-opacity-5'>
			<div className='flex flex-end'>
				<img src='./logo.svg' alt='Logo' className='h-10' />
			</div>

			<ul className='space-x-8 justify-end hidden md:flex items-center'>
				{navItems.map((item) => (
					<li key={item.label}>
						<button
							onClick={scrollToSection(item.label, item.route)}
							className='nav-link'
						>
							{item.label}
						</button>
					</li>
				))}
				<li className='flex items-center underline-offset-0'>
					<ThemeToggle />
				</li>
			</ul>

			<div className='md:hidden flex flex-col items-center'>
				<button onClick={handleToggleMenu} className='nav-link'>
					<FaBars className='text-3xl' />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
