<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'job' }">Job</router-link>
  </nav>
  <button class="btn btn-danger mx-1" @click="back">Go Back</button>
  <button class="btn btn-primary mx-1" @click="redirect">Redirect</button>
  <button class="btn btn-success mx-1" @click="forward">Go foward</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    },
    redirect() {
      this.$router.push({ name:'home' })
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
