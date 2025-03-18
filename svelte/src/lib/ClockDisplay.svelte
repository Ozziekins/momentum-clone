<script>
	import { onMount } from "svelte";
	import moment from "moment";
	let currentTime;

	onMount(() => {
		setInterval(() => {
			currentTime = moment().format("HH:mm:ss");
		}, 1000);
	});
</script>

<div class="clock">
	<h1>{currentTime}</h1>
</div>

<style>
	.clock {
		color: white;
		text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
		font-size: 3rem;
		text-align: center;
	}
</style>
