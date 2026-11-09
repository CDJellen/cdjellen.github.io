import type { IconAsset, IconId } from './types';

const DEVICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const ICONS: Readonly<Record<IconId, IconAsset>> = {
	arduino: {
		src: `${DEVICON_BASE}/arduino/arduino-original.svg`,
		alt: 'Arduino'
	},
	docker: {
		src: `${DEVICON_BASE}/docker/docker-plain-wordmark.svg`,
		alt: 'Docker'
	},
	git: {
		src: `${DEVICON_BASE}/git/git-plain.svg`,
		alt: 'Git'
	},
	github: {
		src: `${DEVICON_BASE}/github/github-original.svg`,
		alt: 'GitHub'
	},
	go: {
		src: `${DEVICON_BASE}/go/go-original-wordmark.svg`,
		alt: 'Go'
	},
	google: {
		src: `${DEVICON_BASE}/google/google-plain.svg`,
		alt: 'Web Application'
	},
	linkedin: {
		src: `${DEVICON_BASE}/linkedin/linkedin-original.svg`,
		alt: 'LinkedIn'
	},
	matlab: {
		src: `${DEVICON_BASE}/matlab/matlab-original.svg`,
		alt: 'MATLAB'
	},
	numpy: {
		src: `${DEVICON_BASE}/numpy/numpy-original.svg`,
		alt: 'NumPy'
	},
	pandas: {
		src: `${DEVICON_BASE}/pandas/pandas-original.svg`,
		alt: 'Pandas'
	},
	pytest: {
		src: `${DEVICON_BASE}/pytest/pytest-original.svg`,
		alt: 'Pytest'
	},
	python: {
		src: `${DEVICON_BASE}/python/python-original.svg`,
		alt: 'Python'
	},
	pythonPlain: {
		src: `${DEVICON_BASE}/python/python-plain.svg`,
		alt: 'Python Package Index'
	},
	pytorch: {
		src: `${DEVICON_BASE}/pytorch/pytorch-original.svg`,
		alt: 'PyTorch'
	},
	r: {
		src: `${DEVICON_BASE}/r/r-original.svg`,
		alt: 'R'
	},
	svelte: {
		src: `${DEVICON_BASE}/svelte/svelte-original.svg`,
		alt: 'SvelteKit'
	}
};
