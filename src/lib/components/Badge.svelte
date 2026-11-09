<script lang="ts">
	import type { IconAsset } from '$lib/data/types';

	export let badge: IconAsset;
</script>

<div class="py-2 mx-4 text-white flex justify-start">
	<img src={badge.src} class="h-10" alt={badge.alt} width="40" height="40" loading="lazy" />
</div>
