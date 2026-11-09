<script lang="ts">
	import type { PublicationItem } from '$lib/data/types';
	import Button from './Button.svelte';

	export let publication: PublicationItem;
</script>

<article class="publication-container rounded-2xl">
	<div class="text-container">
		<h3 class="publication-title text-outline-sm">{publication.title}</h3>
		<p class="publication-abstract">{publication.abstract}</p>
		{#if publication.link.href}
			<div class="link-container">
				<Button action={publication.link} />
			</div>
		{/if}

		<p class="publication-notes">{publication.notes}</p>
	</div>
</article>

<style>
	.publication-container {
		background-color: var(--surface-card, #2f323f);
		color: white;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		width: 100%;
	}

	.text-container {
		text-align: left;
	}

	.publication-title {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.publication-abstract {
		display: none;
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.link-container {
		display: flex;
		justify-content: flex-start;
		margin-bottom: 1rem;
	}

	.publication-notes {
		font-style: italic;
	}

	@media (min-width: 768px) {
		.publication-container {
			padding: 2rem;
		}

		.publication-title {
			font-size: 1.5rem;
		}

		.publication-abstract {
			display: block;
		}
	}
</style>
