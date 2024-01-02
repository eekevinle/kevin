<script>
	let isMenuOpen = false;
</script>

<nav class="text-white p-4 fixed w-full top-0 z-10">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Logo -->
		<div class="text-2xl font-black">kl.</div>

		<!-- Menu for large screens -->
		<ul class="hidden md:flex space-x-4">
			<li>work</li>
			<li>contact</li>
		</ul>

		<!-- Hamburger Icon for small screens -->
		<button class="md:hidden" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="md:hidden fixed inset-0 bg-black">
			<ul class="flex flex-col items-center pt-8">
				<li class="mb-2">work</li>
				<li class="mb-2">contact</li>
			</ul>

			<!-- Close Button -->
			<button class="absolute top-4 right-4" on:click={() => (isMenuOpen = false)}>
				<svg
					class="w-6 h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					></path>
				</svg>
			</button>
		</div>
	{/if}
</nav>
