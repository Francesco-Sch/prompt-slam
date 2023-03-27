<script lang="ts">
	import { IconDownload } from '@tabler/icons-svelte';
	export let src: string;
	export let alt: string;

	export let clientHeight;
</script>

<div class="group relative h-max" bind:clientHeight>
	<!-- Download Button -->
	<a
		href={src}
		target="_blank"
		rel="noopener noreferrer"
		download
		class="absolute top-4 right-4 rounded-lg bg-white p-2 opacity-0 transition duration-200 hover:bg-slate-200 group-hover:opacity-100"
	>
		<IconDownload size={24} stroke={2} />
	</a>

	<!-- Image -->
	<img {src} {alt} />
</div>
