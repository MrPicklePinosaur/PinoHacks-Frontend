
<i18n>
{
  "en": {
    "tagline": "the first hackathon that doesn't actually exist"
  },
  "ja": {
    "tagline": "totally japanese"
  }
}
</i18n>

<template>
  <div class="home">

    <div id="main-banner">
      <img
        id="main-logo"
        :src="`${publicPath}pinohacks_logo.png`"
        alt="PinoHacks"
      >
      <p id="main-tagline">{{ $t('tagline') }}</p>

      <router-link
        v-if="!(isLoggedIn)"
        to="/apply"
      >
        <button id="apply-button">Apply Now!</button>
      </router-link>
    </div>

    <h2>Event Schedule</h2>
    <div id="schedule-container">
      <schedule></schedule>
    </div>
    <h2>FAQ</h2>

    <h2>Sponsers</h2>

  </div>
</template>

<script>
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
  },
  mounted () {
    console.log(this.$i18n.messages)
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
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
