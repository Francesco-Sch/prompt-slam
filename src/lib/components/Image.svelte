<script lang="ts">
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
		class="absolute right-4 top-4 rounded-lg bg-white px-3 py-2 opacity-0 transition duration-200 hover:bg-slate-200 group-hover:opacity-100"
	>
		↓
	</a>

	<!-- Image -->
	<img {src} {alt} />
</div>
