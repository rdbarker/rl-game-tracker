<script>
	import { apiKey, isKeyVerified, matchQue } from '$lib/store';
	import Icon from './Icon.svelte';

	let loading = false;
	let icon = 'x';

	const checkKey = () => {
		loading = true;
		matchQue.start();
		matchQue.checkKey((value) => {
			$isKeyVerified = value.status ? true : false;
			icon = $isKeyVerified ? 'checkmark' : 'x';
			loading = false;
			if (!$isKeyVerified) {
				matchQue.pause();
			}
		});
	};
</script>

<div>
	<input bind:value={$apiKey} placeholder="ballchasing api key" />
	<button on:click={checkKey} class="button button-outline"
		><Icon bind:icon bind:loading /> Check Key</button
	>
</div>

<style>
</style>
