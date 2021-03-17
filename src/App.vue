
<template>
  <v-app>
    <navbar/>
    <router-view></router-view>
    <footer>
      <hr>
      &lt;/&gt; {{ $t('madewith', { icon: "☕" }) }}
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
    height: 6rem;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
