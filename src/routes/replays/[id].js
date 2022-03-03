/** @type {import(./replays[id])}.RequestHandler */
export async function get({ request, params, url }) {
	console.log(url.searchParams.get('you'));
	const headerAuth = request.headers.get('Authorization');
	const requestOptions = {
		headers: { Authorization: headerAuth }
	};
	const route = `https://ballchasing.com/api/replays/${params.id}`;

	const response = await fetch(route, requestOptions);
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
