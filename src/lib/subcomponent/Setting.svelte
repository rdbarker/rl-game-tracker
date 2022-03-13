<script>
	export let name;
	export let on = true;
</script>

<label for="switch-{name}">
	<input type="checkbox" bind:checked={on} id="switch-{name}" name="switch-{name}" role="switch" />
	<slot />
</label>
