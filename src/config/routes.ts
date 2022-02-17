import IRoute from "../interfaces/route";
import navLists from "./navLists";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import WorksPage from "../pages/Works";
import TestPage from "../pages/Test";

/**
 * Used only in App.tsx
 * To configure available routes
 * 
 * Didn't combine `routes` with `navLists` because reusing this variable in Pages
 * 	will cause "circular dependencies"
 */

const home = navLists[0]
const about = navLists[1]
const works = navLists[2]
const test = navLists[3]

const routes: IRoute[] = [
	{
		path: home.path,
		component: HomePage, 
	},
	{
		path: about.path,
		component: AboutPage,
	},
	{
		path: works.path,
		component: WorksPage,
	},
	{
		path: test.path,
		component: TestPage,
	},
]

export default routes;
