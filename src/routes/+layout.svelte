<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { theme, colorizedBackground } from '$lib/store';
	import { MetaTags } from 'svelte-meta-tags';

	import Header from '$lib/layout/Header.svelte';
	import PageTransition from '$lib/transitions/PageTransition.svelte';
	import '../styles/app.css';

	export let data: LayoutData;
</script>

<MetaTags
	title="Prompt Battle"
	description="Battle each other in an amazing prompt battle using the power of DALL-E."
	openGraph={{
		url: $page.url.href,
		title: 'Prompt Battle',
		description:
			'Battle each other in an amazing prompt battle using the power of DALL-E.',
		images: [
			{
				url: `${$page.url.origin}/og-image.png`,
				width: 1200,
				height: 630,
				alt: 'Prompt Battle'
			}
		],
		site_name: 'Prompt Battle'
	}}
	twitter={{
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image',
		title: 'Prompt Battle',
		description:
			'Battle each other in an amazing prompt battle using the power of DALL-E.',
		image: `${$page.url.origin}/twitter-image.png`,
		imageAlt: 'Prompt Battle'
	}}
	facebook={{
		appId: '1234567890'
	}}
/>

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

<style lang="postcss"></style>
