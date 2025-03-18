<script>
import axios from "axios";
import { onMount } from "svelte";

let _quote = "Stay positive, work hard, make it happen.";

const fetchQuote = async () => {
	try {
		const { data } = await axios.get("/zenquotes/api/random");
		_quote = data[0].q;
	} catch (error) {
		console.error("Quote fetching error, using fallback:", error);
		_quote = "Do what you can, with what you have, where you are.";
	}
};

onMount(fetchQuote);
</script>

<blockquote>"{_quote}"</blockquote>

<style>
	blockquote {
		font-size: 1.2rem;
		font-style: italic;
		color: white;
		text-align: center;
	}
</style>
