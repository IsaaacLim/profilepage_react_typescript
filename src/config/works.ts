import IWork from "../interfaces/work"
import IMG from "../../public/logo192.png";
import IMG2 from "../images/pear-dessert.jpg";


const cards: IWork[] = [
	{
		img: IMG2,
		// img: "",
		title: "So_long",
		description: [
			"A small 2D game consisting of textures and sprites.",
			"Game objective is to collect all collectibles, avoid enemies and reach the exit."
		],
		tech: "C, MiniLibX(tiny graphics library)",
		features: [
			"Window management, event handling, colors, textures.",
			"Rendering map inputs containing walls, collectibles, map exit, and player's starting position elements.",
			"Randomized enemy patrol.",
		],
	},
	// {
	// 	// img :"https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC_400x400.jpg",
	// 	img: "",
	// 	title: "Title",
	// 	description: [],
	// 	tech: "",
	// 	features: [],
	// },
	// {
	// 	img : "https://github.com/IsaaacLim/profilepage_react_typescript/blob/main/src/images/greens.png?raw=true",
	// },
]

export default cards;
