<template>
  <blockquote>"{{ quote }}"</blockquote>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const quote = ref("Stay positive, work hard, make it happen.");

const fetchQuote = async () => {
	try {
		const { data } = await axios.get("/zenquotes/api/random");
		quote.value = data[0].q;
	} catch (error) {
		console.error("Quote fetching error, using fallback:", error);
		quote.value = "Do what you can, with what you have, where you are.";
	}
};

onMounted(fetchQuote);
</script>

<style scoped>
blockquote {
  font-size: 1.2rem;
  font-style: italic;
  color: white;
  text-align: center;
}
</style>
