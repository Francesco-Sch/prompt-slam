<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';

	export let image: string;
	export let prompt: string;
	export let user: string | undefined = undefined;

	// Compute height of prompt container.
	// This makes sure, that the text on the right side is never bigger than
	// the image on the left
	let imageElement: HTMLImageElement;
	let height = 0;

	function handleImageLoad() {
		height = imageElement.offsetHeight * 0.8;
	}
</script>

<!--  -->

<div
	class="grid max-h-screen-60 max-w-screen-80 grid-cols-2 gap-10 rounded-xl p-4 md:p-6 lg:p-8"
	class:bg-prompt-orange={$theme === 'orange' && $colorizedBackground === false}
	class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
	class:bg-slate-900={$colorizedBackground === true}
	class:text-white={$colorizedBackground === true}
>
	<img
		src={image}
		alt="The generated result"
		on:load={handleImageLoad}
		bind:this={imageElement}
	/>

	<div class="flex h-full flex-col">
		<p
			class="mb-5 overflow-y-auto font-redaction text-5xl"
			style="height: {height}px"
		>
			{prompt}
		</p>
		<p class="mt-auto">by {user}</p>
	</div>
</div>
