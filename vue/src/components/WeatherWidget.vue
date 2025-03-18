<template>
    <div v-if="weather" class="weather-widget">
      <img :src="iconUrl" alt="Weather icon" class="weather-icon" />
      <span>{{ weather.name }}, {{ temperature }}°C</span>
    </div>
  </template>
  
  <script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";

const weather = ref(null);
const temperature = computed(() => Math.round(weather.value.main.temp));
const iconUrl = computed(
	() =>
		`https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`,
);

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Barcelona fallback coordinates
const fallbackCoords = {
	lat: 41.3851,
	lon: 2.1734,
};

const fetchWeather = async (lat, lon) => {
	try {
		const { data } = await axios.get(
			"https://api.openweathermap.org/data/2.5/weather",
			{
				params: {
					lat,
					lon,
					units: "metric",
					appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
				},
			},
		);
		weather.value = data;
	} catch (error) {
		console.error("Weather API Error:", error);
	}
};

onMounted(() => {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			fetchWeather(position.coords.latitude, position.coords.longitude);
		},
		(error) => {
			console.error("Geolocation failed, using Barcelona as fallback", error);
			fetchWeather(41.3851, 2.1734); // Barcelona coordinates
		},
	);
});
</script>
  
  <style scoped>
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
  
  .weather-icon {
    width: 32px;
    height: 32px;
  }
  </style>
  