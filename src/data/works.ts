import IWork from "../interfaces/work"
import Born2bRoot from "../images/born2broot.png";
import Minishell from "../images/minishell.png";
import SelectedWorks from "../images/selected_works.svg";
import SoLong from "../images/so_long.png";
import WIP from "../images/work-in-progress.png";

const cards: IWork[] = [
	{
		title: "Inception",
		img: WIP,
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
	},
	{
		title: "ft_containers",
		img: WIP,
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
		title: "Born2beRoot",
		img: Born2bRoot,
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
	},
	{
		title: "",
		img: SelectedWorks,
		alt: "",
		description: [""],
		tech: "",
		features: [""],

	},
]

export default cards;
