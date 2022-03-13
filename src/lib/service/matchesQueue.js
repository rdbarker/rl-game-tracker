import { ApiQueue } from './apiQueue';
import { apiKey } from '$lib/scripts/store.js';
import { fetchFromApi } from '$lib/scripts/util';

export const MatchesQueue = (ticksPerMinute) => {
	let key;
	apiKey.subscribe((value) => {
		key = value;
	});
	const { start, pause, add } = ApiQueue(ticksPerMinute);

	const checkKey = (setter) => {
		const returnedValue = () => {
			fetchFromApi('/api/v1/check', key).then((value) => {
				if (value.error === 'opps') {
					add(returnedValue, true);
				} else {
					setter(value);
				}
			});
		};
		add(returnedValue, true);
	};

	const fetchMatches = async (setter) => {
		const returnedValue = () => {
			fetchFromApi('/api/v1/matches/?count=5', key).then((value) => {
				if (value.error === 'opps') {
					add(returnedValue, false, true);
				} else {
					setter(value);
				}
			});
		};
		add(returnedValue, false, true);
	};

	const fetchMatch = async (setter, id) => {
		const returnedValue = () => {
			fetchFromApi(`/api/v1/matches/${id}`, key).then((value) => {
				if (value.error === 'opps') {
					add(returnedValue, false, false, 60);
				} else {
					setter(value);
				}
			});
		};
		add(returnedValue, false, false, 60);
	};

	return { start, pause, checkKey, fetchMatches, fetchMatch };
};
