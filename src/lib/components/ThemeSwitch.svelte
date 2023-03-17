<script lang="ts">
	import { theme } from '$lib/store';
</script>

{#if $theme === 'orange'}
	<button
		on:click={() => {
			$theme = 'blue';
		}}
	>
		Change Theme
	</button>
{:else}
	<button
		on:click={() => {
			$theme = 'orange';
		}}
	>
		Change Theme
	</button>
{/if}
