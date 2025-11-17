import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

interface ThemeContextType {
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setIsDark(savedTheme === "dark");
		} else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDark(prefersDark);
		}
	}, []);

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		localStorage.setItem("theme", isDark ? "dark" : "light");
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
