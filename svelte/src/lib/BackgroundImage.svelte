<script>
	import { onMount } from "svelte";
	import axios from "axios";

	let imageUrl = "";
	const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

	onMount(async () => {
		try {
			const { data } = await axios.get("https://api.unsplash.com/photos/random", {
				params: {
					query: "nature",
					orientation: "landscape"
				},
				headers: {
					Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
				}
			});

			imageUrl = data.urls.full;
		} catch (error) {
			console.error("Unsplash fetching error, using fallback:", error);
			// Fallback image
			imageUrl = "https://source.unsplash.com/random/1920x1080?nature";
		}
	});
</script>

<div class="bg" style:background-image={`url(${imageUrl})`}>
	<slot />
</div>

<style>
	.bg {
		width: 100vw;
		height: 100vh;
		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
</style>
