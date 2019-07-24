<template>
  <v-card class="mt-2 mx-1">
    <v-list subheader>
      <v-subheader class="subheading green white--text mb-2">ATTENDANCE</v-subheader>
      <v-list-tile v-for="employee in attendance" :key="employee.title" avatar>
        <app-avatar :username="employee.name" class="mr-2" :size="40" />

        <v-list-tile-content>
          <v-list-tile-title v-html="employee.name"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon v-if="employee.onDuty" class="green--text">check</v-icon>
          <v-icon v-if="!employee.onDuty" class="red--text">close</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
import Avatar from 'vue-avatar'
export default {
  components: {
    appAvatar: Avatar
  },
  props: {
    attendance: {
      type: Array
    }
  },
  data() {
    return {
      employees: [
        {
          onDuty: true,
          name: 'Kobe Bryant'
        },
        {
          onDuty: true,
          name: 'Magic Johnson'
        },
        {
          name: 'Kareem Abdul Jabaar'
        },
        {
          name: 'Shaq O\'neal'
        }
      ],
      items2: [
        {
          name: 'Travis Howard'
        }
      ]
    }
  }
}
</script>

<style>

</style>
