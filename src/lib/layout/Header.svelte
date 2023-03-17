<script>
	import { theme } from '$lib/store';
</script>

<header class="absolute inset-x-0 top-0 flex items-center justify-center py-3">
	<h1
		class="font-redaction-50 text-base hover:animate-unpixelate-font 
			   {$theme === 'orange' ? 'text-prompt-orange' : 'text-prompt-blue'}"
	>
		Prompt Battle
	</h1>
</header>
