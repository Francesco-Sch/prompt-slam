<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { slide, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { user, colorizedBackground, mode, model } from '$lib/store';

	import ActionBar from '$lib/layout/ActionBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Result from '$lib/components/Result.svelte';
	import ChooseResult from '$lib/components/ChooseResult.svelte';

	$colorizedBackground = true;

	let loading = false;
	let prompt: string;
	let urls: string[];

	const handleSubmit: SubmitFunction = () => {
		$colorizedBackground = false;
		loading = true;

		return async ({ action, result }) => {
			let response = JSON.parse(JSON.stringify(result));

			if (response.status == 200) {
				urls = response.data.data;

				// Makes sure that the image is loaded properly
				setTimeout(() => {
					loading = false;
				}, 1000);
			} else {
				loading = false;
				alert('An error occurred, please try again.');
			}
		};
	};
</script>

<div class="flex h-full flex-col">
	<div class="flex h-full items-center justify-center">
		<!-- Prompting -->
		{#if !loading && urls == undefined}
			<form
				id="promptForm"
				method="POST"
				use:enhance={handleSubmit}
				class="h-full w-full px-6 pb-6 pt-14"
			>
				<input type="hidden" name="model" value={$model} />
				<input type="hidden" name="mode" value={$mode} />
				<label for="prompt">
					<textarea name="prompt" class="prompt-input" bind:value={prompt} />
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
		{#if !loading && urls != undefined}
			<div
				in:fly={{
					delay: 300,
					duration: 1000,
					y: 25,
					opacity: 0,
					easing: quintOut
				}}
			>
				{#if $mode === 'lucky-4'}
					<ChooseResult images={urls} {prompt} user={$user} />
				{:else}
					<Result image={urls} {prompt} user={$user} />
				{/if}
			</div>
		{/if}
	</div>

	<!-- Prompting -->
	{#if !loading && urls == undefined}
		<div out:slide={{ duration: 1000, easing: quintOut }}>
			<ActionBar>
				<div class="my-4 ml-4">
					<p class="text-lg text-slate-900">{$user}</p>
				</div>
				<div class="ml-auto">
					<Button label="Generate the image" type="submit" form="promptForm" />
				</div>
			</ActionBar>
		</div>
	{/if}

	<!-- Start a new game -->
	{#if !loading && urls != undefined}
		<div in:slide={{ duration: 1000, easing: quintOut }}>
			<ActionBar>
				<Button
					label="Start a new game"
					type="button"
					href="/"
					class="w-full"
				/>
			</ActionBar>
		</div>
	{/if}
</div>

<style lang="postcss">
	.prompt-input {
		@apply h-full w-full bg-transparent font-redaction text-8xl text-slate-900 focus:outline-none focus:ring-0;
	}
</style>
