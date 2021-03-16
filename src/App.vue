
<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <footer>
      made with &lt;/&gt;
      <font-awesome-icon :icon="['fab','github']" />
    </footer>
  </div>
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
    position: absolute;
    bottom: 0;
    width: 100%;
  }

</style>
