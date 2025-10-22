import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext.tsx";
import Nav from "./components/Nav.tsx";
import SideBars from "./components/SideBars.tsx";
import Layout from "./components/Layout.tsx";

import Home from "./sections/Home.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<Nav />
			<SideBars />

			<Layout>
				<Home />
				<About />
				<Projects />
				<Contact />
			</Layout>
		</ThemeProvider>
	</StrictMode>
);
