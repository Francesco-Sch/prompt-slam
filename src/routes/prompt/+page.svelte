<script lang="ts">
	import { username, theme } from '$lib/store';
	import type { ActionData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';
	import ActionBar from '$lib/layout/ActionBar.svelte';
	import Button from '$lib/components/Button.svelte';

	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;

		return async ({ action, result }) => {
			let resultObject = JSON.parse(JSON.stringify(result));

			console.log(resultObject);
		};
	};

	export let form: ActionData;
</script>

<div class="flex h-full flex-col">
	<form method="POST" use:enhance class="mx-6 mb-6 mt-14 h-full">
		<label for="prompt">
			<textarea name="prompt" class="prompt-input" />
		</label>
	</form>

	{#if form?.success}{/if}

	<ActionBar>
		<div class="my-4 ml-4">
			<p>{$username}</p>
		</div>
		<div class="ml-auto">
			<Button label="Generate the image" />
		</div>
	</ActionBar>
</div>

<style lang="postcss">
	.prompt-input {
		@apply h-full w-full font-redaction text-8xl focus:outline-none focus:ring-0;
	}
</style>
