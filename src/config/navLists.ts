import INav from "../interfaces/navList";

/**
 * To create NavBar
 * Also imported by `routes`
 */
const navLists: INav[] = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: 'works',
		name: "Works",
	},
	{
		path: "/test",
		name: "Test",
	},
]

export default navLists;
