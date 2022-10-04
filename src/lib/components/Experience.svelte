<script lang="ts">
	export let image: string;
	export let link: string;
	export let name: string;
	export let description: string;
	export let descriptionLong: string;
	export let notes: string[];
</script>

<div
	class="
    bg-gray-800 items-center gap-20 px-5 sm:px-5 overflow-hidden
	grid grid-flow-row-dense grid-cols-7 grid-rows-2"
>
	<div class="col-span-2" >
		<a href={link}><img src={image} alt="Experience" /></a>
	</div>
	<div class="col-span-5 row-span-2 text-gray-50 text-md" >
		<h3 class="text-left text-gray-50 text-outline-sm text-lg font-bold text-6xl" >{name}</h3>
		<div class="text-gray-50 text-outline text-md sm:text-xl">
			<h3 class="my-3 font-bold">{description}</h3>
			<h5 class="my-3">{descriptionLong}</h5>
			<div class="grid lg:flex lg:justify-left grid-cols-2 sm:grid-cols-3">
				<table class="table-fixed">
					<thead>
						<tr>
							<th class="px-1 py-2 text-left" >
								<div class="">
									<p style="font-size:30px">&#x1F680;</p>
								</div>
							</th>
							<th class="text-left font-bold text-2xl" >Key Accomplishments:</th>
					  </tr>
					</thead>
					<tbody>
					{#each notes as note}
						<tr>
							<td><p style="font-size:20px">&#128204;</p></td>
							<td>{note}</td>
						</tr>
					{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>