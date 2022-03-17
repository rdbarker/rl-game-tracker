<script>
	import { apiKey, isKeyVerified, matchQue } from '$lib/scripts/store';
	import { storeItem } from '$lib/scripts/util.js';
	import Icon from '../subcomponent/Icon.svelte';
	import { onMount } from 'svelte';

	let loading = false;
	let icon = 'x';

	const checkKey = () => {
		loading = true;
		matchQue.start();
		matchQue.checkKey((value) => {
			$isKeyVerified = value.status ? true : false;
			icon = $isKeyVerified ? 'checkmark' : 'x';
			loading = false;
			if ($isKeyVerified) {
				storeItem('bckey', $apiKey);
			} else {
				matchQue.pause();
			}
		});
	};

	onMount(() => {
		checkKey();
	});
</script>

<div>
	<input bind:value={$apiKey} placeholder="ballchasing api key" />
	<button on:click={checkKey} class="button button-outline"
		><Icon bind:icon bind:loading /> Check Key</button
	>
</div>
