<script>
	import { activePlayerStats } from '$lib/scripts/store';
	export let teamStats;
</script>

<figure>
	<table role="grid">
		<tr>
			<th>{teamStats.goals}</th>
			{#each Object.entries($activePlayerStats) as [stat, statObj]}
				{#if statObj.active}
					<th>{statObj.name}</th>
				{/if}
			{/each}
		</tr>

		{#each teamStats.players as player}
			<tr>
				<td>{player.name}</td>
				{#each Object.entries($activePlayerStats) as [stat, statObj]}
					{#if statObj.active}
						<td>{player[stat]}</td>
					{/if}
				{/each}
			</tr>
		{/each}
	</table>
</figure>
