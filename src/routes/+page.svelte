<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import Banner from "$lib/Banner.svelte";
  import Experiences from "$lib/Experiences.svelte";
  import Projects from "$lib/Projects.svelte";
  import Publications from "$lib/Publications.svelte";
  import Resume from "$lib/Resume.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div id="navbar"></div>
<Navbar />
<Banner />
<div id="experiences"></div>
<Experiences />
<div id="projects"></div>
<Projects />
<div id="posts"></div>
<div id="publications"></div>
<Publications />
<div id="resume"></div>
<Resume />
<Footer />
