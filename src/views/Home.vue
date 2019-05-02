<template>
  <div class="home">

    <v-parallax src="https://cdn.discordapp.com/attachments/567223608645124099/573407161061867530/4_Protecting-The-Rainforest.png" max-height="1024px">
    
            <v-layout align-center column justify-center fill-height>
       
                <v-flex xs12>
                    <v-img :src="require('@/assets/Oats.svg')" class="mt-3" max-height="300" contain> </v-img>
                    <v-layout column justify-center align-center>
                        <span class="display-2 font-weight-heavy mt-3">OATS</span>
                        <span class="display-1 font-weight-light mt-2 text-xs-center">Ornith Audio Tuning System</span>       
                    </v-layout>   
                </v-flex>
        
            </v-layout>
    
      </v-parallax>

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
