import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='nav-link p-2 rounded-lg transition-colors duration-200 hover:bg-white/10 dark:hover:bg-black/20'
			aria-label='Toggle dark mode'
		>
			{isDark ? (
				<BsSunFill className='text-xl text-yellow-400' />
			) : (
				<BsFillMoonStarsFill className='text-xl text-slate-700' />
			)}
		</button>
	);
};

export default ThemeToggle;
