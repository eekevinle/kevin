<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<div class="bg-black w-screen">
	<div class="max-w-7xl mx-auto flex flex-col h-screen overflow-hidden">
		<!-- navigation -->
		<Navbar />
		<!-- floating action button -->
		<Fab />
		<!-- scrollable content area -->
		<div
			class="pt-16 flex flex-col md:flex-row overflow-y-scroll hide-scrollbar md:overflow-y-hidden"
		>
			<div class="md:h-screen max-w-lg flex flex-col">
				<Intro />
				<!-- <About /> -->
			</div>
			<Experience />
		</div>
	</div>
</div>
