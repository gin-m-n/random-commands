<script lang="ts">
	type Props = {
		durationMs: number;
		remainingMs: number;
	};

	let { durationMs, remainingMs }: Props = $props();

	let displaySeconds = $derived((remainingMs / 1000).toFixed(1));
</script>

<div class="flex items-center gap-2">
	<svg class="h-8 w-8 -rotate-90" viewBox="0 0 36 36">
		<circle cx="18" cy="18" r="15" fill="none" stroke="#374151" stroke-width="3" />
		<circle
			cx="18"
			cy="18"
			r="15"
			fill="none"
			stroke="#3b82f6"
			stroke-width="3"
			stroke-linecap="round"
			stroke-dasharray="94.25"
			stroke-dashoffset="0"
			class="timer-circle"
			style="animation-duration: {durationMs}ms"
		/>
	</svg>
	<span class="font-mono text-sm text-gray-400">{displaySeconds}s</span>
</div>

<style>
	.timer-circle {
		animation-name: countdown;
		animation-timing-function: linear;
		animation-fill-mode: forwards;
	}

	@keyframes countdown {
		from {
			stroke-dashoffset: 0;
		}
		to {
			stroke-dashoffset: 94.25;
		}
	}
</style>
