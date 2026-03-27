<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="rounded-lg border border-gray-700 bg-gray-900 shadow-lg {className}">
	{@render children()}
</div>
