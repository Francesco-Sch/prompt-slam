<script lang="ts">
	import { theme } from '$lib/store';
	export let label: String;
</script>

<button
	class="h-full px-20 font-redaction-50 text-xl hover:animate-unpixelate-font
          {$theme === 'orange' ? 'bg-prompt-orange' : 'bg-prompt-blue'}"
>
	{label}
</button>
