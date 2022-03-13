<script>
	import Setting from '$lib/subcomponent/Setting.svelte';
	import { activePlayerStats, activeMatchStats } from '$lib/scripts/store';
	let isOn = true;
</script>

<fieldset>
	<legend>Player Match Stats</legend>
	<div class="grid-auto">
		<Setting name="player-score" bind:on={$activePlayerStats.score.active}>Score</Setting>
		<Setting name="player-goals" bind:on={$activePlayerStats.goals.active}>Goals</Setting>
		<Setting name="player-shots" bind:on={$activePlayerStats.shots.active}>Shots</Setting>
		<Setting name="player-shotper" bind:on={$activePlayerStats.shotPercentage.active}
			>Shot %</Setting
		>
		<Setting name="player-assists" bind:on={$activePlayerStats.assists.active}>Assists</Setting>
		<Setting name="player-saves" bind:on={$activePlayerStats.saves.active}>Saves</Setting>
		<Setting name="player-demos" bind:on={$activePlayerStats.demos.active}>Demos</Setting>
	</div>
</fieldset>

<fieldset>
	<legend>Team Match Stats</legend>
	<div class="grid-auto">
		<Setting name="team-goals" bind:on={$activeMatchStats.goals.active}>Goals</Setting>
		<Setting name="team-shots" bind:on={$activeMatchStats.shots.active}>Shots</Setting>
		<Setting name="team-saves" bind:on={$activeMatchStats.saves.active}>Saves</Setting>
	</div>
</fieldset>

<style>
	.grid-auto {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
	}
</style>
