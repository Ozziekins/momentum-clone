<script>
	import { onMount } from "svelte";
	import axios from "axios";

	let weather;
	const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

	onMount(() => {
		navigator.geolocation.getCurrentPosition(
			(pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
			() => fetchWeather(41.3851, 2.1734) // Barcelona fallback
		);
	});

	async function fetchWeather(lat, lon) {
		try {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
			);
			weather = res.data;
		} catch (error) {
			console.error(error);
		}
	}
</script>

{#if weather}
<div class="weather-widget">
	<img
		src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
		alt="weather"
	/>
	<span>{weather.name}, {Math.round(weather.main.temp)}°C</span>
</div>
{/if}

<style>
	.weather-widget {
		position: absolute;
		top: 20px;
		right: 20px;
		color: white;
		padding: 6px 12px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	img {
		width: 32px;
		height: 32px;
	}
</style>
