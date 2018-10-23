<!--https://vuejs.org/v2/guide/single-file-components.html-->

<template>
	<div id="upgrades-available">
		<h2>Available Upgrades</h2>
		<ul id="upgrades-available-list" style="list-style-type:disc">
            <li v-for="upgrade in upgrades" v-bind:class="classObject">
			   {{ upgrade.name }}
            </li>
        </ul>
	</div>
</template>

<script>

export default {
	data() {
		return {
			greeting: "Hello"
		}
	}
}

</script>

<style scoped>
.upgrades-buyable {
	color: green;
}

.upgrades-not-buyable {
	color: red;
}
</style>

