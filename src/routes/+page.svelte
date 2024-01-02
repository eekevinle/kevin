<script>
	import Navbar from '$lib/components/Navbar.svelte';

	let count = 0;
	const on_btn_blick = () => {
		count++;
	};
</script>

<!-- screen -->
<div class="absolute inset-0 flex overflow-x-hidden bg-black">
	<Navbar />

	<!-- main container, centered -->
	<div class="w-full m-8 flex flex-col justify-center items-center">lorem ipsum.</div>
</div>
