/** @type {import(./replays)}.RequestHandler */
export async function get({ request, url }) {
	const headerAuth = request.headers.get('Authorization');
	const requestOptions = {
		headers: { Authorization: headerAuth }
	};
	const countParam = url.searchParams.get('count');
	const count = countParam ? countParam : 15;
	const route = `https://ballchasing.com/api/replays/?uploader=me&count=${count}`;

	const response = await fetch(route, requestOptions);
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
