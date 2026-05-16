import Layout from "../components/Layout";
import Nav from "../components/Nav";
import SideBars from "../components/SideBars";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Home from "../sections/Home";
import Projects from "../sections/Projects";

const MainPage = () => {
	return (
		<>
			<Nav />
			<SideBars />

			<Layout>
				<Home />
				<About />
				<Projects />
				<Experience />
				<Contact />
			</Layout>
		</>
	);
};

export default MainPage;
