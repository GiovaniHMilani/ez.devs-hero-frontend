<template>
  <div>
    <nav class="navbar navbar-dark bg-dark" style="height: 100px">
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
::-webkit-scrollbar-track {
    background-color: #F4F4F4;
}
::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
</style>
