<script lang="ts">
	import { theme, colorizedBackground } from '$lib/store';
</script>

<div class="relative flex h-12 w-12 items-center justify-center">
	<span
		class="absolute inline-flex h-full w-full animate-ping rounded-full bg-prompt-orange opacity-75"
		class:bg-prompt-orange={$theme === 'orange' &&
			$colorizedBackground === false}
		class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
	/>
	<span
		class="relative inline-flex h-12 w-12 rounded-full"
		class:bg-prompt-orange={$theme === 'orange' &&
			$colorizedBackground === false}
		class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === false}
	/>
</div>
