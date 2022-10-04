<script>
    import resume from '$lib/assets/Jellen_Resume.pdf'
</script>

<div
	class="
    bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden
    grid lg:grid-cols-1 xs:grid-cols-1"
>
	<div class="flex justify-center items-center">
        <section id="resume">
            <embed src={resume} width="1200" height="1200" />
        </section>
    </div>
</div>