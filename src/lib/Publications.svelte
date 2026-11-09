<script lang="ts">
	import Publication from './components/Publication.svelte';
	import Section from './components/Section.svelte';
	import { PUBLICATIONS } from './data/content';
</script>

<Section id="publications" title="Publications" maxWidth="1800px">
	{#each PUBLICATIONS as publication (publication.id)}
		<Publication {publication} />
	{/each}
</Section>
