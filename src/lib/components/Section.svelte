<script lang="ts">
	export let id: string;
	export let title: string;
	export let maxWidth: '1200px' | '1800px' = '1200px';
</script>

<section {id} class="section" style="--section-max-width: {maxWidth};">
	<h2 class="section-title text-outline-lg">{title}</h2>
	<div class="section-container">
		<slot />
	</div>
</section>

<style>
	.section {
		background-color: var(--surface-section, #222222);
		color: white;
		padding: 2rem 1rem;
		scroll-margin-top: var(--navbar-height, 3.5rem);
	}

	.section-title {
		text-align: center;
		margin-bottom: 1rem;
	}

	.section-container {
		width: 90%;
		max-width: var(--section-max-width, 1200px);
		margin: 0 auto;
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
