<template>
  <v-app>
    <mainlayout :title='header'></mainlayout>
  </v-app>
</template>


<script>
import mainlayout from './MainLayout';

export default {
  name: 'Stall2',
  data: function data() {
    return { 
      header: 'Malay',
      drawer: null,
      };
  },
  components: {
    mainlayout
  }
}
</script>