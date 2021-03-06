import * as api from '$lib/scripts/api.js';

export async function get({ request }) {
	const headers = api.extractHeaders(request);
	const response = await api.fetchResource(api.BC_BASE_URL, headers);
	const status = response['body']['chaser'] ? true : false;
	return {
		body: { status }
	};
}
