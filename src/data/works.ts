import IWork from "../interfaces/work";
import Born2bRoot from "../images/born2broot.png";
import Logo from "../images/koala.png";
import Minishell from "../images/minishell.png";
import SelectedWorks from "../images/selected_work.svg";
import SoLong from "../images/so_long.png";
import WIP from "../images/work-in-progress.png";
import LoopOS from "../images/LoopOS.png";

const works: IWork[] = [
  {
    title: "",
    img: SelectedWorks,
    alt: "",
    description: [""],
    tech: "",
    features: [""],
  },
  {
    title: "LoopOS",
    img: LoopOS,
    alt: "Snapshot of a cloud kitchen platform",
    description: [
      "An online platform for ordering from multiple restaurant brands in a single order.",
    ],
    tech: "Typescript, NextJS, NestJS, tRPC, Prisma, PostgreSQL",
    features: [
      "User account management",
      "Order history",
      "Immediate order, pre-order, reorder",
      "Multi brands",
      "Delivery service",
      "Preference filtering",
      "Payment gateways",
      "Promotions",
    ],
  },
  {
    title: "Minishell",
    img: Minishell,
    alt: "Snapshot of shell created",
    description: ["Recreate a (mini)shell"],
    tech: "C, Shell(bash/zsh)",
    features: [
      "Parsing & expanding inputs.",
      "Implement selected built-in functions.",
      "Execute commands, including piping and redirection.",
      "Signal handling.",
    ],
  },
  {
    title: "So_long",
    img: SoLong,
    alt: "Snapshot of game created",
    description: [
      "A small 2D game consisting of textures and sprites.",
      "Game objective is to collect all collectibles, avoid enemies and reach the exit.",
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
    img: Born2bRoot,
    alt: "Snapshot of virtual machine created",
    description: [
      "Set up a virtual machine that functions as a remote server.",
      "Use the server to host a WordPress service.",
    ],
    tech: "Virtual machine, Debian, Bash, SSH, WordPress, lighttpd, MariaDB, PHP",
    features: [
      "Set up using the Command Line Interface(CLI) only.",
      "System administration; Password policies and sudo group configurations.",
      "Logical Volume Management(LVM).",
      "SSH service through specified port(s).",
      "Firewall.",
      "Bash script to announce specified information to all logged-in users at designated time(s).",
    ],
  },
  {
    title: "ft_containers",
    img: WIP,
    alt: "Project currently in progress",
    description: ["Re-implementation of selected C++ containers."],
    tech: "C++",
    features: [
      "Recreate the `vector`, `map`, `stack`, and `set` that is comparable to C++ Standard Template Library(STL).",
      "Implement additional functions, such as, `iterator_traits`, `enable_if`, `is_integral`, `std::make_pair`, etc..",
    ],
  },
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
      "Docker volumes.",
      "System administration.",
      "Networking.",
    ],
  },
  {
    title: "This.",
    img: Logo,
    alt: "Snapshot of this website",
    description: ["This web portfolio that you've been experiencing ✌️"],
    tech: "React, Typescript, SASS, CSS, HTML",
    features: [
      "Written in Typescript.",
      "Built with React.",
      "Styled using SASS.",
      "Animated with React-Spring.",
      "Deployed through Netlify.",
    ],
  },
];

export default works;
