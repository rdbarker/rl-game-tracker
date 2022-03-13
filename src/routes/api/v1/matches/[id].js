import * as api from '$lib/scripts/api.js';

export async function get({ request, params }) {
	const headers = api.extractHeaders(request);
	const route = `${api.BC_BASE_URL}replays/${params.id}`;
	return await api.fetchResource(route, headers);
}
