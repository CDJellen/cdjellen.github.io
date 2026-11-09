export type IconId =
	| 'arduino'
	| 'docker'
	| 'git'
	| 'github'
	| 'go'
	| 'google'
	| 'linkedin'
	| 'matlab'
	| 'numpy'
	| 'pandas'
	| 'pytest'
	| 'python'
	| 'pythonPlain'
	| 'pytorch'
	| 'r'
	| 'svelte';

export interface IconAsset {
	readonly src: string;
	readonly alt: string;
}

export interface NavItem {
	readonly label: string;
	readonly href: `#${string}`;
}

export interface ActionLink {
	readonly label: string;
	readonly href: string;
	readonly icon?: IconAsset;
}

export interface SiteMetadata {
	readonly name: string;
	readonly headline: string;
	readonly pageTitle: string;
	readonly description: string;
	readonly githubUrl: string;
	readonly linkedinUrl: string;
	readonly svelteKitUrl: string;
	readonly navItems: readonly NavItem[];
	readonly socialLinks: readonly ActionLink[];
}

export interface ExperienceItem {
	readonly id: string;
	readonly name: string;
	readonly description: string;
	readonly descriptionLong: string;
	readonly notes: readonly string[];
	readonly link: string;
	readonly image: string;
	readonly imageAlt: string;
}

export interface ProjectItem {
	readonly id: string;
	readonly name: string;
	readonly description: string;
	readonly image: string;
	readonly imageAlt: string;
	readonly primaryHref: string;
	readonly badges: readonly IconAsset[];
	readonly links: readonly ActionLink[];
}

export interface PublicationItem {
	readonly id: string;
	readonly title: string;
	readonly notes: string;
	readonly abstract: string;
	readonly link: ActionLink;
}
