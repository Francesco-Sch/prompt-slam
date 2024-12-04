<script lang="ts">
	import { slide, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Result from './Result.svelte';

	export let images: string[];
	export let prompt: string;
	export let user: string;

	let selectedImage: string | null = null;
</script>

{#if selectedImage}
	<div
		in:fly={{
			delay: 300,
			duration: 1000,
			y: 25,
			opacity: 0,
			easing: quintOut
		}}
	>
		<Result image={[selectedImage]} {prompt} {user} />
	</div>
{:else}
	<div class=" w-full px-12 py-4">
		<div class="mb-6">
			<p class="text-lg text-slate-600">Choose your image</p>
		</div>

		<div class="grid grid-cols-4 gap-4">
			{#each images as image, i}
				<button
					on:click={() => (selectedImage = image)}
					class="group relative transition-all duration-200 hover:scale-105 focus:outline-none"
				>
					<div class="overflow-hidden rounded-lg">
						<img
							src={image}
							alt="Generated image {i + 1}"
							class="h-auto w-full"
						/>
						<div
							class="absolute inset-0 rounded-lg bg-slate-900 opacity-0 transition-opacity group-hover:opacity-10"
						/>
					</div>
				</button>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	:global(.result-transition-enter) {
		opacity: 0;
		transform: translateY(20px);
	}
	:global(.result-transition-enter-active) {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 300ms, transform 300ms;
	}
</style>
