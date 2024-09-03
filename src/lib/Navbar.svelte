<script>
  import logo from '$lib/assets/logo.png';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  let showMobileMenu = false;
  let screenWidth = 0;

  onMount(() => {
    screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      screenWidth = window.innerWidth;
    });
  });

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }
</script>

<div class="navbar h-14 w-screen fixed z-10 top-0 bg-gray-700 text-gray-50 grid grid-cols-2">
  <div class="flex items-center justify-left gap-2 text-xl sm:text-2xl px-6">
    <img src={logo} alt="Logo" class="logo rounded-full">
    <a href="#navbar" class=""><span class="whitespace-nowrap">Christopher Jellen</span></a>
    <a href="https://github.com/cdjellen"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="icon" /></a>
    <a href="https://www.linkedin.com/in/cdjellen/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" class="icon" /></a>
  </div>

  {#if screenWidth > 768}  <nav class="desktop-nav flex items-center justify-center gap-6 text-md sm:text-xl">
      <a href="#experiences" class="">Experience</a>
      <a href="#projects" class="">Projects</a>
      <a href="#publications" class="">Publications</a>
      <a href="#resume" class="">Resume</a>
    </nav>
  {:else}  <div class="flex items-center justify-end">
      <button class="hamburger" on:click={toggleMobileMenu}>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
  {/if}

  {#if showMobileMenu}  <nav class="mobile-nav" transition:slide={{duration:200}}>
      <a href="#experiences" on:click={toggleMobileMenu}>Experience</a>
      <a href="#projects" on:click={toggleMobileMenu}>Projects</a>
      <a href="#publications" on:click={toggleMobileMenu}>Publications</a>
      <a href="#resume" on:click={toggleMobileMenu}>Resume</a>
    </nav>
  {/if}
</div>

<style>
  .logo {
    width: 48px; 
    height: 48px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .hamburger {
    margin-right: 1rem;
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
  }

  .mobile-nav {
    position: fixed;
    top: 56px;
    left: 0;
    width: 100%;
    background-color: #333;
    z-index: 20;
    text-align: center;
    padding: 1rem;
  }

  .mobile-nav a {
    display: block;
    padding: 0.5rem;
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
    }

    .hamburger, .mobile-nav {
      display: none;
    }
  }
</style>
