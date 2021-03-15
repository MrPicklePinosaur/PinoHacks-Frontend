
<template>
  <div class="home">
    <div id="main-banner">
      <h1>Pinohacks</h1>
    </div>
    <button @click.prevent="onRequest">pe</button>
  </div>
</template>

<script>
import { getAllEvents } from '../services/api.services'

export default {
  name: 'Home',
  components: {
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
  }

</style>
