<template>
  <div>

    <h1>Login</h1>
    <div class="login-container container">
      <div class="row justify-content-md-center">
        <input
          class="login-input"
          type="text"
          placeholder="username"
          v-model="loginForm.username"
          required
        >
      </div>
      <div class="row justify-content-md-center">
        <input
          class="login-input"
          type="password"
          placeholder="password"
          v-model="loginForm.password"
          required
        >
      </div>
      <div class="row justify-content-md-center">
        <button class="login-button" @click="onSubmit">Sign In!</button>
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

<style>

  .login-container {
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    /* background-color: white;
    color: var(--bg-primary); */
    /*box-shadow: 0 2px 5px black;*/
    height: 3rem;
    width: 18rem;
  }

  .login-button:hover {
  }

</style>
