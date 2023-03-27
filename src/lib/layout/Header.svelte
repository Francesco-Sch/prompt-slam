<script>
	import { theme, colorizedBackground } from '$lib/store';
</script>

<header class="absolute inset-x-0 top-0 flex items-center justify-center py-3">
	<h1
		class="group font-redaction-50 text-base hover:animate-unpixelate-font-50-0"
		class:text-prompt-orange={$theme === 'orange' &&
			$colorizedBackground === false}
		class:text-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
		class:text-slate-900={$colorizedBackground === true}
	>
		Prompt <span class="font-redaction group-hover:animate-pixelate-font-0-50"
			>Battle</span
		>
	</h1>
</header>
