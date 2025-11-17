import {
	createRootRoute,
	createRoute,
	createRouter,
	RouterProvider,
} from "@tanstack/react-router";

import MainPage from "./pages/MainPage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";

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
	return <RouterProvider router={router} />;
}
