<template>
  <v-app>
    <mainlayout :title='header'></mainlayout>
    <v-tabs centered grow color='primary' dark slider-color='white'>
        <v-tab 
          v-for='tab in tabs'
          :key='tab.name' 
          @click='selectedTab = tab.name' 
        >
        {{ tab.name }}</v-tab>
    </v-tabs>
    <ul>
		  <li 
        v-for='item in filteredItems' 
        :key='item.name'
      >
      {{ item.name }}</li>
	  </ul>
  </v-app>
</template>


<script>
import mainlayout from './MainLayout';
import stall1_items from '../data/Stall1_Items.js'

export default {
  name: 'Stall1',
  data: function data() {
    return {
      header: 'Chicken Rice',
      drawer: null,
      tabs: [{ name: 'All' }, { name: 'Main' }, { name: 'Sides' }],
      items: stall1_items,
      selectedTab: 'All'
    };
  },
  computed: {
    filteredItems: function() {
      var vm = this;
      var tab = vm.selectedTab;

      if (tab === 'All') {
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
