<template>
  <div>
    <h1>Search for</h1>
    <button></button>
    <router-link
      :to="{ path: '/' }" >
      <v-btn> GO BACK </v-btn>
    </router-link>

    <v-expansion-panel
        v-model="panel"
        expand
      >
      <v-expansion-panel-content>
        <div slot="header">Item</div>
            <div class="grey lighten-3 px-2">
              <v-layout row wrap>
                  <v-flex xs3 v-for="option in stallOptions" :key="option.text">
                    <v-checkbox class="stallcheckboxes" :label="option.text" v-model="selectedStalls" :value="option.value"></v-checkbox>
                  </v-flex>           
              </v-layout>          
            </div>
      </v-expansion-panel-content>
    </v-expansion-panel>

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

.stallcheckboxes>>>label {
  font-size: 10px;
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
        { name: "Stall 1", items: stall1_items },
        { name: "Stall 2", items: stall2_items }
      ],
      selectedStalls: ["Stall 2"],
      stallOptions: [
        { text: "Stall 1", value: "Stall 1" },
        { text: "Stall 2", value: "Stall 2" },
        { text: "Stall 3", value: "Stall 3" }
      ]
    };
  }
};
</script>
