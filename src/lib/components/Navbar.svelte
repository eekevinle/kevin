<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons';

	let isMenuOpen = false;
	const menuItems = ['Resume', 'Contact'];

	function slideRight(node: Element, { delay = 0, duration = 400, easing = cubicOut } = {}) {
		return {
			delay,
			duration,
			easing,
			css: (t: number) => `
        transform: translateX(${(1 - t) * 100}%);
        transition: transform ${duration}ms ${easing};
      `
		};
	}
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<nav class="text-white p-4 fixed w-full top-0 z-10 bg-opacity-50 backdrop-filter backdrop-blur-lg">
	<div class="container mx-auto flex justify-between items-center">
		<!-- Logo -->
		<div class="flex justify-center items-center gap-4 text-2xl font-black">
			<FontAwesomeIcon icon={faCompassDrafting} class="text-2xl" />
			<div>kl.</div>
		</div>

		<!-- Menu for large screens -->
		<ul class="hidden md:flex space-x-4">
			{#each menuItems as item}
				<li>{item}</li>
			{/each}
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
		<div
			class="md:hidden fixed inset-0 bg-black"
			in:slideRight={{ duration: 300 }}
			out:slideRight={{ duration: 300 }}
		>
			<ul class="flex flex-col items-center pt-8">
				{#each menuItems as item}
					<li class="mb-2">{item}</li>
				{/each}
			</ul>

			<!-- Close Button -->
			<button class="absolute top-4 right-4 text-white" on:click={() => (isMenuOpen = false)}>
				<span class="material-icons">close</span>
			</button>
		</div>
	{/if}
</nav>
