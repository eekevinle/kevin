<script>
	import Card from '$lib/components/Card.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let count = 0;
	const on_btn_blick = () => {
		count++;
	};
</script>

<!-- screen -->
<div class="absolute inset-0 flex flex-col overflow-x-hidden bg-black">
	<Navbar />

	<!-- main container, centered -->
	<div class="m-8 flex flex-col gap-8 items-center">
		<div class="fixed bottom-4 right-4 p-2">
			<button
				class="bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded-full"
			>
				<!-- Icon or text for the button -->
				Let's Talk
			</button>
		</div>
	</div>
</div>
