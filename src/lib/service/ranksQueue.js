import { ApiQueue } from './apiQueue';
import axios from 'axios';

export const RankQueue = (ticksPerMinute) => {
	const ROUTE_STRING = '/api/v1/ranks';
	const platforms = {
		steam: 'steam',
		xbox: 'xbl',
		ps4: 'psn',
		epic: 'epic',
		psynet: 'switch'
	};

	const buildUrl = (playerName, playerId, bcPlatformName) => {
		const profileValue = bcPlatformName === 'steam' ? playerId : playerName;
		const profileValueEncoded = encodeURIComponent(profileValue);
		return `${ROUTE_STRING}/${platforms[bcPlatformName]}/${profileValueEncoded}`;
	};

	const { start, pause, add } = ApiQueue(ticksPerMinute);

	const fetchRank = async (playerName, playerId, bcPlatformName, setter) => {
		const returnedValue = async () => {
			try {
				const response = await axios.get(buildUrl(playerName, playerId, bcPlatformName));
				if (response.status === 200) {
					setter(response.data);
				} else {
					add(returnedValue);
				}
			} catch (error) {
				add(returnedValue);
			}
		};
		add(returnedValue);
	};

	return { start, pause, fetchRank };
};
