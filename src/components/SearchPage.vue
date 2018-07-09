<template>
<v-app>
  <div>
    <h1>Search for</h1>
    <button></button>
    <router-link
      :to="{ path: '/' }" >
      <v-btn> GO BACK </v-btn>
    </router-link>

    <v-expansion-panel>
      <v-expansion-panel-content  class="pa-0">
        <div slot="header">Filter Stalls</div>
              <v-layout class="grey lighten-3 px-2" row wrap>
                <v-flex>
                <v-chip><v-checkbox 
                          type="checkbox" 
                          label="All"
                          v-model="selectAll"></v-checkbox></v-chip>
                  <v-chip v-for="stall in stalls" :key='stall.name'><v-checkbox 
                      type="checkbox"  
                      v-model="selectedStalls"
                      :value="stall.value"
                      :label="stall.name"
                      class="" > 
                      </v-checkbox> </v-chip >
                </v-flex>
              </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-autocomplete
        :items="combined"
        clearable
        item-text="name"
        item-value="null"
        label="Search for food"
        solo
      >
      </v-autocomplete>
      <p>{{ selectedStalls }}</p>
      <p>{{ combined }}</p>

  </div>
  </v-app>
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

.md-checkbox {
  display: flex;
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
        { name: "1. Chicken Rice", value: 1 },
        { name: "2. Malay", value: 2 }
      ],
      stallitems: [stall1_items, stall2_items],
      divider: [{ divider: true }],
      stallsoption: ["1. Chicken Rice", "2. Malay"],
      selectedStalls: []
    };
  },
  methods: {
    sortarr(arr) {
      return arr.sort(function(a, b) {
        if (a["name"] < b["name"]) return -1;
        if (a["name"] > b["name"]) return 1;
        return 0;
      });
    }
  },
  computed: {
    selectAll: {
      get: function() {
        return this.stalls
          ? this.selectedStalls.length === this.stalls.length
          : false;
      },
      set: function(value) {
        var selectedStalls = [];
        if (value) {
          this.stalls.forEach(function(stalls) {
            selectedStalls.push(stalls.value);
          });
        }
        this.selectedStalls = selectedStalls;
      }
    },
    combined: function() {
      var S1 = this.sortarr(stall1_items);
      var S2 = this.sortarr(stall2_items);
      var combineditems = [];
      combineditems = combineditems.concat(S1);
      combineditems = combineditems.concat(S2);
      return combineditems;
    }
  }
};
</script>
