<script>
	import { onMount } from "svelte";
	import axios from "axios";

	let quote = "Stay inspired!";

	onMount(async () => {
		try {
			const res = await axios.get("https://api.quotable.io/random");
			quote = res.data.content;
		} catch (error) {
			console.error(error);
		}
	});
</script>

<blockquote>"{quote}"</blockquote>

<style>
	blockquote {
		font-size: 1.2rem;
		font-style: italic;
		color: white;
		text-align: center;
	}
</style>
