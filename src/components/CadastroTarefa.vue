<template>
  <div class="">
    <v-dialog v-model="dialog" persistent max-width="500px">
       <v-card>
         <v-card-title>
           <span class="headline">Cadastrar tarefa</span>
         </v-card-title>
         <v-card-text>
           <v-container grid-list-md>
             <v-layout wrap>
               <v-flex xs12 sm6 md4>
                 <v-text-field class="inputTitulo" name="input-7-1" label="Titulo" multi-line></v-text-field>
               </v-flex>

               <v-flex xs12 sm6 md4>
                 <v-text-field name="input-7-1" label="Descrição" multi-line></v-text-field>
               </v-flex>

               <v-flex xs12 sm6>
                 <v-select label="Categoria" multiple autocomplete chips :items="['Geral', 'Trabalho', 'Pessoal']"></v-select>
               </v-flex>
             </v-layout>
           </v-container>
           <small>*indicates required field</small>
         </v-card-text>
         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn color="blue darken-1" flat @click.native="dialog = false">Fechar</v-btn>
           <v-btn color="blue darken-1" flat @click.native="dialog = false">Salvar</v-btn>
         </v-card-actions>
       </v-card>
     </v-dialog>

     <v-btn class="bt-add" absolute dark fab bottom right color="blue" @click.native="dialog = true">
       <v-icon>add</v-icon>
     </v-btn>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style lang="css" scoped>
  .bt-add{
    bottom: 50px
  }
</style>
