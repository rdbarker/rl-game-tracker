<script>
	import { createMatchStats } from '$lib/model/match';
	import { matchQue } from '$lib/scripts/store';
	import TimeHeader from '../subcomponent/TimeHeader.svelte';
	import TeamStatTable from '../subcomponent/TeamStatTable.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import MatchStats from './MatchStats.svelte';

	export let matchId;
	let matchStats;
	let loading = true;

	matchQue.fetchMatch((value) => {
		matchStats = createMatchStats(value);
		loading = false;
	}, matchId);
</script>

{#if matchStats}
	<article>
		<TimeHeader timeString={matchStats.date} />
		<div>
			<MatchStats stats={matchStats} />
			<TeamStatTable teamStats={matchStats.teams[0]} />
			<TeamStatTable teamStats={matchStats.teams[1]} />
		</div>
	</article>
{/if}
