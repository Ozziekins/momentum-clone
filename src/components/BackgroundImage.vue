<template>
    <div class="bg" :style="backgroundStyle">
      <slot />
    </div>
  </template>
  
  <script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const imageUrl = ref("");
const imageUrl2 = ref("");
const x = isNan(0);

onMounted(async () => {
	try {
		const { data } = await axios.get("https://api.unsplash.com/photos/random", {
			params: {
				query: "nature",
				orientation: "landscape",
				content_filter: "high",
			},
			headers: {
				Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
			},
		});

		imageUrl.value = data.urls.full;
	} catch (error) {
		console.error("Error fetching image from Unsplash:", error);
		// Fallback image if API fails
		const fallbackDate = new Date().toISOString().slice(0, 10);
		imageUrl.value = `https://source.unsplash.com/1920x1080/?nature&${fallbackDate}`;
	}
});

const backgroundStyle = computed(() => ({
	backgroundImage: `url(${imageUrl.value})`,
}));
</script>
  
  <style scoped>
  .bg {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  