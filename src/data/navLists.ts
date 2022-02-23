import INav from "../interfaces/navList";

/**
 * To create NavSlider
 * Also imported by `routes`
 */
const navLists: INav[] = [
	{
		path: "/",
		name: "Home",
		fixedCSS : {
			background: "#9fd095",
			textColor: "#106e08",
			circleColor: "#eaffe6",
		},
		boxShadowBig: "inset 6px 6px 11px #87b17f, inset -6px -6px 11px #b7efab",
		boxShadowSmall: "inset 2px 2px 4px #87b17f, inset -2px -2px 4px #b7efab",
	},
	{
		path: "/about",
		name: "About",
		fixedCSS : {
			background: "#ba9cce",
			textColor: "#6405a3",
			circleColor: "#f8ecff",
		},
		boxShadowBig: "inset 6px 6px 11px #9e85af, inset -6px -6px 11px #d6b3ed",
		boxShadowSmall: "inset 2px 2px 4px #9e85af, inset -2px -2px 4px #d6b3ed",
	},
	{
		path: '/works',
		name: "Works",
		fixedCSS : {
			background: "#85afd5",
			textColor: "#072299",
			circleColor: "#eaf9ff",
		},
		boxShadowBig: "inset 6px 6px 11px #6c8ead, inset -6px -6px 11px #9ed0fd",
		boxShadowSmall: "inset 2px 2px 4px #6c8ead, inset -2px -2px 4px #9ed0fd",
	},
	{
		path: "/test",
		name: "Test",
		fixedCSS : {
			background: "#c1a3a3",
			textColor: "#775252",
			circleColor: "#ffebeb",
		},
		boxShadowBig: "inset 6px 6px 11px #a48b8b, inset -6px -6px 11px #debbbb",
		boxShadowSmall: "inset 2px 2px 4px #a48b8b, inset -2px -2px 4px #debbbb",
	},
]

export default navLists;
