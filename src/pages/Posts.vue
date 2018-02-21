<template>
  <div class="pg-posts">
    <h2>{{title}}</h2>
    <button type="button" name="button" @click="addPost()">Add post</button>
    <button type="button" name="button" @click="listarPosts()">Listar post</button>

    <p v-for="post in posts">
      {{post.title}}
    </p>

    <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title">
              <v-card>
                <v-card-media :src="card.src" height="200px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline" v-text="card.title"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Posts',
      cards: [
        { title: 'Pre-fab homes', userId: 1, body: 'teste body', src: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg', flex: 12 },
        { title: 'Favorite road trips', userId: 1, body: 'teste body', src: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg', flex: 6 },
        { title: 'Best', userId: 1, body: 'teste body', src: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg', flex: 6 },
        { title: 'Best air', userId: 1, body: 'teste body', src: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg', flex: 6 },
        { title: 'Best airli', userId: 1, body: 'teste body', src: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg', flex: 6 }
      ],
      posts: []
    }
  },
  methods: {
    addPost () {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => {
          console.log('=== requisicao ===')
          console.log(response.json())
        }, error => {
          console.log(error)
        })
        .finally(() => {
          console.log('=== finalizou ===')
        })
    },
    listarPosts () {
      fetch('http://localhost:3000/posts', {
        method: 'GET'
      })
       .then(response => response.json())
       .then(json => {
         this.posts = json
         console.log(this.posts)
       })
    }
  }
}
</script>

<style lang="css" scoped>
  .pg-posts{
    width: 100%;
  }
  .container.grid-list-md{
    padding: 0px;
  }
</style>
