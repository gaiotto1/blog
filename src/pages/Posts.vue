<template>
  <div class="pg-posts">
    <!--<div>
      <v-btn color="primary" @click="addPost()">Add Post</v-btn>
      <v-btn color="error" @click="deletarPost()">Deletar Post</v-btn>
      <v-btn @click="listarPosts()">Listar</v-btn>
    </div>-->
    <listagem-posts :posts="posts"></listagem-posts>

    <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :right="right" :left="left" :direction="direction" :open-on-hover="hover" :transition="transition" class="btAdd">
     <v-btn slot="activator" color="blue darken-2" dark fab hover v-model="fab">
       <v-icon>account_circle</v-icon>
       <v-icon>close</v-icon>
     </v-btn>
     <v-btn fab dark small color="green">
       <v-icon>edit</v-icon>
     </v-btn>
     <v-btn fab dark small color="indigo">
       <v-icon>add</v-icon>
     </v-btn>
     <v-btn fab dark small color="red">
       <v-icon>delete</v-icon>
     </v-btn>
   </v-speed-dial>
  </div>
</template>

<script>
import ListagemPosts from '@/components/ListagemPosts'

export default {
  data () {
    return {
      title: 'Listar Posts',
      posts: [],
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }
  },
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },
  components: {
    ListagemPosts
  },
  created () {
    this.listarPosts()
  },
  methods: {
    addPost () {
      fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(
          // { title: 'Post 4', subtitle: '<span class="text--primary">Ali Connors</span> &mdash; I`ll be in your neighborhood doing errands this weekend. Do you want to hang out?', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imgDestaque: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg', userId: 1 }
        ),
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
      console.log('listagem de posts')
      fetch('http://localhost:3000/posts', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => {
          this.posts = json
          console.log(this.posts)
        })
    },
    deletarPost () {
      fetch('http://localhost:3000/posts/', {
        method: 'DELETE'
      })
        .then(response => {
          console.log(response.json)
        }, error => {
          console.log(error)
        })
        .finally(() => {
          console.log('post deletado com sucesso')
        })
    },
    ordenaTarefas () {

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

  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }

  .speed-dial--right{
    position: fixed;
    bottom: 50px;
    right: 10px;
  }

  .btAdd{
    width: 72px;
  }
</style>
