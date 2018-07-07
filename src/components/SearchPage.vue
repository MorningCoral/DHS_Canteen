<template>
  <div>
    <h1>Search for</h1>
    <button></button>
    <router-link
      :to="{ path: '/' }" >
      <v-btn> GO BACK </v-btn>
    </router-link>
    <ul v-for='stall in stalls' :key='stall.name'>
        <li v-for='item in stall.items' :key='item.name'>
          {{ item.name }}
        </li>
	  </ul>
  </div>
</template>

<style scoped>
ul {
	margin-left: 0;
	padding-left: 0;
	list-style: none;
}

li {
	padding: 8px 16px;
	border-bottom: 1px solid #eee;
}

</style>


<script>
import stall1_items from "../data/Stall1_Items.js";
import stall2_items from "../data/Stall2_Items.js";

export default {
  name: "Search",
  data: function data() {
    return {
      stalls: [
        { name: 'Stall 1', items: stall1_items }, 
        { name: 'Stall 2', items: stall2_items }
      ] // stalls
    }; // return
  } // data
}; // export default
</script>
