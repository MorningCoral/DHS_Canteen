<template>
<v-app>
  <div>
    <h1>Search for</h1>
    <button></button>
    <router-link
      :to="{ path: '/' }" >
      <v-btn> GO BACK </v-btn>
    </router-link>

    <v-expansion-panel @click>
      <v-expansion-panel-content  class="pa-0">
        <div slot="header">Filter Stalls</div>
              <v-layout class="grey lighten-3 px-2" row wrap>
                <v-flex>
                <v-chip><v-checkbox 
                          type="checkbox" 
                          label="All"
                          v-model="selectAll" ></v-checkbox></v-chip>
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
        :items="selectedItems"
        clearable
        item-text="name"
        item-value="null"
        label="Search for food"
        solo
        no-data-text="No results"
      >
      <template
        slot="item"
        slot-scope="data"
      >
              
        <template>
          <v-list-tile-content>
            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="data.item.stall"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
                  <v-list-tile-action-text>{{ data.item.price }}</v-list-tile-action-text>
          </v-list-tile-action>

        </template>
      </template>
      </v-autocomplete>

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
      All: "All",
      stalls: [
        { name: "1. Chicken Rice", value: 1 },
        { name: "2. Malay", value: 2 }
      ],
      selectedStalls: []
    };
  },
  methods: {
    sortarr(arr) {
      return arr.sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
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
    sortedStalls: function() {
      return this.sortarr(this.selectedStalls);
    },
    selectedItems: function() {
      var allitems = [stall1_items, stall2_items];
      var selectedItems = [];
      this.sortedStalls.forEach(function(value) {
        selectedItems = selectedItems.concat(allitems[value - 1]);
      });
      return selectedItems;
    }
  }
};
</script>
