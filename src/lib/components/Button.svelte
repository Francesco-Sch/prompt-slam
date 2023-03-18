<script lang="ts">
	import { theme } from '$lib/store';

	// Props
	export let label: string;
	export let href: string = '';
</script>

{#if href !== ''}
	<a {href}>
		<button
			on:click
			class="h-full px-20 py-7 font-redaction-50 text-xl hover:animate-unpixelate-font
          {$theme === 'orange' ? 'bg-prompt-orange' : 'bg-prompt-blue'}"
		>
			{label}
		</button>
	</a>
{:else}
	<button
		on:click
		class="h-full px-20 py-7 font-redaction-50 text-xl hover:animate-unpixelate-font
          {$theme === 'orange' ? 'bg-prompt-orange' : 'bg-prompt-blue'}"
	>
		{label}
	</button>
{/if}
