<script lang="ts">
	import { onMount } from 'svelte';
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let num_sections = 4;
	let imageUrls: string[] = []; // Explicitly typing imageUrls as an array of strings

	onMount(async () => {
		// Generate random image URLs
		for (let i = 0; i < num_sections; i++) {
			imageUrls.push(`https://source.unsplash.com/random/800x600?sig=1`);
		}
	});
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />

	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			<img src={imageUrls[1]} alt="test" class="rounded-lg" />
			<!-- {#each imageUrls as imageUrl, i}
				<div
					class="w-full flex justify-center items-center h-96 border-b-[1px] border-neutral-800 text-neutral-800"
				>
					<img src={imageUrl} alt={`Random image ${i}`} class="rounded-lg" />
					<p>section {i}</p>
				</div>
			{/each} -->
		</div>
	</div>

	<Fab />
</div>
