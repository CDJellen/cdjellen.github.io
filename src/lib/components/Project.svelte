<script lang="ts">
	import Badge from "./Badge.svelte";
	import Button from "./Button.svelte";

	export let image: string;
	export let name: string;
	export let description: string;
	export let badges: string[];
	export let linkIcon: string;
	export let link: string;
	export let linkText: string;
	export let githubIcon: string;
	export let github: string;
	export let githubText: string;
</script>

<div class="project-container rounded-2xl">
	<a href={github} target="_blank">
		<img src={image} alt="Project" class="project-image" />
	</a>

	<div class="project-details">
		<h3 class="project-title text-outline-sm">{name}</h3>
		<h4 class="project-description">{description}</h4>
			
		<div class="badges-container">
			{#each badges as badge}
				<Badge logo={badge} />
			{/each}
		</div>
		
		<div class="buttons-container">
			{#if link}
				<Button icon={linkIcon} link={link} text={linkText} />
			{/if}
			{#if github}
				<Button icon={githubIcon} link={github} text={githubText} />
			{/if}
		</div>
	</div>
</div>

<style>
	.project-container {
		background-color: #2f323f;
		color: white;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.image-container {
		width: 100%;
		max-width: 360px;
		margin: 0 auto 1rem auto;
	}

	.project-image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	.project-details {
		text-align: left; 
		padding-left: 1.5rem;
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

	/* Media Query for Larger Screens */
	@media (min-width: 768px) { 
		.project-container {
			flex-direction: row;
		}

		.image-container {
			margin-bottom: 0;
		}

		.project-details {
			padding-left: 2rem;
		}
	}
</style>
