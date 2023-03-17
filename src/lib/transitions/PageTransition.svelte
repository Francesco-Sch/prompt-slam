<!-- 
    Thanks to Evan Winter for this solution: 
    https://github.com/evanwinter/sveltekit-page-transitions
 -->
<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div
		in:fly={{ y: 10, duration: 450, delay: 500 }}
		out:fly={{ y: -5, duration: 450 }}
	>
		<slot />
	</div>
{/key}
