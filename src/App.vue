<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <Nav-Bar />

    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: {
    'Nav-Bar': Nav
  }
}
</script>


<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
