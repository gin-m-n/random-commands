<script lang="ts">
	import { commandSets, BUFFER_TIME_MS, pickRandom } from '$lib/commands';
	import Card from '$lib/components/Card.svelte';
	import CircularTimer from '$lib/components/CircularTimer.svelte';
	import StartButton from '$lib/components/StartButton.svelte';
	import StopButton from '$lib/components/StopButton.svelte';

	import { onDestroy } from 'svelte';

	let isRunning = $state(false);
	let currentCommand = $state<string | null>(null);
	let currentDurationMs = $state(0);
	let remainingMs = $state(0);
	let animationKey = $state(0);
	let timeoutId: ReturnType<typeof setTimeout> | undefined;
	let intervalId: ReturnType<typeof setInterval> | undefined;
	let startTime = 0;

	function startCountdown(totalMs: number) {
		clearInterval(intervalId);
		startTime = Date.now();
		remainingMs = totalMs;
		intervalId = setInterval(() => {
			const elapsed = Date.now() - startTime;
			remainingMs = Math.max(0, totalMs - elapsed);
			if (remainingMs <= 0) clearInterval(intervalId);
		}, 50);
	}

	function start() {
		isRunning = true;
		showNext();
	}

	function stop() {
		isRunning = false;
		currentCommand = null;
		currentDurationMs = 0;
		remainingMs = 0;
		clearInterval(intervalId);
		if (timeoutId !== undefined) {
			clearTimeout(timeoutId);
			timeoutId = undefined;
		}
	}

	function showNext() {
		if (!isRunning) return;
		const picked = pickRandom(commandSets);
		currentCommand = picked.command;
		currentDurationMs = picked.durationMs + BUFFER_TIME_MS;
		animationKey++;
		startCountdown(currentDurationMs);
		timeoutId = setTimeout(() => {
			showNext();
		}, picked.durationMs + BUFFER_TIME_MS);
	}

	onDestroy(() => {
		clearInterval(intervalId);
		clearTimeout(timeoutId);
	});
</script>

<div class="flex h-screen items-center justify-center">
	<Card class="p-4">
		<div class="grid-rows grid grid-cols-1 gap-y-16">
			<div class="flex h-24 w-xl items-center justify-center text-center">
				{#if currentCommand}
					<p class="text-3xl font-bold">{currentCommand}</p>
				{:else}
					<p class="text-2xl text-gray-500">Press Start</p>
				{/if}
			</div>

			<div class="flex items-end justify-between">
				{#if isRunning && currentDurationMs > 0}
					{#key animationKey}
						<CircularTimer durationMs={currentDurationMs} {remainingMs} />
					{/key}
				{:else}
					<div></div>
				{/if}
				{#if !isRunning}
					<StartButton onclick={start} />
				{:else}
					<StopButton onclick={stop} />
				{/if}
			</div>
		</div>
	</Card>
</div>
