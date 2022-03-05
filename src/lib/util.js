export const fetchFromApi = async (route, auth) => {
	let headers = new Headers();
	if (auth) {
		headers.append('Authorization', auth);
	}
	const requestOptions = { method: 'GET', headers };
	const response = await fetch(route, requestOptions);
	return await response.json();
};
