<script setup>
import { useRecipeStore } from "@store/recipeStore";
import { useRouter } from "vue-router";
const route = useRouter();
const store = useRecipeStore();
const val = store.val;
const recipes = store.recipes;
const newRecipe = store.newRecipe;
</script>

<template>
  <div class="container">
    <h1 class="text-center">Editon</h1>
    <div class="input-group mb-3 container">
      <label class="input-group-text">Titre : </label>
      <input type="text" class="form-control" v-model="newRecipe.title" />
    </div>
    <div class="input-group mb-3 container">
      <label class="input-group-text">Type : </label>
      <input type="text" class="form-control" v-model="newRecipe.type" />
    </div>
    <div class="input-group mb-3 container">
      <label class="input-group-text">Ingredients : </label>
      <input type="text" class="form-control" v-model="newRecipe.ingredients" />
    </div>
    <button
      class="btn btn-outline-primary"
      @click="store.edit(val), route.push({ name: 'recette' })"
    >
      Enregister
    </button>
  </div>
</template>


<style>
</style>