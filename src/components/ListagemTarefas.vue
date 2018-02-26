<template>
  <div class="">

    <v-alert outline color="info" icon="info" :value="true" v-show="sucesso">
     Tarefa deletada com sucesso!
    </v-alert>

    <v-list two-line subheader>
      <v-subheader>General</v-subheader>
      <v-list-tile v-bind:id="'tarefa'+tarefa.id" class="item-lista" avatar v-for="(tarefa, index) in tarefas" :key="index">
        <v-list-tile-action>
          <v-checkbox v-model="tarefa.completed"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{tarefa.title}}</v-list-tile-title>
          <v-list-tile-sub-title class="dt-entrega"><b>{{tarefa.dataEntrega}}</b></v-list-tile-sub-title>
          <v-list-tile-sub-title>{{tarefa.desc}}</v-list-tile-sub-title>
        </v-list-tile-content>

        <v-btn fab dark small color="primary" @click="deletarPost(tarefa.id)">
          <v-icon dark>remove</v-icon>
        </v-btn>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tarefas: [],
      sucesso: false,
      obejto: {},
      id: ''
    }
  },
  watch: {
    sucesso: function (value) {
      console.log('sucesso foi alterado')
      setTimeout(this.escondeMsg, 4000)
    }
  },
  created () {
    this.populaLista()
    this.atualizarPost()
  },
  methods: {
    animaSaidaTarefa (id) {
      this.objeto = document.getElementById('tarefa' + id + '')
      this.objeto.style.height = '0'
    },
    populaLista () {
      this.$http.get('http://localhost:3000/posts')
        .then((res) => res.json())
        .then(json => {
          this.tarefas = json
          console.log(json)
        })
    },
    addPost () {
      this.$http
        .post('http://localhost:3000/posts/', {
          title: 'Tarefa 1',
          desc: 'descrição da tarefa 1',
          categoria: 'Geral',
          dataEntrega: '25-02-2018'
        })
        .then(response => {
          console.log(response.json())
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          console.log('finalizou a requisição')
        })
    },
    deletarPost (id) {
      fetch('http://localhost:3000/posts/' + id + '', {
        method: 'DELETE'
      })
        .then(response => {
          console.log(response.json)
        }, error => {
          console.log(error)
        })
        .finally(() => {
          //this.sucesso = true
          this.animaSaidaTarefa(id)
        })
    },
    escondeMsg () {
      this.sucesso = false
    },
    atualizarPost () {
      this.$http
        .put(`http://localhost:3000/posts/${this.id}`,{
          title: 'Tarefa 222',
          desc: 'descrição da tarefa 1',
          categoria: 'Geral',
          dataEntrega: '25-02-2018'
        })
        .then(response => {
          console.log(response.json())
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          console.log('finalizou a atualização')
        })
    }
  }
}
</script>

<style lang="css" scoped>
  .item-lista{
    overflow: hidden;
    transition: height .3s
  }
  .titulo{
    height: 50px;
  }
  .item-lista{
    transition: background-color .3s
  }
  .item-lista:hover{
    background-color: rgba(0,0,0,.12)
  }
  .dt-entrega{
    font-size: 12px;
  }
</style>
