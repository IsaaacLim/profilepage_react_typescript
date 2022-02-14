import IWork from "../interfaces/work"
import TMP from "../images/pear-dessert.jpg";


const cards: IWork[] = [
	{
		img: TMP,
		alt: "Snapshot of game created",
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
	{
		img: "",
		alt: "Snapshot of virtual machine created",
		title: "Born2beRoot",
		description: [
			"Setup a virtual machine that functions as a remote server for a WordPress website, with lighttpd, MariaDB and PHP as its services",
		],
		tech: "Virtual machine, Debian, Bash, SSH",
		features: [
			"System administration, password policy and sudo group configuration",
			"Setup server consisting of LVM partitions",
			"Use only CLI",
			"SSH service through specified port(s)",
			"Firewall",
			"Bash scripting to announce specified information to all logged-in users at designated time(s)",
		],
	},
	{
		img: "",
		alt: "Snapshot of shell created",
		title: "Minishell",
		description: [
			"sample text",
		],
		tech: "C, Shell(bash/zsh)",
		features: [
			"sample text",
		],
	},
	// {
	// 	img : "https://github.com/IsaaacLim/profilepage_react_typescript/blob/main/src/images/greens.png?raw=true",
	// },
]

export default cards;
