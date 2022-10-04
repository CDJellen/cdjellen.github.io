<script lang="ts">
	import Button from "./Button.svelte";

	export let title: string;
	export let linkIcon: string;
	export let link: string;
	export let linkText: string
	export let abstract: string;
	export let notes: string;
</script>

<div
	class="
    bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden
    grid lg:grid-cols-1 xs:grid-cols-1"
>
	<div class="flex justify-left items-center">
		<div class="text-gray-50 text-outline text-md sm:text-xl">
			<h3 class="text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl" >{title}</h3>
			<br>
			<h4 class="my-3 text-pub-sm">{abstract}</h4>
			<div class="flex justify-left">
				<Button icon={linkIcon} link={link} text={linkText} />
			</div>
			<h4 class="my-3">{notes}</h4>
			<br>
		</div>
	</div>
</div>