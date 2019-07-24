<template>
  <div>
    <v-alert
      transition="slide-x-transition"
      hide-on-leave
      class="mb-2"
      v-model="alert"
      dismissible
      type="success"
    >Feed Successfuly Updated!</v-alert>
    <v-card>
      <v-card-title class="headline grey--text text--darken-2">
        <span class="font-weight-bold mr-1">PUBLISHER</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                prepend-inner-icon="phonelink_setup"
                outline
                class="mx-1"
                color="green"
                type="number"
                label="Target Units"
                v-model="feed.deliveryRate.target"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                prepend-inner-icon="trending_up"
                outline
                class="mx-1"
                color="green"
                type="number"
                label="Completed Units"
                v-model="feed.deliveryRate.completed"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-text-field
                prepend-inner-icon="android"
                outline
                class="mx-1"
                color="green"
                label="Binary Version"
                v-model="feed.binary"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-select
                prepend-inner-icon="group"
                outline
                class="mx-1"
                color="green"
                label="Team on Shift"
                :items="teams"
                v-model="feed.teamOnShift"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12>
              <v-select
                v-model="onDutyEmp"
                :items="employees"
                label="Attendance"
                prepend-inner-icon="event_available"
                color="green"
                outline
                multiple
                chips
                hint="Who are on duty?"
                persistent-hint
                class="mx-1"
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 class="text-xs-right">
              <v-btn color="orange" dark @click="updateFeed()">UPDATE FEED</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      alert: false,
      feed: {
        deliveryRate: {
          target: 0,
          completed: 0
        },
        binary: '',
        teamOnShift: ''
      },
      teams: ['TEAM BLACK', 'TEAM WHITE', 'TEAM BROWN', 'TEAM YELLOW'],
      onDutyEmp: [],
      employees: ['John', 'Ellie', 'Maggie', 'Robert']
    }
  },
  sockets: {
    connect() {
      console.log('Publisher connected')
    }
  },
  methods: {
    ...mapActions(['createFeed', 'fetchFeed']),
    updateFeed() {
      let attendance = []
      this.employees.forEach(emp => {
        let empObj = null
        if (this.onDutyEmp.includes(emp)) {
          empObj = { name: emp, onDuty: true }
        } else empObj = { name: emp, onDuty: false }
        attendance.push(empObj)
      })
      this.feed.attendance = attendance
      this.createFeed(this.feed)
      this.alert = true
      console.log('Fired!')
    }
  },
  computed: {
    ...mapGetters(['getFeed'])
  },
  mounted() {
    this.fetchFeed()
    this.feed = JSON.parse(JSON.stringify(this.getFeed))
    this.getFeed.attendance.forEach(emp => {
      if (emp.onDuty) this.onDutyEmp.push(emp.name)
    })
  }
}
</script>

<style>

</style>
