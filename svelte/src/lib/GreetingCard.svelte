<script>
	export let userName;
	const hour = new Date().getHours();
	const greeting =
		hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
</script>

<h2 class="greeting">{greeting}, {userName} :)</h2>

<style>
	.greeting {
		color: white;
		text-align: center;
		font-size: 1.8rem;
	}
</style>
