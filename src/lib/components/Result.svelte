<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';

	export let image: string;
	export let prompt: string;
	export let user: string | undefined = undefined;
</script>

<div
	class="grid max-w-screen-80 auto-rows-auto grid-cols-2 gap-10 rounded-xl p-4 md:p-6 lg:p-8"
	class:bg-prompt-orange={$theme === 'orange' && $colorizedBackground === false}
	class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
	class:bg-slate-900={$colorizedBackground === true}
	class:text-white={$colorizedBackground === true}
>
	<img src={image} alt="The generated result" />

	<!-- <div class="mx-6 h-full w-px bg-slate-900" /> -->

	<div class="flex flex-col">
		<p class="font-redaction text-5xl">{prompt}</p>
		<p class="mt-auto">by {user}</p>
	</div>
</div>
