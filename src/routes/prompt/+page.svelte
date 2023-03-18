<script lang="ts">
	import { username, colorizedBackground } from '$lib/store';
	import { enhance, type SubmitFunction } from '$app/forms';
	import ActionBar from '$lib/layout/ActionBar.svelte';
	import Button from '$lib/components/Button.svelte';

	$colorizedBackground = true;

	let loading = false;
	let url: string;

	const handleSubmit: SubmitFunction = () => {
		loading = true;

		return async ({ action, result }) => {
			let response = JSON.parse(JSON.stringify(result));

			if (response.status == 200) {
				url = response.data.url;

				loading = false;

				console.log(url);
			} else {
				loading = false;
				alert('An error occurred, please try again.');
			}
		};
	};
</script>

<div class="flex h-full flex-col">
	<form
		id="promptForm"
		method="POST"
		use:enhance={handleSubmit}
		class="mx-6 mb-6 mt-14 h-full"
	>
		<label for="prompt">
			<textarea name="prompt" class="prompt-input" />
		</label>
	</form>

	<ActionBar>
		<div class="my-4 ml-4">
			<p class="text-lg">{$username}</p>
		</div>
		<div class="ml-auto">
			<Button label="Generate the image" type="submit" form="promptForm" />
		</div>
	</ActionBar>
</div>

<style lang="postcss">
	.prompt-input {
		@apply h-full w-full bg-transparent font-redaction text-8xl focus:outline-none focus:ring-0;
	}
</style>
