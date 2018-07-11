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

    <!-- Items display setting buttons -->
    <div class="mt-2 items-display-settings">
      <div>
        <v-btn-toggle v-model="sortType" mandatory id="sort-type">
          <v-btn flat value='name'><v-icon>sort_by_alpha</v-icon></v-btn>
          <v-btn flat value='price'><v-icon>attach_money</v-icon></v-btn>
        </v-btn-toggle>
      </div>
      <div>
        <v-btn-toggle v-model="sortDirection" mandatory id="sort-direction">
          <v-btn flat value='asc'><v-icon>arrow_upward</v-icon></v-btn>
          <v-btn flat value='desc'><v-icon>arrow_downward</v-icon></v-btn>
        </v-btn-toggle>
      </div>
      <div>
        <v-btn-toggle v-model="gridList" mandatory id="grid-list">
          <v-btn flat value='grid'><v-icon>view_module</v-icon></v-btn>
          <v-btn flat value='list'><v-icon>view_list</v-icon></v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <!-- Food List View -->
    <template v-if="gridList === 'grid'">
      <div class="content pa-2">
        <v-layout row wrap>
          <v-flex class="pa-2" xs6 v-for="item in sortedItems" :key="item.name">
            <v-card tile>
              <v-card-media :src="item.pic" height="120px"></v-card-media>
                <div class='pa-1 pl-2'>
                  <span class="body-2">{{ item.name }}</span>
                  <v-spacer></v-spacer>
                  <span>{{ item.price }}</span>
                </div>	
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </template>

    <!-- Food Grid View -->
    <template v-if="gridList === 'list'">
      <div class="content pa-2">
        <v-layout row wrap>
          <v-flex class="pa-0" xs6 v-for="item in sortedItems" :key="item.name">
            <v-card tile class="pa-1 pr-2">
                <div class='pa-1 pl-2'>
                  <span>{{ item.name }}</span>
                  <span style="float: right">{{ item.price }}</span>
                </div>	
            </v-card>
          </v-flex>
        </v-layout>
      </div> 
    </template>    

  </v-app>
</template>

<style>
.items-display-settings > div {
  display: inline-block;
}
#sort-type {
  margin-left: 15vw;
}
#sort-direction,
#grid-list {
  margin-left: 15px;
}
</style>


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
      sortType: [],
      sortDirection: [],
      gridList: []
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
      return this.sortBy(this.tabSorted, this.sortType, this.sortDirection);
    }
  },
  components: {
    mainlayout
  }
};
</script>
