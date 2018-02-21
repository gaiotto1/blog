<template>
  <div class="">
    <h2>{{title}}</h2>
    <form class="" action="index.html" method="post" @submit.prevent="onSubmit">
      <input id="cep" type="text" placeholder="Informe o Cep" name="" v-model="cep">
      <button type="submit" name="button">Buscar Cep</button>
    </form>

    <div v-if="preloader"> <!--testa se a variavel preloader é = a true e mostra a div-->
      <img class="preloader" src="../assets/images/preloader.gif" alt="">
    </div>

    <div v-if="error">
        <br/>
        {{error}}
    </div>

    <div v-show="address.bairro">
      <br/><br/>
      Cidade: {{address.cidade}} <br/>
      Bairro: {{address.bairro}} <br/>
      Logradouro: {{address.logradouro}} <br/>
      CEP: {{address.cep}} <br/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Busca Cep',
      cep: '',
      address: {},
      preloader: false,
      error: ''
    }
  },
  methods: {
    onSubmit () {
      this.reset()
      this.preloader = true

      this.$http.get('http://api.postmon.com.br/v1/cep/' + this.cep)
        .then(response => {
          this.address = response.data
          console.log(response.data)
        }, error => {
          console.log(error)
          this.error = 'Cep não encontrado'
        })
        .finally(() => {
          this.preloader = false
        })
    },
    reset () {
      this.error = ''
      this.address = {}
    }
  }
}
</script>

<style lang="css" scoped>
  .preloader{
    width: 150px;
    height: auto
  }
</style>
