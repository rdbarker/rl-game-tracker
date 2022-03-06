<script>
	import { matchQue } from '$lib/store';
	import Match from '$lib/Match.svelte';
	import { createMatches } from '$lib/model/matches';

	let matches = new Map();
	matchQue.fetchMatches((value) => {
		matches = createMatches(value, matches);
	});
</script>

<div>
	{#each [...matches] as [matchId, matchBasicStats] (matchId)}
		<Match {matchId} />
	{/each}
</div>
