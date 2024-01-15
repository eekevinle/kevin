<script>
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let introVisible = false;
	onMount(() => {
		setTimeout(() => {
			introVisible = true;
		}, 200);
	});
</script>

{#if introVisible}
	<div in:slide={{ duration: 1000 }}>
		<div in:fade={{ duration: 1000 }}>
			<slot />
		</div>
	</div>
{/if}
