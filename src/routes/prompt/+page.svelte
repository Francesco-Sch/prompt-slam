<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { slide, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { username, colorizedBackground } from '$lib/store';

	import ActionBar from '$lib/layout/ActionBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Loading from '$lib/components/Loading.svelte';

	$colorizedBackground = true;

	let loading = false;
	let prompt: string;
	let url: string;

	const handleSubmit: SubmitFunction = () => {
		$colorizedBackground = false;
		loading = true;

		console.log(url);

		return async ({ action, result }) => {
			// let response = JSON.parse(JSON.stringify(result));
			// if (response.status == 200) {
			// 	url = response.data.url;
			// 	loading = false;
			// 	console.log(url);
			// } else {
			// 	loading = false;
			// 	alert('An error occurred, please try again.');
			// }
			setTimeout(() => {
				loading = false;
				url = 'cool';
			}, 2000);
		};
	};
</script>

<div class="flex h-full flex-col">
	<div class="flex h-full items-center justify-center">
		<!-- Prompting -->
		{#if !loading && url == undefined}
			<form
				id="promptForm"
				method="POST"
				use:enhance={handleSubmit}
				class="h-full w-full px-6 pb-6 pt-14"
			>
				<label for="prompt">
					<textarea name="prompt" class="prompt-input" />
				</label>
			</form>
		{/if}

		<!-- Loading state / Sending the request to the api -->
		{#if loading}
			<div
				in:fly={{
					delay: 300,
					duration: 1000,
					y: 25,
					opacity: 0,
					easing: quintOut
				}}
			>
				<Loading />
			</div>
		{/if}

		<!-- Display the result -->
		<!-- svelte-ignore empty-block -->
		{#if !loading && url != undefined}{/if}
	</div>

	<!-- Prompting -->
	{#if !loading && url == undefined}
		<div out:slide={{ duration: 1000, easing: quintOut }}>
			<ActionBar>
				<div class="my-4 ml-4">
					<p class="text-lg text-slate-900">{$username}</p>
				</div>
				<div class="ml-auto">
					<Button label="Generate the image" type="submit" form="promptForm" />
				</div>
			</ActionBar>
		</div>
	{/if}

	<!-- Start a new game -->
	{#if !loading && url != undefined}
		<div in:slide={{ duration: 1000, easing: quintOut }}>
			<ActionBar>
				<Button label="Start a new game" type="submit" form="promptForm" />
			</ActionBar>
		</div>
	{/if}
</div>

<style lang="postcss">
	.prompt-input {
		@apply h-full w-full bg-transparent font-redaction text-8xl text-slate-900 focus:outline-none focus:ring-0;
	}
</style>
