<template>
  <div>
    <!-- Side Menu -->
    <v-navigation-drawer 
      v-model='drawer' 
      light overflow absolute
      :width='200'>
      <v-toolbar flat class='transparent'>
        <v-list class='pa-0'>
          <v-list-tile-content>
            <v-list-tile-title id='drawer-header'>D'cant</v-list-tile-title>
          </v-list-tile-content>
        </v-list>
      </v-toolbar>    
      <v-divider></v-divider>
      <v-list dense>
        <router-link 
          v-for='page in pages'
          :key='page.title'
          :to='page.link'
          class='sidebar-tile'> 
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    
    <!-- Tool Bar -->
    <v-toolbar dark color='primary' dense >
      <!-- Side menu button-->
      <div class='btn'><v-icon @click.stop='drawer = !drawer'>menu</v-icon></div>
      <!-- Page Title-->
      <v-toolbar-title style="width: 300vw" class='white--text'>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Search button-->
      <router-link :to="{path: '/search'}" class="link"><div class='btn'><v-icon left>search</v-icon></div></router-link>
      <!-- Cart button-->
      <router-link :to="{path: '/foodcart'}" class="link"><v-chip label color='pink' text-color='white' id='cart-btn'>
        <v-icon left id='cart-icon'> shopping_cart </v-icon><span id='cart-count'>0</span>
      </v-chip></router-link>
    </v-toolbar>
  
    <!-- Tabs -->
    <v-tabs centered grow color='primary' dark slider-color='pink'>
        <v-tab 
          v-for='tab in tabs'
          :key='tab' 
          @click='selectedTab = tab' 
        >
        {{ tab }}</v-tab>
    </v-tabs>

   <!-- Items display setting buttons -->
   <v-layout row wrap>
    <div class="mt-2 pl-2 items-display-settings">
        <v-btn-toggle v-model="sortType" mandatory class="mx-2" >
          <v-btn flat value='name'><v-icon>sort_by_alpha</v-icon></v-btn>
          <v-btn flat value='price'><v-icon>attach_money</v-icon></v-btn>
        </v-btn-toggle>

        <v-btn-toggle v-model="sortDirection" mandatory class="mx-2">
          <v-btn flat value='asc'><v-icon>arrow_upward</v-icon></v-btn>
          <v-btn flat value='desc'><v-icon>arrow_downward</v-icon></v-btn>
        </v-btn-toggle>

        <v-btn-toggle v-model="gridList" mandatory class="mx-2">
          <v-btn flat value='grid'><v-icon>view_module</v-icon></v-btn>
          <v-btn flat value='list'><v-icon>view_list</v-icon></v-btn>
        </v-btn-toggle>
        <v-btn-toggle v-model="splitFullView" mandatory class="mx-2" v-if="gridList === 'list'">
          <v-btn flat value='split'><v-icon>vertical_split</v-icon></v-btn>
          <v-btn flat value='full'><v-icon>view_headline</v-icon></v-btn>
        </v-btn-toggle>
    </div>
   </v-layout>

    <!-- Food Grid View -->
    <template v-if="gridList === 'grid'">
      <div class="content pa-2">
        <v-layout row wrap>
          <v-flex class="pa-2" xs6 v-for="item in sortedFilteredItems" :key="item.name">
            <v-card tile @dblclick="addToCart(item)">
              <v-card-media :src="item.pic" height="120px"></v-card-media>
                <div class='pa-1'>
                  <span class="body-2">{{ item.name }}</span>
                  <v-spacer></v-spacer>
                  <span>{{ item.price }}</span>
                </div>	
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </template>

    <!-- Food List View -->
    <template v-if="gridList === 'list'">
      <div class="content pa-2">
        <v-layout row wrap>
          <v-flex v-if="splitFullView === 'split'" class="pa-0" xs6 v-for="item in sortedFilteredItems" :key="item.name">
            <v-card tile class="pa-1 pr-2">
                <div class='pa-1 pl-2'>
                  <span>{{ item.name }}</span>
                  <span style="float: right">{{ item.price }}</span>
                </div>	
            </v-card>
          </v-flex>
          <v-flex v-if="splitFullView === 'full'" class="pa-0" xs12 v-for="item in sortedFilteredItems" :key="item.name">
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
  </div>
</template>

<script>
export default {
  props: ["title", "tabs", "items"],
  data: function data() {
    return {
      // Side Menu
      drawer: null,
      pages: [
        { title: "1.  Chicken Rice", link: "/stall1" },
        { title: "2.  Malay", link: "/stall2" }
      ],
      // Tab filtering
      selectedTab: "All",
      // Items display setting
      toggle_exclusive: 2,
      sortType: [],
      sortDirection: [],
      gridList: [],
      splitFullView: []
      // cart
    };
  },
  methods: {
    // Items sorting toggle
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
    },
    // Add items to cart
    addToCart(item) {
      this.$store.dispatch("addItem", item);
    }
  },
  computed: {
    // Tab filter
    tabFilteredItems: function() {
      var tab = this.selectedTab;
      if (tab === "All") {
        return this.items;
      } else {
        return this.items.filter(function(item) {
          return item.tab === tab;
        });
      }
    },
    // Sorting of filtered tab items
    sortedFilteredItems: function() {
      return this.sortBy(
        this.tabFilteredItems,
        this.sortType,
        this.sortDirection
      );
    }
  }
};
</script>

<style>
.btn {
  background: pink;
  padding: 3px;
}
#cart-btn {
  margin-left: 15px;
}
#cart-icon {
  margin-right: 5px;
}
#cart-count {
  font-size: 3vh;
}
#drawer-header {
  font-size: 25px;
  text-align: center;
}
.sidebar-tile {
  text-decoration: none;
  color: black;
}
.sidebar-tile.router-link-active {
  color: green;
}
// Items display settings
.items-display-settings > div {
  display: inline-block;
}
</style>
