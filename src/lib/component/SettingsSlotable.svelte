<script>
	import Setting from '$lib/subcomponent/Setting.svelte';
	import { activePlayerStats } from '$lib/scripts/store';
	let isOn = true;
	$: console.log(isOn);
</script>

<fieldset>
	<legend>Player Game Stats</legend>
	<div class="grid-auto">
		<Setting name="score" bind:on={$activePlayerStats.score.active}>Score</Setting>
		<Setting name="goals" bind:on={$activePlayerStats.goals.active}>Goals</Setting>
		<Setting name="shots" bind:on={$activePlayerStats.shots.active}>Shots</Setting>
		<Setting name="shotper" bind:on={$activePlayerStats.shotPercentage.active}>Shot %</Setting>
		<Setting name="assists" bind:on={$activePlayerStats.assists.active}>Assists</Setting>
		<Setting name="saves" bind:on={$activePlayerStats.saves.active}>Saves</Setting>
		<Setting name="demos" bind:on={$activePlayerStats.demos.active}>Demos</Setting>
	</div>
</fieldset>

<style>
	.grid-auto {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
	}
</style>
