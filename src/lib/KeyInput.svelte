<script>
	import { apiKey, isKeyVerified, matchQue } from '$lib/store';
	import Icon from './icon.svelte';
	import { fetchFromApi } from '$lib/util';

	let loading = false;
	let icon = 'x';

	const checker = async () => {
		const response = await fetchFromApi('/api/v1/check', $apiKey);
		$isKeyVerified = response.status;
		icon = $isKeyVerified ? 'checkmark' : 'x';
		loading = false;
	};

	const checkKey = () => {
		loading = true;
		matchQue.checkKey(checker);
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
