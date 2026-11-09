<script lang="ts">
	import type { ActionLink } from '$lib/data/types';

	export let action: ActionLink;
</script>

<a
	class="bg-slate-100 hover:bg-slate-200 text-gray-800 inline-flex items-center py-2 px-4 border border-gray-400 rounded shadow"
	href={action.href}
	target="_blank"
	rel="noopener noreferrer"
>
	{#if action.icon}
		<img
			src={action.icon.src}
			class="h-8 px-1"
			alt=""
			aria-hidden="true"
			width="32"
			height="32"
			loading="lazy"
		/>
	{/if}
	<span class="text-left text-base font-bold text-button-sm">{action.label}</span>
</a>
