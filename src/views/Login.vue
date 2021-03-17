
<template>
  <div class="login-body container">
    <div class="login-container">
      <div class="row justify-content-md-center">
        <input
          class="login-input"
          type="text"
          :placeholder="$t('username')"
          v-model="loginForm.username"
          required
        >
      </div>
      <div class="row justify-content-md-center">
        <input
          class="login-input"
          type="password"
          :placeholder="$t('password')"
          v-model="loginForm.password"
          required
        >
      </div>
      <div class="row justify-content-md-center">
        <button class="login-button" type="submit" @click="onSubmit">{{ $t('signin') }}</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      /* make request to check creds */
      this.$store.dispatch('auth/login', { username: this.loginForm.username, password: this.loginForm.password })
        .then(
          data => {
            console.log(data)
            this.$router.push('/')
          },
          err => {
            console.log(err)
            this.loginForm.password = ''
          }
        )
    }
  }
}
</script>

<i18n>
{
  "en": {
    "username": "username",
    "password": "password",
    "signin": "Sign In!"
  },
  "ja": {
    "username": "ハンダル",
    "password": "パスワード",
    "signin": "ログイング！"
  }
}
</i18n>

<style>

  .login-body {
    height: 100%;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
  }

  .login-container {
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10rem;
  }

  .login-input {
    margin: 0.5rem;
    appearance: none;
    outline: 0;
    border: 1px solid black;
    /* background-color: rgba(255,255,255,0.2); */
    border-radius: 4px;

    text-align: center;
    /* color: white; */
    /* caret-color: var(--bg-primary); */
    height: 2.5rem;
    width: 18rem;

    transition: all .2s;
  }

  .login-input:focus {
    outline: none;
    /* background-color: white; */
    /* color: var(--bg-primary); */
    width: 20rem;
  }

  .login-button {
    margin-top: 1rem;
    appearance: none;
    outline: 0;
    border: 0;
    border-radius: 4px;
    background-color: #D0D0D0;
    /* color: var(--bg-primary); */
    /*box-shadow: 0 2px 5px black;*/
    height: 3rem;
    width: 18rem;

    transition: all .2s;
  }

  .login-button:hover {
    background-color: #E0E0E0;
  }

</style>
