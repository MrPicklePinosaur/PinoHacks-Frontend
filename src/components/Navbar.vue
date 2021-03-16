
<template>
  <div>
    <nav id="navbar-main">
      <ul id="navbar-list">
        <router-link to="/">Home</router-link>
        <router-link to="/login" v-if="!(isLoggedIn)">Login</router-link>
        <router-link to="/logout" @click.native="logout" v-else>Logout</router-link>
        <router-link to="/apply">Apply</router-link>
        <button
          @click="toggleLocale"
        >
          <p v-if="getLocale==='en'">日本語</p>
          <p v-else>English</p>
        </button>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    },
    toggleLocale () {
      this.$i18n.locale = (this.getLocale === 'en') ? 'ja' : 'en'
    }
  }
}
</script>

<style>

  #navbar-main {
    position: absolute;
  }

</style>
