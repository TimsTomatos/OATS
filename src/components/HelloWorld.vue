<template>
    
    <div class="content">

        <v-container>

            <v-layout column>

                <v-flex xs12 class="text-center">
                    <p class="display-3">The World of Birds</p>
                    <p class="h2">Fast Integration for Ornitholgy</p>
                </v-flex>
                
                <v-flex xs12>

                  <v-layout>
                      <template v-for="items in cards">

                      <v-flex xs12 md4 :key="items.title"> <!-- Card One -->
                      
                        <b-card
                            class="mb-2"
                            style="border:none;"
                        >
                            <font-awesome-icon :icon="items.img" class="fa-7x fluid" style="width:100%;" />
                            <b-card-text>
                                <h1 class="text-center">{{items.title}}</h1>
                                <p class="text-center">{{items.content}}</p>
                            </b-card-text>

                        </b-card>

                      </v-flex>
                      
                      </template>

                    </v-layout>

                  </v-flex>

                  <v-flex xs12 class="my-5 text-center">
                    <p class="display-3">Array of Catelog</p>
                    <p class="h2">Growing Catelog of Birds to Identify</p>
                  </v-flex>

                  <v-flex xs12>

                      <v-layout>
                      
                        <template v-for="items in birds">

                        <v-flex xs12 md4 :key="items.name"> <!-- Card One -->
                        
                            <b-card
                                img-fluid
                                img-top
                                class="mb-2 mx-4"
                                :img-src="items.img"
                                :title="items.name"
                                :sub-title="items.scientificName"
                            >
                                <b-card-text>
                                    <v-layout>
                                        <v-flex class="font-weight-light">
                                            <span class="stats">
                                             <font-awesome-icon icon="ruler" />
                                             {{items.stats.length}}
                                            </span>
                                        </v-flex>

                                        <v-flex class="font-weight-light"> 
                                            <span class="stats">
                                             <font-awesome-icon icon="digital-tachograph" />
                                             {{items.stats.speed}}
                                            </span>
                                        </v-flex>

                                        <v-flex class="font-weight-light">
                                            <span class="stats">
                                             <font-awesome-icon icon="hourglass" />
                                             {{items.stats.lifespan}}
                                            </span>
                                        </v-flex>
                                    </v-layout>

                                    <p class="text-truncate">{{items.content}}</p>

                                </b-card-text>

                            </b-card>

                        </v-flex>
                        
                        </template>

                    </v-layout>

                  </v-flex>

            </v-layout>

        </v-container>


    </div>


</template>

<script>
export default {
  data() {
      return {
          cards : [
            {img:"user-friends",title:"Crowdsourcing",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque."},
            {img:"calendar-alt",title:"Personal Index",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque."},
            {img:"rocket",title:"AI Identification",content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque."},
          ],
          birds : [
              {img : require('@/assets/Temp/nene.jpg') , name : 'Nene' , scientificName : 'Branta sandvicensis' , stats: { length : '1.7 - 2.2 ft' , speed : '5 mph' , lifespan : '20-24 yrs' } , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque.' },
              {img : require('@/assets/Temp/creeper.jpg') , name : 'Hawaiian Honeycreeper' , scientificName : 'Lorem Ipsum' , stats: { length : '1.7 - 2.2 ft' , speed : '5 mph' , lifespan : '20-24 yrs' } , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque.' },
              {img : require('@/assets/Temp/humming.jpg') , name : 'Hummingbird' , scientificName : 'oof' , stats: { length : '1.7 - 2.2 ft' , speed : '5 mph' , lifespan : '20-24 yrs' } , content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ut quidem animi consequuntur harum temporibus perspiciatis magnam. Ad, et cumque commodi doloribus tempora aliquam tempore saepe impedit. Alias, nesciunt itaque.' }
          ]
      }
  }
}
</script>

<style lang="scss" >

    .stats {
        font-size: 14px;
    }

    .card-img-top {
        max-height: 15rem;
    }

</style>
