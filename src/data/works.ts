import IWork from "../interfaces/work"
import Minishell from "../images/minishell.png";
import SoLong from "../images/so_long.png";

const cards: IWork[] = [
	{
		title: "Inception",
		img: "",
		alt: "Project currently in progress",
		description: [
			"Using Docker, set up a small infrastructure composed of different services under specific rules for a WordPress server.",
		],
		tech: "Docker, Virtual machine, Alpine Linux, WordPress, php-fpm, NGINX, MariaDB",
		features: [
			"Build Docker images from scratch, except for Alpine.",
			"Docker volumes",
			"System administration",
			"Networking",
		],
		css: {
			backgroundImage: "",
			color: "",
			listStyle: "",
		},
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
		css: {
			backgroundImage: "",
			color: "",
			listStyle: "",
		},
	},
	{
		title: "So_long",
		img: SoLong,
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
		css: {
			backgroundImage: "",
			color: "",
			listStyle: "",
		},
	},
	{
		title: "Born2beRoot",
		img: "",
		alt: "Snapshot of virtual machine created",
		description: [
			"Set up a virtual machine that functions as a remote server for a WordPress website, with lighttpd, MariaDB and PHP as its services.",
		],
		tech: "Virtual machine, Debian, Bash, SSH, WordPress, lighttpd, MariaDB, PHP",
		features: [
			"Set up using the Command Line Interface(CLI) only.",
			"System administration; Password policies and sudo group configurations",
			"Logical Volume Management(LVM)",
			"SSH service through specified port(s)",
			"Firewall",
			"Bash script to announce specified information to all logged-in users at designated time(s)",
		],
		css: {
			backgroundImage: "",
			color: "",
			listStyle: "",
		},
	},
	{
		title: "Minishell",
		img: Minishell,
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
		css: {
			backgroundImage: "",
			color: "",
			listStyle: "",
		},
	},
	{
		title: "",
		img: "",
		alt: "",
		description: [""],
		tech: "",
		features: [""],
		css: {
			backgroundImage: "https://github.com/IsaaacLim/profilepage_react_typescript/blob/main/src/images/greens.png?raw=true",
			color: "#fff",
			listStyle: "none",
		},
	},
]

export default cards;
