<script lang="ts">
	import Banner from '$lib/Banner.svelte';
	import { SITE_METADATA } from '$lib/data/content';
	import Experiences from '$lib/Experiences.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Projects from '$lib/Projects.svelte';
	import Publications from '$lib/Publications.svelte';
	import Resume from '$lib/Resume.svelte';
</script>

<svelte:head>
	<title>{SITE_METADATA.pageTitle}</title>
	<meta name="description" content={SITE_METADATA.description} />
</svelte:head>

<Navbar />
<main>
	<Banner />
	<Experiences />
	<Projects />
	<Publications />
	<Resume />
</main>
<Footer />
