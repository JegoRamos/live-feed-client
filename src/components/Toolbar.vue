<template>
  <v-toolbar dark color="green" flat>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">
      DASHBOARD
      <span class="font-weight-light">PROTOTYPE</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn small color="green" flat :to="{name: 'sub-dashboard'}">
      <v-icon small class="white--text mr-1">message</v-icon>
      <span class="white--text">SUBSCRIBER</span>
    </v-btn>

    <v-btn small color="green" flat :to="{name: 'pub-dashboard'}">
      <v-icon small class="white--text mr-1">dashboard</v-icon>
      <span class="white--text">PUBLISHER</span>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style>

</style>
