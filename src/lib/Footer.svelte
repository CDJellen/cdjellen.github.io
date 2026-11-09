<script lang="ts">
	import { SITE_METADATA } from '$lib/data/content';
	import { ICONS } from '$lib/data/icons';
</script>

<footer class="bg-gray-800 text-gray-400 text-base">
	<div class="flex justify-center items-center">
		Made with
		<a
			href={SITE_METADATA.svelteKitUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center"
		>
			<img
				src={ICONS.svelte.src}
				alt=""
				aria-hidden="true"
				width="24"
				height="24"
				class="footer-icon"
				loading="lazy"
			/>
			<span>SvelteKit</span>
		</a>
		&nbsp;by&nbsp;
		<a href={SITE_METADATA.githubUrl} target="_blank" rel="noopener noreferrer">
			{SITE_METADATA.name}
		</a>
	</div>
</footer>
