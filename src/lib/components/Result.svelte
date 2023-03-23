<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';
	import Image from './Image.svelte';

	export let image: string;
	export let prompt: string;
	export let user: string | undefined = undefined;

	// ImageHeight is used to compute height of textContainerHeight
	let imageHeight: any;
	$: textContainerHeight = imageHeight * 0.8;
</script>

<div
	class="grid max-h-screen-60 max-w-screen-80 grid-cols-2 gap-10 rounded-xl p-4 md:p-6 lg:p-8"
	class:bg-prompt-orange={$theme === 'orange' && $colorizedBackground === false}
	class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
	class:bg-slate-900={$colorizedBackground === true}
	class:text-white={$colorizedBackground === true}
>
	<Image
		src={image}
		alt="The AI generated result"
		bind:clientHeight={imageHeight}
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
