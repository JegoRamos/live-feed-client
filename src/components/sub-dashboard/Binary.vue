<template>
  <v-card class="mt-2 mr-1 mb-1 orange white--text">
    <v-card-title class="subheading">BINARY VERSION</v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center>
          <p class="display-1">{{ binary }}</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    binary: {
      required: true
    }
  }
}
</script>

<style>

</style>
