<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let num_sections = 4;
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />

	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			{#each { length: num_sections } as _, i}
				<div
					class="w-full flex justify-center items-center h-96
					 			 border-b-[1px] border-neutral-800 text-neutral-800"
				>
					section {i}
				</div>
			{/each}
		</div>
	</div>

	<Fab />
</div>
