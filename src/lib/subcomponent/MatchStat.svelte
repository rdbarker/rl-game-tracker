<script>
	import { numberToPercent } from '$lib/scripts/util';

	export let leftValue;
	export let rightValue;
	export let leftColor = 'orange';
	leftValue = parseFloat(leftValue);
	rightValue = parseFloat(rightValue);
	let leftPercent = numberToPercent((leftValue / (leftValue + rightValue)) * 100);
</script>

<div>
	<div class="stat-bar-text">
		<span class="stat-bar-left">{leftValue}</span>
		<span class="stat-bar-middle"><slot /></span>
		<span class="stat-bar-right">{rightValue}</span>
	</div>
	<div class="stat-bar {leftColor}">
		<span style="width:{leftPercent}" />
	</div>
</div>

<style>
	.stat-bar {
		width: 100%;
		display: flex;
		height: 0.4em;
		border-radius: 8px;
		overflow: hidden;
	}
	.stat-bar-text {
		display: flex;
	}
	.stat-bar-text span {
		flex-basis: 30%;
		padding: 0 0.15em;
	}
	.stat-bar-middle {
		font-size: 1rem;
		flex-grow: 1;
		text-align: center;
	}
	.stat-bar-right {
		text-align: right;
	}

	.stat-bar.orange span {
		background-color: var(--team-orange);
	}
	.stat-bar.blue span {
		background-color: var(--team-blue);
	}
	.stat-bar.orange {
		background-color: var(--team-blue);
	}
	.stat-bar.blue {
		background-color: var(--team-orange);
	}
	.stat-bar span.stat-bar-middle {
		width: 0.2em;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.918);
	}
</style>
