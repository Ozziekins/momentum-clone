<script>
import moment from "moment";
const currentDate = moment().format("dddd, MMMM Do YYYY");
</script>

<div class="date-display">
	{currentDate}
</div>

<style>
	.date-display {
		position: absolute;
		top: 20px;
		left: 20px;
		color: white;
		padding: 6px 12px;
		border-radius: 8px;
	}
</style>
