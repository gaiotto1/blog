<template>
  <div class="">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list three-line>
            <template v-for="item in posts">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-list-tile avatar v-else :key="item.title">
                <v-list-tile-avatar>
                  <img :src="item.imgDestaque">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
