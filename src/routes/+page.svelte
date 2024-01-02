<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let sections = [
		'firefighter search & rescue',
		'first responder voice communications',
		'firefighter display improvements',
		'ai expert knowledge database',
		'wearable surface measurement'
	];
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />

	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			<!-- intro -->
			<div class="h-96 max-w-lg px-8 flex flex-col gap-4 justify-center items-center">
				<div class="text-3xl text-center">
					Product Engineer @ <p><b>MSA Safety</b>.</p>
				</div>
				<div class="flex flex-col items-center">
					<div class="text-center">
						Currently focusing on connected systems design and UX excellence for safety and
						communications technologies.
					</div>
				</div>
				<div class="text-xs text-neutral-500 text-center">
					embedded systems | web dev | electronics | UX & research
				</div>
			</div>

			<!-- video -->
			<div class="video-container">
				<div class="video-foreground">
					<iframe
						title="msa reel"
						src="https://www.youtube.com/embed/kDoJEgIuYvU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1"
						frameBorder="0"
						allowFullScreen
					>
					</iframe>
				</div>
			</div>

			<!-- sample sections -->
			{#each sections as section}
				<div
					class="w-full flex justify-center items-center h-96
							   border-b-[1px] border-neutral-800 text-neutral-800"
				>
					{section}
				</div>
			{/each}
		</div>
	</div>

	<Fab />
</div>

<style>
	.video-container {
		width: 100vw;
		height: 400px;
		overflow: hidden;
		position: relative;
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.video-container iframe {
		pointer-events: none;
	}
	.video-container iframe {
		position: absolute;
		top: -60px;
		left: 0;
		width: 100%;
		height: calc(100% + 120px);
	}
	.video-foreground {
		pointer-events: none;
	}
</style>
