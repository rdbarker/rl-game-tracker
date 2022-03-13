import { numberToPercent } from '$lib/scripts/util';

export const createMatchStats = (dataFromFetch) => {
	const findWinningTeam = () => {
		return dataFromFetch.blue.stats.core.goals > dataFromFetch.orange.stats.core.goals
			? 'blue'
			: 'orange';
	};
	const findYourTeam = () => {
		let isPlayerOrange = dataFromFetch.orange.players
			.map((player) => player.id.id)
			.includes(dataFromFetch.uploader.steam_id);
		return isPlayerOrange ? 'orange' : 'blue';
	};
	const buildTeamStats = (teamColor) => {
		return {
			color: teamColor,
			goals: dataFromFetch[teamColor].stats.core.goals,
			shots: dataFromFetch[teamColor].stats.core.shots,
			saves: dataFromFetch[teamColor].stats.core.saves,
			players: buildPlayerStats(teamColor)
		};
	};
	const buildWinningTeam = (winningTeam) => {
		return winningTeam === 'blue'
			? [buildTeamStats('blue'), buildTeamStats('orange')]
			: [buildTeamStats('orange'), buildTeamStats('blue')];
	};

	const buildPlayerStats = (teamColor) => {
		return dataFromFetch[teamColor].players.map((player) => {
			return {
				name: player.name,
				platform: player.id.platform,
				id: player.id.id,
				score: player.stats.core.score,
				goals: player.stats.core.goals,
				shots: player.stats.core.shots,
				assists: player.stats.core.assists,
				saves: player.stats.core.saves,
				shotPercentage: numberToPercent(player.stats.core.shooting_percentage, 0),
				demos: player.stats.demo.inflicted
			};
		});
	};
	return {
		date: dataFromFetch.date,
		map: dataFromFetch.map_code,
		matchType: dataFromFetch.match_type,
		teamSize: dataFromFetch.team_size,
		winningTeam: findWinningTeam(),
		yourTeam: findYourTeam(),
		teams: buildWinningTeam(findWinningTeam())
	};
};
