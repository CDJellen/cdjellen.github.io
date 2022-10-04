<script>
    import background from '$lib/assets/background01.jpg'
    import profile from '$lib/assets/profile00.png'
</script>


<!-- Banner -->
<div class="
    h-screen w-screen flex justify-center items-center
    bg-pose bg-no-repeat bg-cover bg-center bg-blend-overlay bg-opacity-75 bg-fixed"
    style="background-image: url('{background}');"
    id="banner" >
    <div class="flex flex-col items-center gap-1 sm:gap-3" >
        <img class="object-cover w-[200px] h-[200px] rounded-full 
        border-4 border-solid border-gray-900"  
        src="{profile}" alt="profile" >
    </div>
    <div class="flex flex-col items-center gap-1 sm:gap-1" >
        <h1 class="text-center text-gray-50 text-outline-lg font-bold text-3xl sm:text-6xl" >Chris Jellen</h1>
        <h5 class="text-center text-gray-50 text-outline text-md sm:text-xl" >Software Engineer | Product Manager</h5>
    </div>
</div>
