<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';

	// Props
	export let label: string;
	export let href: string = '';
	export let form: string | null | undefined = null;
	export let type: 'button' | 'reset' | 'submit' | null | undefined = 'button';
	let classes: string = '';
	export { classes as class };

	let animate = false;
</script>

{#if href !== ''}
	<a {href} class="w-full">
		<button
			on:click
			{type}
			class="h-full px-20 py-7 text-center font-redaction-50 text-xl {classes}"
			on:mouseenter={() => {
				animate = true;
			}}
			on:mouseleave={() => {
				animate = false;
			}}
			class:animate-unpixelate-font-50-0={animate}
			class:animate-pixelate-font-0-50={!animate}
			class:bg-prompt-orange={$theme === 'orange' &&
				$colorizedBackground === false}
			class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
			class:bg-slate-900={$colorizedBackground === true}
			class:text-white={$colorizedBackground === true}
		>
			{label}
		</button>
	</a>
{:else}
	<button
		on:click
		{form}
		{type}
		class="h-full px-20 py-7 font-redaction-50 text-xl {classes}"
		on:mouseenter={() => {
			animate = true;
		}}
		on:mouseleave={() => {
			animate = false;
		}}
		class:animate-unpixelate-font-50-0={animate}
		class:animate-pixelate-font-0-50={!animate}
		class:bg-prompt-orange={$theme === 'orange' &&
			$colorizedBackground === false}
		class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
		class:bg-slate-900={$colorizedBackground === true}
		class:text-white={$colorizedBackground === true}
	>
		{label}
	</button>
{/if}
