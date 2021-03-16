
<template>
  <div class="home">

    <div id="main-banner">
      <img
        id="main-logo"
        :src="`${publicPath}pinohacks_logo.png`"
        alt="PinoHacks"
      >
      <p id="main-tagline">{{ $t('banner.tagline') }}</p>

      <router-link
        v-if="!(isLoggedIn)"
        to="/apply"
      >
        <button id="apply-button">{{ $t('banner.apply-button') }}</button>
      </router-link>
    </div>

    <h2>{{ $t('headers.events') }}</h2>
    <div id="schedule-container">
      <schedule></schedule>
    </div>
    <h2>{{ $t('headers.faq') }}</h2>
    <faq></faq>

    <h2>{{ $t('headers.sponsers') }}</h2>

  </div>
</template>

<script>
import Schedule from '../components/Schedule'
import Faq from '../components/Faq'

export default {
  name: 'Home',
  components: {
    Schedule,
    Faq
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
  }
}
</script>

<i18n>
{
  "en": {
    "banner": {
      "tagline": "the first hackathon that doesn't actually exist",
      "apply-button": "Apply Now!"
    },
    "headers": {
      "events": "Events",
      "faq": "FAQ",
      "sponsers": "Sponsers"
    }
  },
  "ja": {
    "banner": {
      "tagline": "最初いらないのハッカソン",
      "apply-button": "登録する！"
    },
    "headers": {
      "events": "Events",
      "faq": "エフイーキュー",
      "sponsers": "主催達"
    }
  }
}
</i18n>

<style scoped>

  #main-banner {
    background-color: var(--bg-light);
    padding-top: 7rem;
    padding-bottom: 6rem;

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
    margin-bottom: 6rem;
  }

  h2 {
    margin-left: 10rem;
  }

</style>
