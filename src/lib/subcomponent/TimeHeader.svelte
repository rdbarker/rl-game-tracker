<script>
	export let timeString;
	let date = new Date(timeString);
	const dateFormattingOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const dateFormatted = date.toLocaleDateString(undefined, dateFormattingOptions);
	const timeFormatted = date.toLocaleTimeString();
</script>

<h6>
	{timeFormatted}
	{dateFormatted}
</h6>
