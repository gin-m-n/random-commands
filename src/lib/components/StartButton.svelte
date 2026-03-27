<script lang="ts">
	let { onclick }: { onclick: () => void } = $props();
</script>

<button
	class="cursor-pointer rounded-xl border border-blue-500 bg-blue-600/20 px-6 py-3 text-xl text-blue-400 hover:bg-blue-600/40"
	{onclick}
>
	Start
</button>
