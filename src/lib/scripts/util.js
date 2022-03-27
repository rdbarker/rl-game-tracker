import { browser } from '$app/env';

export const fetchFromApi = async (route, auth) => {
	let headers = new Headers();
	if (auth) {
		headers.append('Authorization', auth);
	}
	const requestOptions = { method: 'GET', headers };
	const response = await fetch(route, requestOptions);
	return await response.json();
};

export function numberToPercent(number, decimalPlaces = 1) {
	return number.toFixed(decimalPlaces) + '%';
}

export const storeItem = (itemKey, value) => {
	if (browser) {
		localStorage.setItem(itemKey, value);
	}
};

export const getItem = (itemKey, defaultValue = '') => {
	if (browser) {
		const value = localStorage.getItem(itemKey);
		return value ? value : defaultValue;
	}
};

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function shortenRankString(string) {
	return string
		.replace('Grand Champion', 'GC')
		.replace('Platinum', 'Plat')
		.replace('Champion', 'Champ')
		.replace('Diamond', 'Dia')
		.replace('Division', 'Div');
}
