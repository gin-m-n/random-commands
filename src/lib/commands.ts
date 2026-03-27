export type CommandSet = {
	command: string;
	durationMs: number;
};

export const BUFFER_TIME_MS = 1000;
const DEFAULT_DURATION = 14000;

export const commandSets: CommandSet[] = [
	{ command: 'カース > 両手 > スケゴ > 片手 > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > スケゴ > 片手 > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > スケゴ > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > スケゴ > 片手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > スケゴ > 集中', durationMs: DEFAULT_DURATION },

	{ command: '両手 > スケゴ > 片手 > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > 片手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > 集中', durationMs: DEFAULT_DURATION },

	{ command: '両手 > スケゴ > カース > 片手 > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > カース > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > カース > 片手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > スケゴ > カース > 集中', durationMs: DEFAULT_DURATION },

	{ command: '両手 > カース > 両手 > 片手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > カース > 片手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: '両手 > カース > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 片手 > 両手 > 集中', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > 集中', durationMs: DEFAULT_DURATION },
	// 接近択
	{ command: 'カース > 片手接近 > 前転 > 片手 > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 片手接近 > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > Jダッシュ > (表)片手射撃 > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > Jダッシュ > (裏)片手射撃固め > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > Jダッシュ > (表)S固め > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > Jダッシュ > (裏)D固め > 近S', durationMs: DEFAULT_DURATION },
	{ command: 'カース > 両手 > 両手解除 > 片手接近 > 前転 > 近S', durationMs: DEFAULT_DURATION }
];

export function pickRandom(sets: CommandSet[]): CommandSet {
	return sets[Math.floor(Math.random() * sets.length)];
}
