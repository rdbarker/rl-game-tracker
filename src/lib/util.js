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
	localStorage.setItem(itemKey, value);
};

export const getItem = (itemKey) => {
	const value = localStorage.getItem(itemKey);
	return value ? value : '';
};
