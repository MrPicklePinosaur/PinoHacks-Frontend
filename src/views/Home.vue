
<template>
  <div class="home">

    <div id="main-banner">
      <img
        id="main-logo"
        :src="`${publicPath}pinohacks_logo.png`"
        alt="PinoHacks"
      >
      <p id="main-tagline">the first hackathon that doesn't actually exist</p>

      <router-link to="/apply">
        <button id="apply-button">Apply Now!</button>
      </router-link>
    </div>
    <button @click.prevent="onRequest">pe</button>

    <h2>Event Schedule</h2>
    <div id="schedule-container">
      <schedule></schedule>
    </div>
    <h2>FAQ</h2>

    <h2>Sponsers</h2>

  </div>
</template>

<script>
import { getAllEvents } from '../services/api.services'
import Schedule from '../components/Schedule'

export default {
  name: 'Home',
  components: {
    Schedule
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    onRequest () {
      getAllEvents()
        .then(
          data => {
            console.log(data)
          }
        )
    }
  }
}
</script>

<style scoped>

  #main-banner {
    background-color: var(--bg-light);
    padding-top: 4rem;
    padding-bottom: 4rem;

    text-align: center;
  }

  #main-logo {
    image-rendering: pixelated;
    height: 5rem;
    width: auto;
  }

  #main-tagline {
    font-size: 1.2rem;
    font-weight: 400;
  }

  #schedule-container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
