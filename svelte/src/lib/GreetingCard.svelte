<script>
import { onMount } from "svelte";

let userName = "Click to enter name";
let editMode = false;

onMount(() => {
	const storedName = localStorage.getItem("userName");
	if (storedName) userName = storedName;
});

const saveName = () => {
	localStorage.setItem("userName", userName);
	editMode = false;
};

function getGreeting() {
	const hour = new Date().getHours();
	if (hour < 12) return "Good morning";
	if (hour < 18) return "Good afternoon";
	return "Good evening";
}
</script>
  
  {#if editMode}
	<input
	  class="username-input"
	  bind:value={userName}
	  on:blur={saveName}
	  on:keyup="{(e) => e.key === 'Enter' && saveName()}"
	/>
  {:else}
	<button class="greeting" on:click={() => (editMode = true)} on:keydown="{(e) => e.key === 'Enter' && (editMode = true)}">
	  {getGreeting()}, <span class="username">{userName}</span> :)
	</button>
  {/if}
  
  <style>
	.greeting {
	  font-size: 2rem;
	  text-align: center;
	  cursor: pointer;
	  border: none;
	  background: none;
	  color: white;
	  font-weight: bold;
	  padding: 10px;
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
  