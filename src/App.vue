<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
</script>

<template>
  <header class="container-fluid navbar-dark bg-dark">
    <nav class="navbar navbar-dark bg-dark container">
      <div>
        <button class="btn btn-outline-primary" @click="route.push({name:'home'})">
          Accueil
        </button>
        <button
          class="btn btn-outline-secondary ms-2"
          @click="route.push({name: 'recette'})"
        >
          Liste Recettes
        </button>
      </div>
    </nav>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>
