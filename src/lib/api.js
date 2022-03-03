export const BC_BASE_URL = 'https://ballchasing.com/api/';
export const RANK_BASE_URL = 'https://api.tracker.gg/api/v2/rocket-league/standard/profile/';

export async function fetchResource(url, headers) {
	const response = await fetch(url, headers);
	const json = await response.json();
	if (json) {
		return {
			body: json
		};
	} else {
		return {
			body: { error: 'opps' }
		};
	}
}

export function extractHeaders(request) {
	const authToken = request.headers.get('Authorization');
	if (authToken) {
		return {
			headers: { Authorization: authToken }
		};
	} else return {};
}
