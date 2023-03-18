<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/layout/Header.svelte';
	import PageTransition from '$lib/transitions/PageTransition.svelte';
	import '../styles/app.css';

	export let data: LayoutData;
</script>

<Header />

<PageTransition pathname={data.pathname}>
	<main class="h-screen">
		<slot />
	</main>
</PageTransition>
