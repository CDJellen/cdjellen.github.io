<script lang="ts">
	import resume from '$lib/assets/Jellen_Resume.pdf';
	import Section from './components/Section.svelte';
	import { SITE_METADATA } from './data/content';
</script>

<Section id="resume" title="Resume" maxWidth="1800px">
	<div class="resume-viewer">
		<div class="resume-actions">
			<a href={resume} target="_blank" rel="noopener noreferrer" class="resume-download-button">
				Download Resume
			</a>
		</div>
		<iframe src={resume} title="{SITE_METADATA.name}'s Resume" class="resume-iframe"></iframe>
	</div>
</Section>

<style>
	.resume-viewer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.resume-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.resume-iframe {
		width: calc(100vw - 4rem);
		max-width: 1200px;
		height: 90vh;
		border: none;
	}

	.resume-download-button {
		background-color: var(--accent-primary, #007bff);
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 8px;
	}

	.resume-download-button:hover {
		background-color: var(--accent-primary-hover, #0056b3);
	}

	@media (max-width: 768px) {
		.resume-iframe {
			height: 80vh;
		}
	}
</style>
