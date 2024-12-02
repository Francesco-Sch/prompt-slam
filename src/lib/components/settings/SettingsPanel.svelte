<script lang="ts">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	import SelectMode from './SelectMode.svelte';
	import SelectModel from './SelectModel.svelte';
	import ThemeSwitch from './ThemeSwitch.svelte';

	export let show = false;
	let settingsContainer: HTMLDivElement;

	const dispatch = createEventDispatcher();

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as Element;

		// Only proceed if the panel is shown
		if (!show) return;

		// Check if the click target is outside the settings container
		if (settingsContainer && !settingsContainer.contains(target)) {
			dispatch('close');
		}
	}

	function handlePanelClick(event: MouseEvent | KeyboardEvent) {
		// Stop the click event from reaching the window event listener
		event.stopPropagation();
	}
</script>

<svelte:window on:click={handleClickOutside} />

{#if show}
	<div
		on:click={handlePanelClick}
		on:keypress={handlePanelClick}
		bind:this={settingsContainer}
		class="settings-panel absolute bottom-full left-0 mb-10 w-64 rounded-lg bg-slate-100 p-4"
		transition:slide={{ duration: 200, axis: 'x' }}
	>
		<div class="space-y-4">
			<h3 class="font-redaction-50 text-2xl">Settings</h3>
			<div class="space-y-2">
				<SelectMode />
				<SelectModel />
				<hr class="border-t border-slate-300" />
				<ThemeSwitch />
			</div>
		</div>
	</div>
{/if}

<style>
	.settings-panel {
		transform-origin: bottom left;
	}
</style>
