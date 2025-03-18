<template>
    <div class="date-display">
      {{ currentDate }}
    </div>
  </template>
  
  <script setup>
import moment from "moment";
import { onMounted, ref } from "vue";

const currentDate = ref("");

onMounted(() => {
	currentDate.value = moment().format("dddd, MMMM Do YYYY");
});
</script>
  
  <style scoped>
  .date-display {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1.1rem;
  }
  </style>
  