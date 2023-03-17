<!-- 
	Thanks to Nico Bachner for this solution:
	https://nicobachner.com/sveltekit-theme-switch
 -->
<script lang="ts">
	import { theme } from '$lib/store';
</script>

{#if $theme === 'orange'}
	<button
		on:click={() => {
			$theme = 'blue';
		}}
		class="theme-switch"
	>
		<div class="gradient-orange-to-blue from-prompt-orange to-prompt-blue" />
	</button>
{:else}
	<button
		on:click={() => {
			$theme = 'orange';
		}}
		class="theme-switch"
	>
		<div class="gradient-blue-to-orange from-prompt-blue to-prompt-orange" />
	</button>
{/if}

<style lang="postcss">
	.theme-switch {
		@apply rounded-lg p-2 transition-colors hover:bg-slate-100;
	}
	.gradient-orange-to-blue,
	.gradient-blue-to-orange {
		@apply h-8 w-8 rounded-full border border-slate-900 bg-gradient-to-br;
	}
</style>
