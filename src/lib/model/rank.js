export const createRanks = (data) => {
	let obj = {};
	data.data.segments.forEach((segment) => {
		const segmentName = segment.metadata.name;
		if (segmentName != 'Lifetime') {
			obj[segmentName] = {
				rank: segment.stats.tier.metadata.name,
				division: segment.stats.division.metadata.name,
				mmr: segment.stats.rating.value
			};
		}
		console.log(segment);
	});
	return obj;
};
