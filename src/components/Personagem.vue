<template>
  <div class="mt-5 card-margin row">
    <div
        class="card mr-1 "
        style="width: 177px; height:270px;"
        v-for="personagem of exibir"
        :key="personagem.id"
      >
        <img class="card-img-top image" :src="personagem.picture">
        <div class="card-body">
          <h5 class="text-center text-decoration-none">{{personagem.name}}</h5>
        </div>
      </div>
    <div class="text-area-div" v-for="personagem of exibir"
        :key="personagem.id">
      <textarea
        class="form-control text-area"
        disabled="disabled"
        id="exampleFormControlTextarea1"
        rows="11"
        v-model="personagem.description"
      ></textarea>
    </div>
    <router-link class="ml-2 btn btn-dark" tag="button" :to="{ path: '/' }">Voltar</router-link>
  </div>
</template>

<script>
import personagem from "../services/personagem";
export default {
  mounted() {
    personagem.getAllPersona().then(resposta => {
      this.personagens = resposta.data;
      let novalista = [];
      for (let i in this.personagens) {
        if (this.personagens[i].name.toLowerCase() === this.$route.params.name.toLowerCase()) {
          novalista.push({
            name: this.personagens[i].name,
            picture: this.personagens[i].picture,
            description: this.personagens[i].description
          });
        }
      }
      this.exibir = novalista;
      console.log(this.$route.params.name)
    });
  },
  data() {
    return {
      personagens: [],
      exibir: []
    };
  }
};
</script>

<style>
.tamanho {
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: center;
}
.text-area-div {
  position: relative;
  float: right;
  width: 70%;
  margin-left: 10px;
}
.text-area {
  resize: none;
  height: 100%;
}
.card-margin {
  justify-content: center;
}
</style>
