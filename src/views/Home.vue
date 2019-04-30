<template>
  <div class="home">

    <div id="intro" class="jumbotron jumbotron-fluid bg-success my-0">

      <b-container class="text-center">

        <img :src="require('@/assets/Oats.svg')" alt="" id="logo">

        <p class="pt-4 display-3 text-white font-weight-lighter">Ornith Audio Tune Software</p>

      </b-container>

    </div>

    <Home msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    'Home' : HelloWorld,
  }
}
</script>

<style lang="scss" scoped>
  #intro {
    width: 100%;
    height: 90%;
    background: grey url('../assets/try.jpg') no-repeat fixed center;
    background-size: cover;
  }

  .home {
    width: 100%; 
    height: 100%;
  }
  #logo {
    width: 30%;
  }
</style>
