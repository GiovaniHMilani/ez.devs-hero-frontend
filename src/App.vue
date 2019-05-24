<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <router-link class="navbar-brand mb-0 h1 cursor" tag="span" :to="{ path: '/' }" >Herois EzDevs</router-link>
    </nav>
    <div class=" ml-5 mr-5 flex-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.cursor {
  cursor:pointer;
}
</style>
