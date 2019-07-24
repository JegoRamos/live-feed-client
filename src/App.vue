<template>
  <v-app>
    <app-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Dashboard</span>
        <span class="font-weight-light">Prototype</span>
      </v-toolbar-title>
    </app-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  components: {
    appToolbar: Toolbar
  },
  data() {
    return {
      //
    }
  }
}
</script>
