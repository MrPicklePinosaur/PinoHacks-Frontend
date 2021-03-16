
<template>
  <div>
    <nav id="navbar-main">
      <ul id="navbar-list">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/login" v-if="!(isLoggedIn)">Login</router-link>
          <router-link to="/logout" @click.native="logout" v-else>Logout</router-link>
        </li>
        <li><router-link to="/apply">Apply</router-link></li>
        <li>
          <button
            @click="toggleLocale"
          >
            <p v-if="getLocale==='en'">日本語</p>
            <p v-else>English</p>
          </button>
        </li>
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

// {
//   "en": {
//     "navbar": {
//       "home": "Home",
//       "login": "Login",
//       "logout": "Logout",
//       "apply": "Apply"
//     }
//   },
//   "ja": {
//     "navbar": {
//       "home": "ホーム",
//       "login": "ログイン",
//       "logout": "ログアウト",
//       "apply": "登録する"
//     }
//   }
// }

<style>

  #navbar-main {
  }

  #navbar-list {
    list-style-type: none;
    margin: 1rem;
  }

  #navbar-list li {
    float: left;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  #navbar-list li:last-child {
    float: right;
    margin-right: 1rem;
  }

  #navbar-list li a {
    color: #707070;
    text-decoration: none;

    transition: all 0.2s;
  }

  #navbar-list li a:hover {
    color: black;
  }

</style>
