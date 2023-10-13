<script lang="ts">
	import { user, theme, colorizedBackground } from '$lib/store';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import ActionBar from '$lib/layout/ActionBar.svelte';
	import Button from '$lib/components/Button.svelte';

	$colorizedBackground = false;
</script>

<div class="flex h-full flex-col">
	<form class="mx-6 my-auto">
		<label class="font-sans" for="user-name">
			Enter your username:
			<input
				bind:value={$user}
				name="user-name"
				type="text"
				class="mt-5 w-full border-0 border-b border-slate-900 font-redaction text-8xl text-slate-900 focus:outline-none focus:ring-0
				{$theme === 'orange'
					? 'focus:border-b-prompt-orange'
					: 'focus:border-b-prompt-blue'}
				"
			/>
		</label>
	</form>

	<ActionBar>
		<div class="my-4 ml-4">
			<ThemeSwitch />
		</div>
		<div class="ml-auto">
			<Button label="Start the slam" href="/prompt" />
		</div>
	</ActionBar>
</div>
