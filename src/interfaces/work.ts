export default interface IWork {
	title: string;
	img: string;
	alt: string;
	description: string[];
	tech: string;
	features: string[];
	css: { //to override default css (used for Deck Cover)
		// backgroundImage: string,  
		// color: string, 
		// listStyle: string,
		width: string;
		height: string;
		position: string | undefined,
	};
}
