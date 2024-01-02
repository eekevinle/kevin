<script>
	import Card from '$lib/components/Card.svelte';
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
	<div class="w-full m-8 flex flex-col gap-8 justify-center items-center">
		<Card>
			<div class="flex flex-col gap-2">
				<div class="font-bold text-3xl">
					I’m a versatile product engineer focused on UX excellence for safety and communications
					technologies.
				</div>
				<div class="text-neutral-500">
					I have developed highly effective techniques to bring connected systems to life and to
					users quickly in order to provide actionable insights to engineering teams through field
					research data.
				</div>
				<br />
				<div><b>Want to work together to drive your product to success?</b></div>
				<div class="flex gap-6">
					<button class="font-bold">My Work</button>
					<button class="bg-white text-black px-4 py-2 font-bold">Let's Talk</button>
				</div>
			</div>
		</Card>
	</div>
</div>
