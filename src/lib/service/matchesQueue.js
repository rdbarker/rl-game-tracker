import { ApiQueue } from './apiQueue';
import { apiKey } from '$lib/store';
import { fetchFromApi } from '$lib/util';

let key;
const unsubscribe = apiKey.subscribe((value) => {
	key = value;
});

export const MatchQueue = (ticksPerMinute) => {
	const { start, pause, add } = ApiQueue(ticksPerMinute);
	const checkKey = (setter) => {
		const returnedValue = async () => {
			return await fetchFromApi('/api/v1/check', key);
		};
		add(returnedValue, true);

		return returnedValue;
	};

	return { start, pause, checkKey };
};
