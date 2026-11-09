<script lang="ts">
	import Experience from './components/Experience.svelte';
	import Section from './components/Section.svelte';
	import { EXPERIENCES } from './data/content';
</script>

<Section id="experiences" title="Experience" maxWidth="1200px">
	{#each EXPERIENCES as experience (experience.id)}
		<Experience {experience} />
	{/each}
</Section>
