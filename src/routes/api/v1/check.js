import * as api from '$lib/api.js';

export async function get({ request }) {
	const headers = api.extractHeaders(request);
	const response = await api.fetchResource(api.BC_BASE_URL, headers);
	console.log(response);
	const status = response['body']['chaser'] ? true : false;
	return {
		body: { status }
	};
}