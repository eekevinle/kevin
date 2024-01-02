<script>
	import Fab from '$lib/components/Fab.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Intro from '$lib/components/Intro.svelte';
</script>

<div class="flex flex-col h-screen overflow-hidden bg-black">
	<Navbar />
	<Fab />
	<!-- scrollable content area -->
	<div class="flex-1 overflow-y-auto pt-16 hide-scrollbar">
		<div class="min-h-full flex flex-col justify-center items-center">
			<!-- intro -->
			<Intro />

			<!-- products -->
			<div class="flex flex-col max-w-md gap-8 pb-36 mx-8 items-center justify-center">
				<div>
					<a class="text-2xl font-bold" href="/">G1 SCBA</a>
					<div class="text-sm text-neutral-500 font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">LUNAR</a>
					<div class="text-sm text-neutral-500 font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">FireGrid</a>
					<div class="text-sm text-neutral-500 font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">ALTAIR io</a>
					<div class="text-sm text-neutral-500 font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">V-TEC io</a>
					<div class="text-sm text-neutral-500 font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">Advanced Voice Communications</a>
					<div class="text-sm text-neutral-500 font-normal">
						<b>(proprietary - please contact for more information).</b> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">Advanced Gas Monitoring</a>
					<div class="text-sm text-neutral-500 font-normal">
						<b>(proprietary - please contact for more information).</b> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">Safety Solution Expert System</a>
					<div class="text-sm text-neutral-500 font-normal">
						<b>(proprietary - please contact for more information).</b> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>

				<div>
					<a class="text-2xl font-bold" href="/">Construction Safety System</a>
					<div class="text-sm text-neutral-500 font-normal">
						<b>(proprietary - please contact for more information).</b> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
			</div>

			<!-- skills -->
			<div class="grid grid-cols-2 justify-center gap-8 mx-12">
				<div class="text-right">
					<div class="font-black">software</div>
					<div class="text-sm text-neutral-500">
						{#each ['c++', 'python', 'html / css / js'] as skill}
							<div>{skill}</div>
						{/each}
					</div>
				</div>

				<div class="text-left">
					<div class="font-black">electronics</div>
					<div class="text-sm text-neutral-500">
						{#each ['pcb design', 'soldering', 'rapid prototyping'] as skill}
							<div>{skill}</div>
						{/each}
					</div>
				</div>

				<div class="text-right">
					<div class="font-black">design</div>
					<div class="text-sm text-neutral-500">
						{#each ['figma', 'illustrator', 'photoshop'] as skill}
							<div>{skill}</div>
						{/each}
					</div>
				</div>

				<div class="text-left">
					<div class="font-black">research</div>
					<div class="text-sm text-neutral-500">
						{#each ['journey ideation + mapping', 'remote + field usability testing', 'data synthesis + reporting'] as skill}
							<div>{skill}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
