<template>
  <div class="page">
    <h1>Sign Up</h1>
    <form class="signup-form">
      <input v-model="email" type="email" placeholder="email address" />
      <label>
        <input v-model="agreeChecked" v-bind:disabled="verifyCodeSent" type="checkbox" />
        I agree to the User Agreement and Privacy Policy
      </label>

      <button v-if="!verifyCodeSent" v-bind:disabled="!agreeChecked || waitingForResponse" v-on:click="sendCode">
        Send Code
      </button>
      <div v-else class="signup-form">
        <label>
          <input v-model="verifyCode" type="text" placeholder="verify code" />
          <button v-bind:disabled="waitingForResponse" v-on:click="sendCode" type="button">
            Resend Code
          </button>
        </label>
        <input v-model="firstName" type="text" placeholder="First Name" />
        <input v-model="lastName" type="text" placeholder="Last Name" />
        <input v-model="password" type="password" placeholder="password" />
        Password strength: ...

        <button v-bind:disabled="waitingForResponse" v-on:click="signUp">
          Sign Up
        </button>
      </div>

    </form>
  </div>
</template>

<script>
import api from 'api'

export default {
  data: () => ({
    email: '',
    verifyCode: '',
    password: '',
    firstName: '',
    lastName: '',
    agreeChecked: false,
    verifyCodeSent: false,
    waitingForResponse: false,
  }),
  methods: {
    sendCode: function (event) {
      this.waitingForResponse = true
      api.user.registerRequest(this.email)
        .then((response) => {
          this.waitingForResponse = false
          this.verifyCodeSent = true
        })
        .catch((error) => {
          console.log('Got error: ', error)
          this.waitingForResponse = false
        })
    },
    signUp: function (event) {
      this.waitingForResponse = true
      api.user.register({
          login: this.email,
          verify_code: this.verifyCode,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
        })
        .then((response) => {
          this.waitingForResponse = false
          console.log('Register response: ', response)
        })
        .catch((error) => {
          console.log('Got error: ', error)
          this.waitingForResponse = false
        })
    }
  },
}
</script>

<style>
.signup-form {
  width: 640px;
  display: flex;
  flex-direction: column;
}
</style>
