<template>
  <v-card class="mt-2 mx-1 blue white--text">
    <v-card-title class="subheading">DELIVERY RATE</v-card-title>
    <v-card-text>
      <v-layout row wrap justify-center>
        <v-flex xs12 text-xs-center>
          <v-progress-circular
            :rotate="-90"
            :size="150"
            :width="20"
            :value="calcPercentage()"
            color="white mr-1"
          >{{ calcPercentage() }}%</v-progress-circular>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <p class="subheading mt-3">{{ deliveryRate.completed }} of {{ deliveryRate.target }} units</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    deliveryRate: {
      required: true
    }
  },
  methods: {
    calcPercentage() {
      let completed = this.deliveryRate.completed
      let target = this.deliveryRate.target
      return ((100 * completed) / target).toFixed(0)
    }
  }
}
</script>

<style>

</style>
