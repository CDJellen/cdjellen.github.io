<script lang="ts">
	import type { ProjectItem } from '$lib/data/types';
	import Badge from './Badge.svelte';
	import Button from './Button.svelte';

	export let project: ProjectItem;
</script>

<article class="project-container rounded-2xl">
	<a href={project.primaryHref} target="_blank" rel="noopener noreferrer">
		<img src={project.image} alt={project.imageAlt} class="project-image" loading="lazy" />
	</a>

	<div class="project-details">
		<h3 class="project-title text-outline-sm">{project.name}</h3>
		<p class="project-description">{project.description}</p>

		<div class="badges-container">
			{#each project.badges as badge (badge.src)}
				<Badge {badge} />
			{/each}
		</div>

		<div class="buttons-container">
			{#each project.links as action (action.href)}
				<Button {action} />
			{/each}
		</div>
	</div>
</article>

<style>
	.project-container {
		background-color: var(--surface-card, #2f323f);
		color: white;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.project-image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	.project-details {
		text-align: left;
	}

	.project-title {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.project-description {
		line-height: 1.5;
	}

	.badges-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.buttons-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	@media (min-width: 768px) {
		.project-container {
			flex-direction: row;
		}

		.project-details {
			padding-left: 2rem;
		}
	}
</style>
