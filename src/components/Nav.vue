<template>

    <nav>
        <v-toolbar flat app class="brown darken-1">
            <v-toolbar-side-icon class="white--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase" @click="changeIndex('Home-Page')" style="cursor: pointer"> <!--Title stuff for vool toolbar-->
                <router-link to="/"><span class="font-weight-bold display-1 white--text">OATS</span></router-link>
            </v-toolbar-title>

            <v-spacer> </v-spacer> <!--Fills up all  availble room-->

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="item in toolBarItems" :key="item.title" flat color="white" class="px-5">
                    <span>{{item.title}}</span>
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="brown accent-1 darken-1">
            <v-list>

                <v-list-tile>
                    <v-list-tile-content>

                        <v-list-tile-title class="font-weight-bold white--text">Main Categories</v-list-tile-title>

                    </v-list-tile-content>
                </v-list-tile>

                <template v-for="link in drawerBoardTwo" >
                    <router-link :key="link.title" :to="link.title">
                    
                    <v-list-tile :key="link.text" class="py-2 my-1"> 
                        <v-list-tile-avatar>    
                            <v-icon class="white--text">{{link.icon}}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-content>
                            <v-list-tile-title class="font-weight-light white--text">{{link.title}}</v-list-tile-title>
                        </v-list-content>
                    </v-list-tile>
                    </router-link>
                </template>


            </v-list>
        </v-navigation-drawer>
    </nav>

</template>

<script>
export default {
    data( ) {
        return {
            toolBarItems: [
              {icon: "map", title: "About",change:'Maps-Page'},
              {icon:"message",title:"Download",change:'Forums-Page'},
              {icon:"message",title:"Catelog",change:'Forums-Page'}
          ],

          drawer: false,
          
          drawerBoardTwo: [
              {icon:"map",title:"Download",change:'/download'},
              {icon:"camera_enhance",title:"About",change:'/about'},
              {icon:"message",title:"Catelog",change:'/catelog'}
          ]
        }
    }
}
</script>

<style lang="scss">
    a {
        text-decoration: none;
    }
</style>

