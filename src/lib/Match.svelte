<script>
	import { createMatchStats } from '$lib/model/match';
	import { matchQue } from '$lib/store';
	import TimeHeader from './match/TimeHeader.svelte';
	import TeamStatTable from './match/TeamStatTable.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let matchId;
	let matchStats;
	let loading = true;

	matchQue.fetchMatch((value) => {
		matchStats = createMatchStats(value);
		loading = false;
	}, matchId);
</script>

{#if matchStats}
	<article transition:slide={{ delay: 250, duration: 400, easing: quintOut }}>
		<TimeHeader timeString={matchStats.date} />
		<div class="grid">
			<TeamStatTable teamStats={matchStats.teams[0]} />
			<TeamStatTable teamStats={matchStats.teams[1]} />
		</div>
	</article>
{/if}
