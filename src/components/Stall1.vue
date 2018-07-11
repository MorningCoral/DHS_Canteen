<template>
  <v-app>
    <mainlayout 
      :title='header'
      :tabs='stalltabs'
      :items="stallitems"></mainlayout>
  </v-app>
</template>


<script>
import mainlayout from "./MainLayout";
import stall1_items from "../data/Stall1_Items.js";

export default {
  data: function data() {
    return {
      header: "Chicken Rice",
      stalltabs: [{ name: "All" }, { name: "Main" }, { name: "Sides" }],
      stallitems: stall1_items
    };
  },
  computed: {},
  components: {
    mainlayout
  }
};
</script>
