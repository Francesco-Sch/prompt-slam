<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import ActionBar from '$lib/layout/ActionBar.svelte';
</script>

<div class="flex h-full flex-col">
	<form class="mx-6 my-auto">
		<label class="font-sans" for="user-name">Enter your username:</label>
		<input
			name="user-name"
			type="text"
			class="mt-5 w-full border-0 border-b border-slate-900 font-redaction text-8xl focus:border-b-prompt-orange focus:outline-none focus:ring-0"
		/>
	</form>

	<ActionBar>
		<div class="my-4 ml-4">
			<ThemeSwitch />
		</div>
		<p>Hello</p>
	</ActionBar>
</div>
