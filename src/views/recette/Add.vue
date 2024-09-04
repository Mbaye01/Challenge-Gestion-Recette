<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRecipeStore } from "@store/recipeStore";
const route = useRouter();
const store = useRecipeStore();
const newRecipe = ref({
  title: "",
  type: "",
  ingredients: [],
});
</script>

<template>
  <div class="container">
    <h1 class="mt-3 mb-2 text-center fw-bold">Ajouter une Nouvelle Recette</h1>
    <div class="container">
      <div class="input-group mb-3 container">
        <label class="input-group-text">Titre : </label>
        <input type="text" class="form-control" v-model="newRecipe.title" />
      </div>
      <div class="input-group mb-3 container">
        <select class="input-group-text" v-model="newRecipe.type">
          <option class="form-control" selected>Choisir le type</option>
          <option class="form-control" value="Entrée">Entrée</option>
          <option class="form-control" value="Dessert">Dessert</option>
          <option class="form-control" value="Plat">Plat</option>
        </select>
      </div>
      <div class="input-group mb-3 container">
        <label class="input-group-text">Ingredients : </label>
        <input
          type="text"
          class="form-control"
          v-model="newRecipe.ingredients"
        />
      </div>
      <button
        class="btn btn-outline-primary"
        @click="store.add(newRecipe), route.push({ name: 'recette' })"
      >
        Enregister
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
