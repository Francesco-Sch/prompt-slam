<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';

	export let image: string;
	export let prompt: string;
	export let user: string | undefined = undefined;

	// Compute height of prompt container.
	// This makes sure, that the text on the right side is never bigger than
	// the image on the left
	let imageElement: HTMLImageElement;
	let textContainerHeight = 0;
	let windowWidth: any;

	function setTextContainerHeight() {
		textContainerHeight = imageElement.offsetHeight * 0.8;
	}

	$: if (windowWidth) {
		setTextContainerHeight();
		console.log('windowWidth changed.');
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

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
		on:load={setTextContainerHeight}
		bind:this={imageElement}
	/>

	<div class="flex h-full flex-col">
		<p
			class="overflow-y-auto font-redaction sm:mb-2 md:mb-5 md:text-2xl lg:text-5xl"
			style="height: {textContainerHeight}px"
		>
			{prompt}
		</p>
		<p class="mt-auto text-xs md:text-base">by {user}</p>
	</div>
</div>
