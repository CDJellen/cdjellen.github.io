<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { SITE_METADATA } from '$lib/data/content';
	import { slide } from 'svelte/transition';

	let showMobileMenu = false;

	function toggleMobileMenu(): void {
		showMobileMenu = !showMobileMenu;
	}

	function closeMobileMenu(): void {
		showMobileMenu = false;
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && showMobileMenu) {
			closeMobileMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<header
	id="navbar"
	class="navbar h-14 w-full inset-x-0 fixed z-10 top-0 bg-gray-700 text-gray-50 grid grid-cols-2"
>
	<div class="flex items-center justify-start gap-2 text-xl sm:text-2xl px-6">
		<img
			src={logo}
			alt="{SITE_METADATA.name} portrait logo"
			width="48"
			height="48"
			class="logo rounded-full"
		/>
		<a href="#banner"><span class="whitespace-nowrap">{SITE_METADATA.name}</span></a>
		{#each SITE_METADATA.socialLinks as social (social.href)}
			<a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
				{#if social.icon}
					<img
						src={social.icon.src}
						alt=""
						aria-hidden="true"
						width="24"
						height="24"
						class="icon"
					/>
				{/if}
			</a>
		{/each}
	</div>

	<nav
		aria-label="Primary navigation"
		class="desktop-nav items-center justify-center gap-6 text-base sm:text-xl"
	>
		{#each SITE_METADATA.navItems as item (item.href)}
			<a href={item.href}>{item.label}</a>
		{/each}
	</nav>

	<div class="mobile-menu-trigger flex items-center justify-end">
		<button
			type="button"
			class="hamburger"
			aria-label="Toggle navigation menu"
			aria-expanded={showMobileMenu}
			aria-controls="mobile-nav"
			on:click={toggleMobileMenu}
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</div>

	{#if showMobileMenu}
		<nav
			id="mobile-nav"
			aria-label="Mobile navigation"
			class="mobile-nav"
			transition:slide={{ duration: 200 }}
		>
			{#each SITE_METADATA.navItems as item (item.href)}
				<a href={item.href} on:click={closeMobileMenu}>{item.label}</a>
			{/each}
		</nav>
	{/if}
</header>

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
		display: block;
		width: 25px;
		height: 3px;
		background-color: white;
		margin: 5px 0;
	}

	.mobile-nav {
		position: fixed;
		top: var(--navbar-height, 3.5rem);
		left: 0;
		width: 100%;
		background-color: var(--surface-mobile-nav, #333333);
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

		.mobile-menu-trigger,
		.hamburger,
		.mobile-nav {
			display: none;
		}
	}
</style>
