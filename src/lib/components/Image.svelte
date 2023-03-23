<script lang="ts">
	export let src: string;
	export let alt: string;

	export let clientHeight;
</script>

<div class="h-max" bind:clientHeight>
	<img {src} {alt} />
</div>
