<script setup>
import { useRecipeStore } from "@store/recipeStore";
import { useRouter } from "vue-router";
const store = useRecipeStore();
const recipes = store.recipes;
const route = useRouter();

const destroy = (index) => {
  const confirm = window.confirm(
    `Vous êtes sûr de vouloir suprimé la recette ${recipes[index].title} ?`
  );
  if (confirm) {
    store.del(index);
  }
};
</script>

<template>
  <div class="container">
    <h1 class="mt-3 mb-2 text-center fw-bold">Liste de Recettes</h1>
    <button class="btn btn-primary mt-4 mb-2">  <i class="fas fa-plus me-1"></i>Nouvelle Recette</button>
    <table
      class="table table-success table-striped-columns table-bordered m-auto"
    >
      <thead>
        <th scope="col" class="text-center">N°</th>
        <th scope="col" class="text-center">Titres</th>
        <th scope="col" class="text-center">Type</th>
        <th scope="col" class="text-center">Actions</th>
      </thead>
      <tbody>
        <tr v-if="recipes.length === 0">
          <td colspan="4" class="text-danger text-center fw-bold">
            Aucune Recette enregister
          </td>
        </tr>
        <tr v-else v-for="(recipe, index) in recipes" :key="recipe.id">
          <td class="text-center">{{ recipe.id }}</td>
          <td class="text-center">{{ recipe.title }}</td>
          <td class="text-center">{{ recipe.type }}</td>
          <td class="text-center">
            <button
              class="btn-sm btn btn-outline-primary ms-2"
              @click="
                store.get(index),
                  route.push({
                    name: 'recette-show',
                    params: { id: recipe.id },
                  })
              "
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              class="btn-sm btn btn-outline-secondary ms-2"
              @click="
                store.get(index),
                  route.push({
                    name: 'recette-edit',
                    params: { id: recipe.id },
                  })
              "
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              class="btn-sm btn btn-outline-danger ms-2"
              @click="destroy(index)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>