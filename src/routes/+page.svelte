<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />

	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			<div class="w-full flex justify-center items-center h-96 bg-red-500">section</div>
			<div class="w-full flex justify-center items-center h-96 bg-orange-500">section</div>
			<div class="w-full flex justify-center items-center h-96 bg-green-500">section</div>
			<div class="w-full flex justify-center items-center h-96 bg-blue-500">section</div>
		</div>
	</div>

	<Fab />
</div>
