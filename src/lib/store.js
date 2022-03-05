import { writable } from 'svelte/store';
import { MatchQueue } from './service/matchesQueue.js';

export const apiKey = writable('');
export const isKeyVerified = writable(false);
export const matchQue = MatchQueue(30);
matchQue.start();
