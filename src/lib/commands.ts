export type CommandSet = {
	command: string;
	durationMs: number;
};

export const BUFFER_TIME_MS = 500;

export const commandSets: CommandSet[] = [
	{ command: '5K > 2K', durationMs: 2000 },
	{ command: '2K > 6P', durationMs: 1500 },
	{ command: 'c.S > 6H', durationMs: 1800 },
	{ command: '5K > 2D > 236K', durationMs: 3000 },
	{ command: '2K > 2D > 214K', durationMs: 2800 }
];

export function pickRandom(sets: CommandSet[]): CommandSet {
	return sets[Math.floor(Math.random() * sets.length)];
}
