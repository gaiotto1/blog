<template>
  <div class="">
    <listagem-tarefas></listagem-tarefas>
    <cadastro-tarefa></cadastro-tarefa>
  </div>
</template>

<script>
import ListagemTarefas from '@/components/ListagemTarefas'
import CadastroTarefa from '@/components/CadastroTarefa'

export default {
  data () {
    return {
    }
  },
  components: {
    ListagemTarefas,
    CadastroTarefa
  }
}
</script>

<style lang="css">
</style>
