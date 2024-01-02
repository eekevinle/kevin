<script>
	let count = 0;
	const on_btn_blick = () => {
		count++;
	};
</script>

<!-- screen -->
<div class="absolute inset-0 flex overflow-x-hidden bg-black">
	<!-- main container -->
	<div class="bg-red-500 w-full m-8 flex flex-col justify-center items-center">
		<div class="">{count}</div>
		<button on:click={on_btn_blick}> count++ </button>
		<div>Let's see if this orients correctly.</div>
	</div>
</div>
