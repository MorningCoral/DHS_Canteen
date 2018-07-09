<template>
  <v-app>
    <!-- Header -->
    <mainlayout :title='header'></mainlayout>

    <!-- Tabs -->
    <v-tabs centered grow color='primary' dark slider-color='pink'>
        <v-tab 
          v-for='tab in tabs'
          :key='tab.name' 
          @click='selectedTab = tab.name' 
        >
        {{ tab.name }}</v-tab>
    </v-tabs>

    <!-- Sort buttons -->
    <div>
      <div style="display: inline-block" class="mx-5">
        <v-btn-toggle v-model="sorttype" mandatory>
          <v-btn flat value='name' depressed> Name </v-btn>
          <v-btn flat value='price' depressed> Price </v-btn>
        </v-btn-toggle>
      </div>
      <div style="display: inline-block" >
        <v-btn-toggle v-model="sortdirection" mandatory>
          <v-btn flat value='asc' depressed> asc </v-btn>
          <v-btn flat value='desc' depressed> desc </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <!-- Food List -->
    <div class="content pa-2">
      <v-layout row wrap>
        <v-flex class="pa-2" xs6 v-for="item in sortedItems" :key="item.name">
          <v-card tile>
            <v-card-media :src="item.pic" height="120px"></v-card-media>
              <div class='pa-1 pl-2'>
                <span class="body-2">{{ item.name }}</span>
                <v-spacer></v-spacer>
                <span class="caption">{{ item.price }}</span>
              </div>	
          </v-card>
        </v-flex>
      </v-layout>
    </div>    

  </v-app>
</template>


<script>
import mainlayout from "./MainLayout";
import stall2_items from "../data/Stall2_Items.js";

export default {
  name: "Stall2",
  data: function data() {
    return {
      header: "Malay",
      drawer: null,
      tabs: [{ name: "All" }, { name: "Meat" }, { name: "Veg" }],
      items: stall2_items,
      selectedTab: "All",
      toggle_exclusive: 2,
      sorttype: [],
      sortdirection: []
    };
  },
  methods: {
    sortBy(arr, key, direction) {
      return arr.sort(function(a, b) {
        if (direction === "asc") {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
        } else {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
        }
        return 0;
      });
    }
  },
  computed: {
    tabSorted: function() {
      var tab = this.selectedTab;

      if (tab === "All") {
        return this.items;
      } else {
        return this.items.filter(function(item) {
          return item.tab === tab;
        });
      }
    },
    sortedItems: function() {
      return this.sortBy(this.tabSorted, this.sorttype, this.sortdirection);
    }
  },
  components: {
    mainlayout
  }
};
</script>
