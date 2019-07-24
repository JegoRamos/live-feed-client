<template>
  <v-card class="mt-1 mr-1 pink white--text">
    <v-card-title class="subheading">TEAM ON SHIFT</v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center>
          <p class="display-1">{{ teamOnShift }}</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    teamOnShift: {
      type: String
    }
  }
}
</script>

<style>

</style>
