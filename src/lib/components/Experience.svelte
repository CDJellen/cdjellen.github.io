<script lang="ts">
	export let image: string;
	export let link: string;
	export let name: string;
	export let description: string;
	export let descriptionLong: string;
	export let notes: string[];
</script>

<div class="experience-container rounded-2xl">
	<div class="image-container">
		<a href={link} target="_blank">
			<img src={image} alt="Experience" class="experience-image" />
		</a>
	</div>

	<div class="experience-details">
		<h3 class="experience-title text-outline-sm">{name}</h3>
		<h4 class="experience-description text-outline">{description}</h4>
		<p class="experience-description-long">{descriptionLong}</p>

		<div class="accomplishments">
			<h4 class="accomplishments-title text-outline">Key Accomplishments:</h4>
			<ul>
				{#each notes as note}
					<li class="accomplishment-item">&#128204; {note}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	.experience-container {
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
		max-width: 200px;
		margin: 0 auto 1rem auto;
	}

	.experience-image {
		width: 100%; 
		height: auto;
		object-fit: contain;
		border-radius: 0.5rem;
	}

	.experience-details {
		text-align: left;
	}

	.experience-title {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.experience-description {
		font-size: 1rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.experience-description-long {
		line-height: 1.5;
		margin-bottom: 1rem;
	}

	.accomplishments-title {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.accomplishment-item {
		list-style: none;
		padding-left: 0;
		margin-bottom: 0.5rem;
	}

	/* Media Query for Larger Screens */
	@media (min-width: 768px) {
		.experience-container {
			flex-direction: row; 
		}

		.image-container {
			margin-bottom: 0;
			margin-right: 1.5rem;
		}

		.experience-image {
			max-width: 300px;
		}

		.experience-title {
			font-size: 1.5rem;
		}
	}
</style>
