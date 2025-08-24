<script lang="ts">
	import { model } from '$lib/store';

	const models = [
		{ id: 'dall-e-2', name: 'Dall-E 2' },
		{ id: 'dall-e-3', name: 'Dall-E 3' },
		{ id: 'gpt-image-1', name: 'GPT Image 1' }
	];
</script>

<div class="space-y-2">
	<label for="model-select" class="block text-sm font-medium text-slate-700">
		Model
	</label>

	<select
		id="model-select"
		bind:value={$model}
		class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
	>
		{#each models as model}
			<option value={model.id}>
				{model.name}
			</option>
		{/each}
	</select>
</div>
