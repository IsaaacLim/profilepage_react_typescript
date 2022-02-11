import IRoute from "../interfaces/route";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import Works from "../pages/Works";

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
		component: Works,
	},
]

export default routes;
