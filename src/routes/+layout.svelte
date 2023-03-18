<script lang="ts">
	import type { LayoutData } from './$types';
	import { theme, colorizedBackground } from '$lib/store';
	import Header from '$lib/layout/Header.svelte';
	import PageTransition from '$lib/transitions/PageTransition.svelte';
	import '../styles/app.css';

	export let data: LayoutData;
</script>

<Header />

<PageTransition pathname={data.pathname}>
	<main
		class="h-screen"
		class:bg-prompt-orange={$theme === 'orange' &&
			$colorizedBackground === true}
		class:bg-prompt-blue={$theme === 'blue' && $colorizedBackground === true}
	>
		<slot />
	</main>
</PageTransition>
