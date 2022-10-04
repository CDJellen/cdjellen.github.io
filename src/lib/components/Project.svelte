<script lang="ts">
	import Badge from "./Badge.svelte";
	import Button from "./Button.svelte";

	export let image: string;
	export let name: string;
	export let description: string;
	export let badges: string[];
	export let linkIcon: string;
	export let link: string;
	export let linkText: string;
	export let githunIcon: string;
	export let github: string;
	export let githubText: string;
</script>

<div
	class="
    bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden
    grid lg:grid-cols-2 xs:grid-cols-1"
>
	<a href={github}><img src={image} alt="Project" /></a>
	<div class="flex justify-center items-center">
		<div class="text-gray-50 text-outline text-md sm:text-xl">
			<h3 class="text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl" >{name}</h3>
			<h4 class="my-3">{description}</h4>
			<div class="grid lg:flex lg:justify-center grid-cols-2 sm:grid-cols-3">
				{#each badges as badge}
					<Badge logo={badge} />
				{/each}
			</div>
			<br>
			<div class="grid lg:flex lg:justify-center grid-cols-2 sm:grid-cols-3" >
				<div class="flex justify-right px-5">
					<Button icon={linkIcon} link={link} text={linkText} />
				</div>
				<div class="flex justify-left px-5">
					<Button
						icon={githunIcon}
						link={github}
						text={githubText}
					/>
				</div>
			</div>
		</div>
	</div>
</div>