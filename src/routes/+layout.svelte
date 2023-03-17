<script lang="ts">
	import Header from '$lib/layout/Header.svelte';
	import '../styles/app.css';
</script>

<Header />

<main class="h-screen">
	<slot />
</main>
