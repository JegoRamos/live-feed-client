<template>
  <v-card>
    <v-card-title class="headline grey--text text--darken-2">
      <span class="font-weight-bold mr-1">SUBSCRIBER:</span>SAMSUNG
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <app-delivery-rate :deliveryRate="getFeed.deliveryRate"></app-delivery-rate>
        </v-flex>
        <v-flex xs12 sm6>
          <app-binary :binary="getFeed.binary"></app-binary>
          <app-shift :teamOnShift="getFeed.teamOnShift"></app-shift>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <app-employee-list :attendance="getFeed.attendance"></app-employee-list>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import DeliveryRate from './sub-dashboard/DeliveryRate'
import Binary from './sub-dashboard/Binary'
import Shift from './sub-dashboard/Shift'
import EmployeeList from './sub-dashboard/EmployeeList'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    appDeliveryRate: DeliveryRate,
    appBinary: Binary,
    appShift: Shift,
    appEmployeeList: EmployeeList
  },
  sockets: {
    connect() {
      console.log('Connected')
    }
  },
  computed: {
    ...mapGetters(['getFeed'])
  },
  methods: {
    ...mapActions(['fetchFeed'])
  },
  created() {
    this.fetchFeed()
  }
}
</script>

<style scoped>
</style>
