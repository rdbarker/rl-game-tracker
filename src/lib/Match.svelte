<script>
	import { createMatchStats } from '$lib/model/match';
	import { matchQue } from '$lib/store';
	import TimeHeader from './match/TimeHeader.svelte';

	export let matchId;
	let matchStats;
	let loading = true;

	matchQue.fetchMatch((value) => {
		matchStats = createMatchStats(value);
		loading = false;
	}, matchId);
</script>

{#if matchStats}
	<article><TimeHeader timeString={matchStats.date} /></article>
{/if}
