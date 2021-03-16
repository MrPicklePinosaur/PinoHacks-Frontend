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
      >

      </v-calendar>
    </v-sheet></v-col></v-row>
  </div>
</template>

<script>
export default {
  name: 'Schedule',

  data () {
    return {
      focus: '',
      events: [
        {
          name: 'peeing',
          start: new Date(1615865271),
          end: new Date(1615865471)
        }
      ]
    }
  },

  methods: {
    populateEvents () {

    },

    prevDay () {
      this.$refs.calendar.prev()
    },

    nextDay () {
      this.$refs.calendar.next()
    }

  }
}
</script>

<style>

</style>
