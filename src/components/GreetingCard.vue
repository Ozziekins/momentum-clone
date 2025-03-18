<template>
  <h2>{{ greetingMessage }}, {{ userName }} :)</h2>
</template>

<script setup>
import moment from "moment";
import { computed } from "vue";

const props = defineProps({
	userName: {
		type: String,
		required: true,
	},
});

const greetingMessage = computed(() => {
	const hour = moment().hour();
	if (hour < 12) return "Good morning";
	if (hour < 18) return "Good afternoon";
	return "Good evening";
});
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-top: 10px;
  text-align: center;
}
</style>
