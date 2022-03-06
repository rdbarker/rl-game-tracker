export const createMatches = (apiData, map = new Map()) => {
	apiData.list.forEach((element) => {
		if (!map.has(element.id)) {
			map.set(element.id, {
				date: element.date,
				mapCode: element.map_code,
				mapName: element.map_name,
				playlistName: element.playlist_name,
				overtime: element.overtime
			});
		}
	});
	return sortMatches(map);
};

const sortMatches = (map) => {
	return new Map(
		[...map].sort(([key1, value1], [key2, value2]) => {
			return new Date(value2.date) - new Date(value1.date);
		})
	);
};
