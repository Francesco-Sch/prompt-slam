<script lang="ts">
	import { amountOfImages } from '$lib/store';

	const modes = [
		{ amount: 1, label: '🎲 1 for all' },
		{ amount: 4, label: '🍀 Lucky 4' }
	];
</script>

<div class="space-y-2">
	<label for="mode-select" class="block text-sm font-medium text-slate-700">
		Game mode
	</label>

	<select
		id="mode-select"
		bind:value={$amountOfImages}
		class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
	>
		{#each modes as mode}
			<option value={mode.amount}>
				{mode.label}
			</option>
		{/each}
	</select>
</div>
