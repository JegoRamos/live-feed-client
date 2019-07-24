<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-slide-x-transition hide-on-leave>
          <router-view></router-view>
        </v-slide-x-transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>

</style>


<script>
import SubDashboard from '../components/SubDashboard'

export default {
  components: {
    appSubDashboard: SubDashboard
  }
}
</script>
