<script>
	import MatchStat from '$lib/subcomponent/MatchStat.svelte';
	import { activeMatchStats } from '$lib/scripts/store';

	export let stats;
	export let color = 'white';
</script>

<article class="player-card">
	<h6>Match Stats</h6>
	{#each Object.entries($activeMatchStats) as [stat, statObj]}
		{#if statObj.active}
			<MatchStat
				leftValue={stats.teams[0][stat]}
				rightValue={stats.teams[1][stat]}
				leftColor={stats.teams[0]['color']}
			>
				{statObj.name}</MatchStat
			>
		{/if}
	{/each}
</article>
