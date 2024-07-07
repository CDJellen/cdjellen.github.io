<script lang="ts">
	import { onMount } from 'svelte';
	
	import Button from "./Button.svelte";
  
	let screenWidth = 0;

  onMount(() => {
    screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;
    });
  });

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
		{#if screenWidth > 768}
			<p class="publication-abstract text-pub">{abstract}</p>
		{/if}
		{#if link}
			<div class="link-container">
				<Button icon={linkIcon} link={link} text={linkText} />
			</div>
		{/if}

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
