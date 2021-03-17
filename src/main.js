import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { i18n } from './locale/locale'

import BootStrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuetify from 'vuetify/lib/framework'
import 'vuetify/dist/vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTools, faRunning, faLaptopCode, faRssSquare, faScroll, faMugHot, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* vue bootstrap init */
Vue.use(BootStrapVue)

/* vuetify init */
Vue.use(Vuetify)
const vuetify = new Vuetify({})

/* font awesome init */
library.add(
  faTools, faRunning, faLaptopCode, faRssSquare, faScroll, faMugHot, faUser,
  faGithub
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* define some global utilities */
Vue.mixin({
  computed: {
    isLoggedIn () {
      return this.$store.state.auth.loggedIn
    },
    getLocale () {
      return this.$i18n.locale
    }
  }
})

/* create main vue object */
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
