import IWork from "../interfaces/work"
import TMP from "../images/pear-dessert.jpg";


const cards: IWork[] = [
	{
		title: "So_long",
		img: TMP,
		alt: "Snapshot of game created",
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
		title: "Born2beRoot",
		img: "",
		alt: "Snapshot of virtual machine created",
		description: [
			"Setup a virtual machine that functions as a remote server for a WordPress website, with lighttpd, MariaDB and PHP as its services.",
			"Use the Command Line Interface (CLI) only."
		],
		tech: "Virtual machine, Debian, Bash, SSH, WordPress, lighttpd, MariaDB, PHP",
		features: [
			"System administration, password policy and sudo group configuration",
			"Setup server consisting of LVM partitions",
			"SSH service through specified port(s)",
			"Firewall",
			"Bash scripting to announce specified information to all logged-in users at designated time(s)",
		],
	},
	{
		title: "Minishell",
		img: "",
		alt: "Snapshot of shell created",
		description: [
			"Recreate a (mini)shell",
		],
		tech: "C, Shell(bash/zsh)",
		features: [
			"Parsing & expanding inputs",
			"Implement selected built-in functions",
			"Execute commands, including piping and redirection",
			"Signal handling",
		],
	},
	{
		title: "ft_containers",
		img: "",
		alt: "Project currently in progress",
		description: [
			"Re-implementation of selected C++ containers.",
		],
		tech: "C++",
		features: [
			"Recreate the `vector`, `map`, `stack`, and `set` that is comparable to C++ Standard Template Library(STL).",
			"Implement additional functions, such as, `iterator_traits`, `enable_if`, `is_integral`, `std::make_pair`, etc.."
		],
	},
	{
		title: "Inception",
		img: "",
		alt: "Project currently in progress",
		description: [
			"Using Docker, set up a small infrastructure composed of different services under specific rules for a WordPress server.",
			"Build each Docker images from scratch, except for Alpine."
		],
		tech: "Docker, Virtual machine, Alpine Linux, WordPress, NGINX, ",
		features: [
			"System administration by using Docker",
			"Virtualize several Docker images, creating them in a personal virtual machine",
		],
	},
	// {
	// 	img : "https://github.com/IsaaacLim/profilepage_react_typescript/blob/main/src/images/greens.png?raw=true",
	// },
]

export default cards;
