<template>
  <div>
    <div id="custom-search-input" class="mt-5">
      <div class="input-group col-md-12">
        <input
          type="text"
          class="search-query form-control"
          v-on:keyup="buscar(txt)"
          v-model="txt"
          placeholder="Buscar um personagem"
        >
      </div>
    </div>
    <div class="row mt-5">
      <div
        class="card mr-1 mb-2"
        style="width: 177px;"
        v-for="personagem of exibir"
        :key="personagem.id"
      >
        <img class="card-img-top image" :src="personagem.picture">
        <div class="card-body">
          <router-link class="text-center text-decoration-none" tag="h6" :to="{ path:`/personagem/${personagem.name}`}" >{{personagem.name}}</router-link >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personagem from "../services/personagem";
export default {
  components: {},
  mounted() {
    personagem.getAllPersona().then(resposta => {
      this.personagens = resposta.data;
      this.exibir = this.personagens;
    });
  },
  data() {
    return {
      personagens: [],
      exibir: [],
      txt: "",
      buscar(p) {
        let novalista = [];
        for (let i in this.personagens) {
          if (
            this.personagens[i].name.toUpperCase().indexOf(p.toUpperCase()) !=
            -1
          ) {
            novalista.push({
              id: this.personagens[i].id,
              name: this.personagens[i].name,
              picture: this.personagens[i].picture
            });
          }
        }
        this.exibir = novalista;
      }
    };
  }
};
</script>

<style>
.image {
  width: 175px;
  height: 175px;
  object-fit: cover;
  object-position: center;
}
</style>
