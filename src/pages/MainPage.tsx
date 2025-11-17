import Nav from "../components/Nav.tsx";
import SideBars from "../components/SideBars.tsx";
import Layout from "../components/Layout.tsx";

import Home from "../sections/Home.tsx";
import About from "../sections/About.tsx";
import Projects from "../sections/Projects.tsx";
import Contact from "../sections/Contact.tsx";

const MainPage = () => {
	return (
		<>
			<Nav />
			<SideBars />

			<Layout>
				<Home />
				<About />
				<Projects />
				<Contact />
			</Layout>
		</>
	);
};

export default MainPage;
