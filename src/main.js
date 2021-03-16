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
import { faTools, faRunning, faLaptopCode, faRssSquare, faScroll, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(BootStrapVue)

Vue.use(Vuetify)
const vuetify = new Vuetify({})

library.add(
  faTools, faRunning, faLaptopCode, faRssSquare, faScroll, faMugHot,
  faGithub
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
