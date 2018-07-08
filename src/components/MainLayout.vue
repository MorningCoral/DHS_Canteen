<template>
  <div>
  <v-navigation-drawer 
    v-model='drawer' 
    light overflow absolute stateless
    :width='200'
    >
    <v-toolbar flat class='transparent'>
      <v-list class='pa-0'>
        <v-list-tile-content>
          <v-list-tile-title id='drawer-header'>D'cant</v-list-tile-title>
        </v-list-tile-content>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense >

      <router-link 
        v-for='page in pages'
        :key='page.title'
        :to='page.link'
        class='sidebar-tile'
      > 
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ page.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>

    </v-list>
  </v-navigation-drawer>

  <v-toolbar tabs dark color='primary' dense >
    <div class='btn'><v-icon @click.stop='drawer = !drawer'>menu</v-icon></div>
    <v-toolbar-title class='white--text'>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{path: '/search'}" id="searchlink"><div class='btn'><v-icon left>search</v-icon></div></router-link>
    <v-chip label color='pink' text-color='white' id='cart-btn'>
      <v-icon left id='cart-icon'> shopping_cart </v-icon><span id='cart-count'>0</span>
    </v-chip>
  </v-toolbar>
  </div>
</template>

<style scoped>
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

#searchlink {
  text-decoration: none;
}
</style>

<script>
export default {
  props: ["title"],
  data: function data() {
    return {
      drawer: null,
      pages: [
        { title: "1.  Chicken Rice", link: "/stall1" },
        { title: "2.  Malay", link: "/stall2" }
      ]
    };
  }
};
</script>
