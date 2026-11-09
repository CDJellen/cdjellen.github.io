<script lang="ts">
	import background from '$lib/assets/background01.jpg';
	import profile from '$lib/assets/profile00.png';
	import { SITE_METADATA } from '$lib/data/content';
</script>

<section class="banner" style="background-image: url('{background}');" id="banner">
	<div class="content-wrapper">
		<img
			class="profile-image rounded-full border-4 border-solid border-gray-900"
			src={profile}
			alt="{SITE_METADATA.name} profile portrait"
			width="300"
			height="300"
			fetchpriority="high"
		/>

		<div class="text-container">
			<h1 class="name text-outline-lg font-bold">{SITE_METADATA.name}</h1>
			<p class="title text-outline">{SITE_METADATA.headline}</p>
		</div>
	</div>
</section>

<style>
	.banner {
		min-height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: cover;
		background-position: center;
		background-blend-mode: overlay;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
	}

	.profile-image {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	.text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.name {
		font-size: 2rem;
	}

	.title {
		font-size: 1rem;
	}

	@media (min-width: 640px) {
		.content-wrapper {
			flex-direction: row;
			gap: 2rem;
		}

		.profile-image {
			width: 300px;
			height: 300px;
		}

		.name {
			font-size: 3rem;
		}
	}
</style>
