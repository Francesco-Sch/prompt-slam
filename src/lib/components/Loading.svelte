<script lang="ts">
	import { mode } from '$lib/store';
</script>

<div class="relative flex h-min w-min items-center justify-center">
	{#if $mode === '1-for-all'}
		<!-- Mode "1 for all" -->
		<div class="h-96 w-96 animate-pulse bg-slate-500" />
	{:else if $mode === 'lucky-4'}
		<!-- Mode "Lucky 4" -->
		<div class="flex space-x-6">
			{#each Array(4) as _}
				<div class="h-80 w-80 animate-pulse bg-slate-500" />
			{/each}
		</div>
	{/if}
</div>
