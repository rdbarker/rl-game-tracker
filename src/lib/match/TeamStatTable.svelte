<script>
	import { activeStats, totalAvailblePlayerStats } from '$lib/store';
	export let teamStats;
</script>

{#if $activeStats.length > 0}
	<table>
		<tr>
			<th>{teamStats.goals}</th>
			{#each $activeStats as stat}
				<th>{stat}</th>
			{/each}
		</tr>

		{#each teamStats.players as player}
			<tr>
				{player.name}
				{#each $activeStats as stat}
					<td>{player[$totalAvailblePlayerStats.get(stat)]}</td>
				{/each}
			</tr>
		{/each}
	</table>
{/if}
