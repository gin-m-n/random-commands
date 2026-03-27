<script lang="ts">
	let { onclick }: { onclick: () => void } = $props();
</script>

<button
	class="cursor-pointer rounded-xl border border-red-500 bg-red-600/20 px-6 py-3 text-xl text-red-400 hover:bg-red-600/40"
	{onclick}
>
	Stop
</button>
