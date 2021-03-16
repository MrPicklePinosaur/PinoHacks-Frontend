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

      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
        max-width="30rem"
      >
        <v-card
          flat
        >
          <v-toolbar>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.description"></span>
          </v-card-text>
        </v-card>
      </v-menu>
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
      events: [],
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false
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
      const open = () => {
        this.selectedEvent = event.data
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
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
                timed: 1,
                data: event
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
