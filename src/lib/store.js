import { writable } from 'svelte/store';
import { MatchesQueue } from './service/matchesQueue.js';

export const apiKey = writable('');
export const isKeyVerified = writable(false);
export const matchQue = MatchesQueue(30);
