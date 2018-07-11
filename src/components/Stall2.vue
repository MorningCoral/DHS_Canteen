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
import stall2_items from "../data/Stall2_Items.js";

export default {
  data: function data() {
    return {
      header: "Malay 1",
      stalltabs: [{ name: "All" }, { name: "Meat" }, { name: "Veg" }],
      stallitems: stall2_items
    };
  },
  computed: {},
  components: {
    mainlayout
  }
};
</script>
