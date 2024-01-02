<script>
	let count = 0;
	const on_btn_blick = () => {
		count++;
	};
</script>

<!-- screen -->
<div class="absolute inset-0 overflow-x-hidden w-full h-[100vh] bg-black">
	<!-- content container -->
	<div class="h-full flex flex-col justify-center place-items-center">
		<div class="text-9xl font-black">{count}</div>
		<button
			on:click={on_btn_blick}
			class="bg-white font-bold text-black py-2 px-3
             active:bg-neutral-900 active:text-white"
		>
			count++
		</button>
	</div>
</div>
