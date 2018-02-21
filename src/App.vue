<template>
  <div id="app">

    <v-app id="inspire">
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile> <!--@click=""-->
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/">Home</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile> <!--@click=""-->
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link to="/posts">Posts</router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>

      <v-content>
        <v-container> <!--fluid fill-height-->
          <!--<v-layout>--> <!--justify-center align-center-->
            <router-view></router-view>
          <!--</v-layout>-->
        </v-container>
      </v-content>

      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2017</span>
      </v-footer>

    </v-app>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null
    }
  },
  props: {
    source: String
  }
}
</script>

<style>
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
