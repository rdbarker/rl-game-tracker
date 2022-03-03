import * as api from '$lib/api.js';

const DEFAULT_MATCH_COUNT = 15;

export async function get({ request, url }) {
	const headers = api.extractHeaders(request);
	const countParam = url.searchParams.get('count');
	const count = countParam ? countParam : DEFAULT_MATCH_COUNT;

	const route = `${api.BC_BASE_URL}replays/?uploader=me&count=${count}`;

	return await api.fetchResource(route, headers);
}
