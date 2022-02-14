import IRoute from "../interfaces/route";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import WorksPage from "../pages/Works";
import TestPage from "../pages/Test"; // temporary

const routes: IRoute[] =[
	{
		path: '/',
		name: "Home",
		component: HomePage,
	},
	{
		path: '/about',
		name: "About",
		component: AboutPage,
	},
	{
		path: '/works',
		name: "Works",
		component: WorksPage,
	},
	{
		path: '/test',
		name: "Test",
		component: TestPage,
	},
]

export default routes;
