<script>
    import logo from '$lib/assets/logo.png'
</script>

<!-- Navbar -->
<div class="h-14 w-screen fixed z-10 top-0 bg-gray-700 text-gray-50
grid grid-cols-2">
    <div class="h-full 
        flex items-center justify-left gap-2
        text-xl sm:text-2xl px-6">
        <img src="{logo}" alt="Logo" class="object-cover w-[48px] h-[48px] rounded-full">
        <a href="#navbar" class=""><span class="whitespace-nowrap">Chris Jellen</span></a>
        <a href="https://github.com/cdjellen"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"  style="width:24px;height:24px;" class="footer-icon"></a>
        <a href="https://www.linkedin.com/in/cdjellen/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn"  style="width:24px;height:24px;" class="footer-icon"></a>
    </div>
    <nav class="text-md sm:text-xl text-gray-50
        flex items-center justify-center gap-6">
        <a href="#experiences" class="">Experience</a>
        <a href="#projects" class="">Projects</a>
        <a href="#publications" class="">Publications</a>
        <a href="#resume" class="">Resume</a>
    </nav>
</div>
