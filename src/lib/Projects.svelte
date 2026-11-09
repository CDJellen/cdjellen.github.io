<script lang="ts">
	import Project from './components/Project.svelte';
	import Section from './components/Section.svelte';
	import { PROJECTS } from './data/content';
</script>

<Section id="projects" title="Projects" maxWidth="1200px">
	{#each PROJECTS as project (project.id)}
		<Project {project} />
	{/each}
</Section>
