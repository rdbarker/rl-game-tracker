import { writable, readable } from 'svelte/store';
import { MatchesQueue } from '../service/matchesQueue.js';
import { getItem } from './util.js';

function persistentStore(storageKey, defaultValue) {
	try {
		const currentStoredValue = localStorage.getItem(storageKey);
		const storeStartingValue = currentStoredValue ? JSON.parse(currentStoredValue) : defaultValue;

		const store = writable(storeStartingValue);

		const set = (valueToSet) => {
			store.set(valueToSet);
			localStorage.setItem(storageKey, JSON.stringify(valueToSet));
		};
		return {
			subscribe: store.subscribe,
			set
		};
	} catch {
		return writable(defaultValue);
	}
}
const defaultPlayerStats = {
	score: {
		active: true,
		name: 'Score'
	},
	goals: {
		active: true,
		name: 'Goals'
	},
	shots: {
		active: true,
		name: 'Shots'
	},
	shotPercentage: {
		active: true,
		name: 'Shot%'
	},
	assists: {
		active: true,
		name: 'Assists'
	},
	saves: {
		active: true,
		name: 'Saves'
	},
	demos: {
		active: true,
		name: 'Demos'
	}
};

const defaultMatchStats = {
	goals: {
		active: true,
		name: 'Goals'
	},
	shots: {
		active: true,
		name: 'Shots'
	},
	saves: {
		active: true,
		name: 'Saves'
	}
};

export const apiKey = writable(getItem('bckey'));
export const isKeyVerified = writable(false);
export const matchQue = MatchesQueue(60);

export const activePlayerStats = persistentStore('playerStats', defaultPlayerStats);
export const activeMatchStats = persistentStore('matchStats', defaultMatchStats);
