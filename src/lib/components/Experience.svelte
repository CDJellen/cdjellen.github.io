<script lang="ts">
	import type { ExperienceItem } from '$lib/data/types';

	export let experience: ExperienceItem;
</script>

<article class="experience-container rounded-2xl">
	<div class="image-container">
		<a href={experience.link} target="_blank" rel="noopener noreferrer">
			<img
				src={experience.image}
				alt={experience.imageAlt}
				class="experience-image"
				loading="lazy"
			/>
		</a>
	</div>

	<div class="experience-details">
		<h3 class="experience-title text-outline-sm">{experience.name}</h3>
		<p class="experience-description text-outline">{experience.description}</p>
		<p class="experience-description-long">{experience.descriptionLong}</p>

		<div class="accomplishments">
			<h4 class="accomplishments-title text-outline">Key Accomplishments:</h4>
			<ul>
				{#each experience.notes as note (note)}
					<li class="accomplishment-item">
						<span aria-hidden="true">&#128204;</span>
						{note}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</article>

<style>
	.experience-container {
		background-color: var(--surface-card, #2f323f);
		color: white;
		padding: 1.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
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
