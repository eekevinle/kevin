<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let sections = [
		'firefighter search & rescue',
		'voice communications',
		'wearable surface measurement',
		'firefighter fall detection',
		'expert knowledge database'
	];
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />

	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			<!-- intro -->
			<div class="h-96 flex flex-col gap-4 justify-center items-center">
				<div class="text-3xl">Product Engineer @ <b>MSA Safety</b>.</div>
				<div class="flex flex-col items-center">
					<div class="max-w-md text-center">
						Currently focusing on connected systems design and UX excellence for safety and
						communications technologies.
					</div>
				</div>
				<div class="text-sm text-neutral-500">
					embedded | web | mobile | electronics | UX/UI | user research
				</div>
			</div>

			<!-- sample sections -->
			{#each sections as section}
				<div
					class="w-full flex justify-center items-center h-96
							   border-y-[1px] border-neutral-800 text-neutral-800"
				>
					{section}
				</div>
			{/each}
		</div>
	</div>

	<Fab />
</div>
