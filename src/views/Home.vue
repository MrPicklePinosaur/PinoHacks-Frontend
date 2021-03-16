
<template>
  <div class="home">
    <div id="main-banner">
      <img
        id="main-logo"
        :src="`${publicPath}pinohacks_logo.png`"
        alt="PinoHacks"
        v-if="getLocale==='en'"
      >
      <img
        id="main-logo"
        :src="`${publicPath}pinohacks_logo_jp.png`"
        alt="PinoHacks"
        v-else
      >
      <p id="main-tagline">{{ $t('banner.tagline') }}</p>

      <router-link
        v-if="!(isLoggedIn)"
        to="/apply"
      >
        <b-button id="apply-button" pill variant="primary">{{ $t('banner.apply-button') }}</b-button>
      </router-link>
    </div>

    <h2 class="main-header">📅 {{ $t('headers.events') }}</h2>
    <div id="schedule-container">
      <schedule></schedule>
    </div>
    <h2 class="main-header">💬 {{ $t('headers.faq') }}</h2>
    <faq></faq>

    <h2 class="main-header">💖 {{ $t('headers.sponsors') }}</h2>
    <div id="sponsor-container">
      <img :src="`${publicPath}sponsors/karatsuba_sponsor.png`" width="150">
      <img :src="`${publicPath}sponsors/9it-cli_sponsor.png`" width="400">
      <img :src="`${publicPath}sponsors/halfpixel_sponsor.png`" width="100" style="image-rendering: pixelated">
    </div>

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
      "sponsors": "Sponsors"
    }
  },
  "ja": {
    "banner": {
      "tagline": "最初いらないのハッカソン",
      "apply-button": "登録する！"
    },
    "headers": {
      "events": "イヴェント",
      "faq": "エフイーキュー",
      "sponsors": "主催達"
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

  .main-header {
    margin-left: 10rem;
    margin-top: 2rem;
  }

  #sponsor-container {
    text-align: center;
  }

  #sponsor-container img {
    margin: 1rem;
  }

</style>
