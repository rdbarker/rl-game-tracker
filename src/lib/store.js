import { writable } from 'svelte/store';
import { MatchesQueue } from '$lib/service/matchesQueue';

export const apiKey = writable('');
export const isKeyVerified = writable(false);
export const matchQue = MatchesQueue(30);
matchQue.start();
