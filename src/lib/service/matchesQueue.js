import { ApiQueue } from './apiQueue';
import { apiKey } from '$lib/store.js';
import { fetchFromApi } from '$lib/util';

export const MatchesQueue = (ticksPerMinute) => {
	let key;
	apiKey.subscribe((value) => {
		key = value;
	});
	const { start, pause, add } = ApiQueue(ticksPerMinute);
	const checkKey = async (setter) => {
		const returnedValue = () => {
			fetchFromApi('/api/v1/check', key).then((value) => {
				setter(value);
			});
		};
		add(returnedValue, true);
	};

	return { start, pause, checkKey };
};
