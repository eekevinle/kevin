<script>
	export let data;
</script>

<div class="w-full h-[100vh] flex flex-col justify-center items-center">
	<div>
		<div class="font-black text-3xl">Countries</div>
		<ul>
			{#each data.countries as country}
				<li>{country.name}</li>
			{/each}
		</ul>
	</div>
</div>
