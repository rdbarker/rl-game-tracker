<script>
	import { activePlayerStats } from '$lib/scripts/store';
	import PlatformIcon from './PlatformIcon.svelte';
	export let playerStats;
	export let color;
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
			<div>
				<div>Doubles:</div>
				<div>GC III</div>
			</div>
			<div>
				<div>Threes:</div>
				<div>Diamond III</div>
			</div>
			<div>
				<div>Hoops:</div>
				<div>Platnium III</div>
			</div>
		</div>
	</article>
{/if}

<style>
	h6 {
		display: flex;
		align-items: center;
	}
</style>
