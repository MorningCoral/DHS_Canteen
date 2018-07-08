<template>
  <v-app>
    <mainlayout :title='header'></mainlayout>
    <v-tabs centered grow color='primary' dark slider-color='pink'>
        <v-tab 
          v-for='tab in tabs'
          :key='tab.name' 
          @click='selectedTab = tab.name' 
        >
        {{ tab.name }}</v-tab>
    </v-tabs>
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      hide-actions
      must-sort
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.price }}</td>
      </template>
    </v-data-table>

  </v-app>
</template>


<script>
import mainlayout from "./MainLayout";
import stall1_items from "../data/Stall1_Items.js";

export default {
  name: "Stall1",
  data: function data() {
    return {
      header: "Chicken Rice",
      headers: [
        { text: "Name", value: "name" },
        { text: "Price", value: "price" }
      ],
      drawer: null,
      tabs: [{ name: "All" }, { name: "Main" }, { name: "Sides" }],
      items: stall1_items,
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
