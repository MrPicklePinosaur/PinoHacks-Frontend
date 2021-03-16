
<template>
  <v-app>
    <navbar/>
    <router-view/>
    <footer>
      &lt;/&gt; {{ $t('madewith', { icon: "☕" }) }}
      <!-- <font-awesome-icon :icon="['fas','mug-hot']" /> -->
    </footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<i18n>
{
  "en": {
    "madewith": "made with {icon}"
  },
  "ja": {
    "madewith": "{icon}で作ります"
  }
}
</i18n>

<style>
  html {
    --bg-light: #00AEED;
    font-family: Arial, Helvetica, sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  footer {
    height: 4rem;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  /* .v-application button {
    all: unset !important;
  } */
</style>
