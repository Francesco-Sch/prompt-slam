<script>
	import { theme, colorizedBackground } from '$lib/store';

	let animate = false;
</script>

<header class="absolute inset-x-0 top-0 flex items-center justify-center py-3">
	<a href="/">
		<h1
			class="group font-redaction-50 text-base"
			on:mouseenter={() => {
				animate = true;
			}}
			on:mouseleave={() => {
				animate = false;
			}}
			class:animate-unpixelate-font-50-0={animate}
			class:animate-pixelate-font-0-50={!animate}
			class:text-prompt-orange={$theme === 'orange' &&
				$colorizedBackground === false}
			class:text-prompt-blue={$theme === 'blue' &&
				$colorizedBackground === false}
			class:text-slate-900={$colorizedBackground === true}
		>
			Prompt <span class="font-redaction group-hover:animate-pixelate-font-0-50"
				>Slam</span
			>
		</h1>
	</a>
</header>
