<template>
    <div class="clock">
      <h1>{{ currentTime }}</h1>
    </div>
  </template>
  
  <script setup>
import moment from "moment";
import { onMounted, ref } from "vue";

const currentTime = ref("");

const updateTime = () => {
	currentTime.value = moment().format("HH:mm:ss");
};

onMounted(() => {
	updateTime();
	setInterval(updateTime, 1000);
});
</script>
  
  <style scoped>
  .clock {
    text-align: center;
  }
  
  .clock h1 {
    font-size: 5rem;
    margin: 0;
    color: white;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  }
  </style>
  