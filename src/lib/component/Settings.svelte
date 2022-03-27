<script>
	import Setting from '$lib/subcomponent/Setting.svelte';
	import { activePlayerStats, activeMatchStats, activePlayerRanks } from '$lib/scripts/store';
	import KeyInput from './KeyInput.svelte';
	console.log($activePlayerRanks);
</script>

<details>
	<summary>Settings</summary>
	<KeyInput />
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

	<fieldset>
		<legend>Team Match Stats</legend>
		<div class="grid-auto">
			<Setting name="rank-ones" bind:on={$activePlayerRanks.ones.active}>1v1s</Setting>
			<Setting name="rank-doubles" bind:on={$activePlayerRanks.doubles.active}>2v2</Setting>
			<Setting name="rank-threes" bind:on={$activePlayerRanks.threes.active}>3v3</Setting>
			<Setting name="rank-unranked" bind:on={$activePlayerRanks.unranked.active}>Unranked</Setting>
			<Setting name="rank-rumble" bind:on={$activePlayerRanks.rumble.active}>Rumble</Setting>
			<Setting name="rank-hoops" bind:on={$activePlayerRanks.hoops.active}>Hoops</Setting>
			<Setting name="rank-dropshot" bind:on={$activePlayerRanks.dropshot.active}>Dropshot</Setting>
			<Setting name="rank-snowday" bind:on={$activePlayerRanks.snowday.active}>Snowday</Setting>
			<Setting name="rank-tournaments" bind:on={$activePlayerRanks.tournament.active}>
				Tournaments
			</Setting>
		</div>
	</fieldset>
</details>

<style>
	.grid-auto {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}
</style>
