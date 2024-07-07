<script lang="ts">
	import Button from "./Button.svelte";

	export let title: string;
	export let linkIcon: string;
	export let link: string;
	export let linkText: string;
	export let abstract: string;
	export let notes: string;
</script>

<div class="publication-container rounded-2xl">
	<div class="text-container">
		<h3 class="publication-title text-outline-sm">{title}</h3>
		<br />
		<p class="publication-abstract text-pub-sm">{abstract}</p>

		<div class="link-container">
			{#if link}
				<Button icon={linkIcon} link={link} text={linkText} />
			{/if}
		</div>

		<p class="publication-notes">{notes}</p>
	</div>
</div>

<style>
	.publication-container {
		background-color: #2f323f;
		color: white;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.text-container {
		text-align: left;
	}

	.publication-title {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.publication-abstract {
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
	
	/* Media Queries */
	@media (min-width: 768px) {
		.publication-container {
			padding: 2rem;
		}
		
		.publication-title {
			font-size: 1.5rem;
		}
	}
</style>
