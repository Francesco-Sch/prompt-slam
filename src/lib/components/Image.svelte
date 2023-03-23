<script lang="ts">
	import { IconDownload } from '@tabler/icons-svelte';
	export let src: string;
	export let alt: string;

	export let clientHeight;
</script>

<div class="relative h-max" bind:clientHeight>
	<!-- Download Button -->
	<a
		href={src}
		download
		class="absolute top-4 right-4 rounded-lg bg-slate-50 p-2 transition-colors hover:bg-slate-200"
	>
		<IconDownload size={24} stroke={2} />
	</a>

	<img {src} {alt} />
</div>
