<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import Banner from "$lib/Banner.svelte";
    import Experiences from "$lib/Experiences.svelte";
    import Projects from "$lib/Projects.svelte";
    import Publications from "$lib/Publications.svelte";
    import Resume from "$lib/Resume.svelte";
    import Footer from "$lib/Footer.svelte";

    import spacer from '$lib/assets/layered-waves-haikei.svg'
    import spacerSm from '$lib/assets/layered-waves-haikei-sm.svg'
</script>

<div id="navbar"></div>
<Navbar />
<Banner />
<div id="experiences" class="spacer-sm rotate-180 flex" style="background-image: url('{spacerSm}');"></div>
<div style="background-image: url('{spacer}');"></div>
<Experiences />
<div class="spacer-sm flex" style="background-image: url('{spacerSm}');"></div>
<div id="projects" class="spacer-sm rotate-180 flex" style="background-image: url('{spacerSm}');"></div>
<div style="background-image: url('{spacer}');"></div>
<Projects />
<div class="spacer-sm flex" style="background-image: url('{spacerSm}');"></div>
<div id="publications" class="spacer-sm rotate-180 flex" style="background-image: url('{spacerSm}');"></div>
<div style="background-image: url('{spacer}');"></div>
<Publications />
<div class="spacer-sm flex" style="background-image: url('{spacerSm}');"></div>
<div id="resume" class="spacer-sm rotate-180 flex" style="background-image: url('{spacerSm}');"></div>
<div style="background-image: url('{spacer}');"></div>
<Resume />
<div class="spacer-sm flex" style="background-image: url('{spacerSm}');"></div>
<Footer />
