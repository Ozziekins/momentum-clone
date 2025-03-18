<template>
  <BackgroundImage>
    <div class="overlay">
      <DateDisplay />
      <WeatherWidget />
      <div class="center-container">
        <ClockDisplay />
        <GreetingCard :user-name="userName" />
        <DailyQuote />
      </div>
    </div>
  </BackgroundImage>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BackgroundImage from "./components/BackgroundImage.vue";
import ClockDisplay from "./components/ClockDisplay.vue";
import DailyQuote from "./components/DailyQuote.vue";
import DateDisplay from "./components/DateDisplay.vue";
import GreetingCard from "./components/GreetingCard.vue";
import WeatherWidget from "./components/WeatherWidget.vue";

const userName = ref("");

onMounted(() => {
	const storedName = localStorage.getItem("daily-app-user");
	if (storedName) {
		userName.value = storedName;
	} else {
		userName.value = prompt("What's your name?");
		localStorage.setItem("daily-app-user", userName.value);
	}
});
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}
</style>
