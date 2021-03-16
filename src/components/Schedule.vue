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
          {{ $t('schedule-title', { date: this.focus }) }}
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
          <v-card-text>
            <div>Starts {{ friendlyDate(new Date(selectedEvent.start_time)) }}</div>
            <p class="display-1 text--primary">{{ selectedEvent.name }}</p>
            <span v-html="selectedEvent.description"></span>
          </v-card-text>
          <v-btn
            text
            @click="redirectExternal(selectedEvent)"
          >
            <p v-if="isLoggedIn">Go to Event</p>
            <p v-else>Event Info</p>
          </v-btn>
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

    populateEvents () {
      const eventColors = {
        workshop: 'blue',
        activity: 'green',
        tech_talk: 'purple',
        other: 'grey'
      }

      getAllEvents()
        .then(data => {
          console.log(data)
          const newEvents = data.data.events
            .filter(event => event.permission === 'public')
            .map(event => {
              return {
                name: event.name,
                start: new Date(event.start_time),
                end: new Date(event.end_time),
                timed: 1,
                data: event,
                color: (event.event_type in eventColors) ? eventColors[event.event_type] : eventColors.other
              }
            })
          this.events = newEvents
        })
    },

    friendlyDate (date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

      return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
    },

    redirectExternal (event) {
      const redirectUrl = (this.isLoggedIn) ? event.private_url : event.public_url
      window.location = redirectUrl
    }

  },

  mounted () {
    this.$refs.calendar.checkChange()
  }

}
</script>

<i18n>
{
  "en": {
    "schedule-title": "Schedule for {date}"
  },
  "ja": {
    "schedule-title": "{date} の 日程"
  }
}
</i18n>

<style>

</style>
