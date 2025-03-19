<template>
	<h2 @click="editMode = true" v-if="!editMode">{{ greetingMessage }}, <span class="username">{{ userName }}</span> :)</h2>
	<input
	  v-else
	  v-model="userName"
	  class="username-input"
	  type="text"
	  @blur="saveName"
	  @keyup.enter="saveName"
	/>
  </template>
  
  <script setup>
import { computed, onMounted, ref } from "vue";

const userName = ref(localStorage.getItem("userName") || "Click to enter name");
const editMode = ref(false);

const greetingMessage = computed(() => {
	const hour = new Date().getHours();
	if (hour < 12) return "Good morning";
	if (hour < 18) return "Good afternoon";
	return "Good evening";
});

const saveName = () => {
	localStorage.setItem("userName", userName.value);
	editMode.value = false;
};

onMounted(() => {
	userName.value = localStorage.getItem("userName") || "Click to enter name";
});
</script>
  
  <style scoped>
  h2 {
	font-size: 2rem;
	text-align: center;
	cursor: pointer;
  }
  
  .username {
	font-weight: bold;
	color: lightblue;
  }
  
  .username-input {
	font-size: 2rem;
	text-align: center;
	border: none;
	background: none;
	color: white;
	width: 100%;
	outline: none;
  }
  </style>
  