import { writable, readable } from 'svelte/store';
import { MatchesQueue } from './service/matchesQueue.js';

export const apiKey = writable('');
export const isKeyVerified = writable(false);
export const matchQue = MatchesQueue(30);

const PLAYER_STATS = new Map([
	['Score', 'score'],
	['Goals', 'goals'],
	['Shots', 'shots'],
	['Shot%', 'shotPercentage'],
	['Assists', 'assists'],
	['Saves', 'saves'],
	['Demos', 'demos']
]);

export const totalAvailblePlayerStats = readable(PLAYER_STATS);
export const activeStats = writable(Array.from(PLAYER_STATS.keys()));
