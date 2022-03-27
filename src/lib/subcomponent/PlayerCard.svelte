<script>
	import { activePlayerStats, activePlayerRanks, rankQue } from '$lib/scripts/store';
	import PlatformIcon from './PlatformIcon.svelte';
	import { shortenRankString } from '$lib/scripts/util';
	export let playerStats;
	export let color;
	let playerRanks;
	rankQue.fetchRank(playerStats.name, playerStats.id, playerStats.platform, (value) => {
		playerRanks = value;
	});
</script>

{#if playerStats}
	<article class="player-card {color}">
		<h6><PlatformIcon platform={playerStats.platform} />{playerStats.name}</h6>
		<div class="player-card-section">
			{#each Object.entries($activePlayerStats) as [stat, statObj]}
				{#if statObj.active}
					<div>
						<div>{statObj.name}:</div>
						<div>{playerStats[stat]}</div>
					</div>
				{/if}
			{/each}
		</div>
		<div class="player-card-divider" />
		<div class="player-card-section player-card-ranks">
			{#each Object.entries($activePlayerRanks) as [stat, statObj]}
				{#if statObj.active}
					<div>
						<div>{statObj.name}:</div>
						<div>
							{#if playerRanks}
								{#if playerRanks[statObj.value]}
									{shortenRankString(playerRanks[statObj.value].rank)}
									{shortenRankString(playerRanks[statObj.value].division)}
								{/if}
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</article>
{/if}

<style>
	h6 {
		display: flex;
		align-items: center;
	}
</style>
