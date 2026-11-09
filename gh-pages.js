import { clean, publish } from 'gh-pages';

// Prevent git or credential helpers from ever blocking on interactive terminal prompts.
process.env.GIT_TERMINAL_PROMPT = '0';
process.env.GCM_INTERACTIVE = 'never';

const DEPLOY_TIMEOUT_MS = 60_000;
const repo = process.env.GH_PAGES_REPO ?? 'git@github:cdjellen/cdjellen.github.io.git';

const watchdog = setTimeout(() => {
	console.error(
		`Deployment timed out after ${DEPLOY_TIMEOUT_MS / 1000}s; cleaning gh-pages cache.`
	);
	clean();
	process.exit(1);
}, DEPLOY_TIMEOUT_MS);

publish(
	'web_dev',
	{
		branch: 'docs',
		repo,
		user: {
			name: 'Chris Jellen',
			email: 'cdjellen@gmail.com'
		},
		dotfiles: true
	},
	(err) => {
		clearTimeout(watchdog);
		if (err) {
			console.error('Deployment failed:', err);
			clean();
			process.exit(1);
		}
		console.log('Page deployed.');
	}
);
