<script>
	export let platform;

	const platforms = {
		steam: 'steam',
		xbox: 'xbox',
		ps4: 'playstation',
		epic: 'epicgames',
		psynet: 'nintendoswitch'
	};
</script>

<i class={`icon-${platforms[platform]}`} />

<style>
	i::before {
		margin-right: 0.4rem;
		color: var(--color);
	}
</style>
