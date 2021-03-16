import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const commonLocale = {
  en: {
    navbar: {
      home: 'Home',
      login: 'Login',
      logout: 'Logout',
      apply: 'Apply'
    }
  },
  ja: {
    namebar: {
      home: 'ホーム',
      login: 'ログイン',
      logout: 'ログアウト',
      apply: '登録する'
    }
  }
}
export const i18n = new VueI18n({
  locale: 'en'
  // messages: {
  //   en: {
  //     navbar: {
  //       home: 'Home',
  //       login: 'Login',
  //       logout: 'Logout',
  //       apply: 'Apply'
  //     }
  //   },
  //   ja: {
  //     namebar: {
  //       home: 'ホーム',
  //       login: 'ログイン',
  //       logout: 'ログアウト',
  //       apply: '登録する'
  //     }
  //   }
  // }
})
