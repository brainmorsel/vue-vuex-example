<template>
  <header>
    <nav class="header">
      <div>LOGO</div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link to="/signup">Sign Up</router-link></li>
        <li v-if="isLoggedIn"><router-link to="/logout">Logout</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('user', {
    isLoggedIn: state => state.isLoggedIn
  })
}
</script>

<style>
.header {
  background-color: #DDD;
  display: flex;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline;
    }
  }
}
</style>
