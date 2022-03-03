export async function get({ request, url }) {
	const route = `https://api.tracker.gg/api/v2/rocket-league/standard/profile/steam/76561198031153890`;

	const response = await fetch(route);
	const json = await response.json();

	if (json) {
		return {
			body: { json }
		};
	} else {
		return {
			body: { error: 'opps' }
		};
	}
}
