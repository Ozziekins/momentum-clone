<script>
import BackgroundImage from "./lib/BackgroundImage.svelte";
import ClockDisplay from "./lib/ClockDisplay.svelte";
import DailyQuote from "./lib/DailyQuote.svelte";
import DateDisplay from "./lib/DateDisplay.svelte";
import GreetingCard from "./lib/GreetingCard.svelte";
import WeatherWidget from "./lib/WeatherWidget.svelte";

let userName = localStorage.getItem("username");
if (!userName) {
	userName = prompt("What is your name?");
	localStorage.setItem("username", userName);
}
</script>

<BackgroundImage>
	<DateDisplay />
	<WeatherWidget />

	<div class="overlay">
		<ClockDisplay />
		<GreetingCard {userName} />
		<DailyQuote />
	</div>
</BackgroundImage>

<style>
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
