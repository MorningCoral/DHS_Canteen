<template>
  <v-app>
    <mainlayout :title='header'></mainlayout>
    <v-tabs centered grow color="primary" dark slider-color="white">
        <v-tab 
          v-for="tab in tabs" 
          :key='tab.name' 
          @click="selectedTab = tab.name" 
        >
        {{ tab.name }}</v-tab>
    </v-tabs>
    <ul>
		  <li 
        v-for="item in filteredItems" 
        :key='item.name'
      >
      {{ item.name }}</li>
	  </ul>
  </v-app>
</template>


<script>
import mainlayout from "./MainLayout";

export default {
  name: "Stall1",
  data: function data() {
    return {
      header: "Chicken Rice",
      drawer: null,
      tabs: [{ name: "All" }, { name: "Main" }, { name: "Sides" }],
      items: [
        {
          name: "Spaghetti",
          price: "$ 2.00",
          stall: "Stall 1",
          tab: "Main"
        },
        {
          name: "Mash Potato",
          price: "$ 1.00",
          stall: "Stall 1",
          tab: "Main"
        },
        {
          name: "Patty",
          price: "$ 0.70",
          stall: "Stall 1",
          tab: "Sides"
        },
        {
          name: "Fish",
          price: "$ 1.50",
          stall: "Stall 1",
          tab: "Sides"
        }
      ],
      selectedTab: "All"
    };
  },
  computed: {
    filteredItems: function() {
      var vm = this;
      var tab = vm.selectedTab;

      if (tab === "All") {
        return vm.items;
      } else {
        return vm.items.filter(function(item) {
          return item.tab === tab;
        });
      }
    }
  },
  components: {
    mainlayout
  }
};
</script>
