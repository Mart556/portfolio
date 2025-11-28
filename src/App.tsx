import {
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";

import MainPage from "./pages/MainPage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import { useEffect } from "react";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: () => <MainPage />,
});

const archiveRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/archive",
	component: () => <ArchivePage />,
});

const routeTree = rootRoute.addChildren([indexRoute, archiveRoute]);
const router = createRouter({ routeTree });

export default function App() {
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const spotlight = document.getElementById("spotlight");
			if (spotlight) {
				spotlight.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 60%)`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			<div
				id='spotlight'
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
					zIndex: -1,
				}}
			/>
			<RouterProvider router={router} />
		</>
	);

	return <RouterProvider router={router} />;
}
