<script>
	import { createMatchStats } from '$lib/model/match';
	import { matchQue } from '$lib/scripts/store';
	import TimeHeader from '../subcomponent/TimeHeader.svelte';
	import { capitalizeFirstLetter } from '$lib/scripts/util';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import MatchStats from './MatchStats.svelte';
	import PlayerCard from '$lib/subcomponent/PlayerCard.svelte';

	export let matchId;
	let matchStats;
	let loading = true;

	matchQue.fetchMatch((value) => {
		matchStats = createMatchStats(value);
		loading = false;
	}, matchId);
</script>

{#if matchStats}
	<div class="match" transition:slide={{ delay: 250, duration: 400, easing: quintOut }}>
		<TimeHeader timeString={matchStats.date} />
		<div>
			<div class="grid-auto">
				<MatchStats stats={matchStats} color={matchStats.yourTeam} />
				{#each matchStats.teams[0].players as player}
					<PlayerCard color={matchStats.teams[0].color} playerStats={player} />
				{/each}
				{#each matchStats.teams[1].players as player}
					<PlayerCard color={matchStats.teams[1].color} playerStats={player} />
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.match {
		margin-bottom: 2em;
		padding: 1em;
		position: relative;
	}
	.match::after {
		content: '';
		background-image: url('static/maps/01.jpg');
		background-size: cover;
		opacity: 0.1;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: -1;
		border-radius: 8px;
	}
	.grid-auto {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	}
</style>
