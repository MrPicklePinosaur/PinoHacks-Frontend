<template>
  <div>
    <v-row><v-col><v-sheet height="400">
      <v-toolbar flat>
        <v-btn
          fab
          text
          small
          color="grey darken-2"
          @click="prevDay"
        >
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          fab
          text
          small
          color="grey darken-2"
          @click="nextDay"
        >
          <v-icon small>mdi-chevron-right</v-icon>
        </v-btn>
        <v-toolbar-title>
          Schedule {{ this.focus }}
        </v-toolbar-title>
      </v-toolbar>
      <v-calendar
        ref="calendar"
        type="day"
        v-model="focus"
        :hideHeader="true"
        :events="events"
        @click:event="showEvent"
        @change="populateEvents"
      ></v-calendar>
      <!-- <v-menu>
        <template
          v-slot:activator="{ on, attrs }"
        >
          <v-btn
            v-bind="attrs"
            v-on="on"
          >
          </v-btn>
        </template>
      </v-menu> -->
    </v-sheet></v-col></v-row>
  </div>
</template>

<script>
import { getAllEvents } from '../services/api.services'

export default {
  name: 'Schedule',

  data () {
    return {
      focus: '2021-01-12',
      events: []
    }
  },

  methods: {

    prevDay () {
      this.$refs.calendar.prev()
    },

    nextDay () {
      this.$refs.calendar.next()
    },

    showEvent ({ nativeEvent, event }) {
    },

    populateEvents (data) {
      getAllEvents()
        .then(data => {
          const newEvents = data.data.events
            .filter(event => event.permission === 'public')
            .map(event => {
              return {
                name: event.name,
                start: new Date(event.start_time),
                end: new Date(event.end_time),
                timed: 1
              }
            })
          this.events = newEvents
        })
    }

  },

  mounted () {
    this.$refs.calendar.checkChange()
  }

}
</script>

<style>

</style>
