<template>
  <v-app>
  <div>
    <h1>Food Cart</h1>
    <button></button>
    <router-link
      :to="{ path: '/' }" class="link">
      <v-btn> GO BACK </v-btn>
    </router-link>
    <p>{{ cartItems }}</p>
    <div class="content pa-2">
        <v-layout row wrap >
          <v-flex class="pa-0" xs12 v-for="item in stall1_items" :key="item.name">
            <v-card tile class="pa-1 pr-2">
                <div class='pa-1 pl-2'>
                  <span>{{ item.name }}</span>
                  <span style="float: right">{{ item.price }}</span>
                </div>	
            </v-card>
          </v-flex>
        </v-layout>
        
      </div> 
  </div>
  </v-app>
</template>
<script>
import stall1_items from "../data/Stall1_Items.js";

export default {
  data: function data() {
    return {
      stall1_items
      // cart
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems;
    }
  }
};
</script>
43
