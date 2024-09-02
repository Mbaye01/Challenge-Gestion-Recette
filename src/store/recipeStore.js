import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useRecipeStore = defineStore("RecipeStore", () => {
  //variables
  const recipes = reactive([
    {
      id: 1,
      title: "Salade César",
      type: "Entrée",
      ingredients: [
        "Laitue romaine",
        "Poulet grillé",
        "Croûtons",
        "Parmesan râpé",
        "Sauce César",
      ],
    },
    {
      id: 2,
      title: "Spaghetti Bolognese",
      type: "Plat",
      ingredients: [
        "Spaghetti",
        "Viande hachée de bœuf",
        "Sauce tomate",
        "Oignons",
        "Ail",
        "Parmesan râpé",
      ],
    },
    {
      id: 3,
      title: "Tarte aux Pommes",
      type: "Dessert",
      ingredients: ["Pommes", "Pâte brisée", "Sucre", "Cannelle", "Beurre"],
    },
    {
      id: 4,
      title: "Soupe à l'Oignon",
      type: "Entrée",
      ingredients: [
        "Oignons",
        "Bouillon de bœuf",
        "Beurre",
        "Pain grillé",
        "Gruyère râpé",
      ],
    },
  ]);
  const val = ref(0);
  const newRecipe = ref({
    title: "",
    type: "",
    ingredients: [],
  });

  //Functions
  const del = (id) => {
    recipes.splice(id, 1);
  };
  const get = (index) => {
    val.value = index;
    newRecipe.value = recipes[index];
  };
  const edit = (index) => {
    recipes[index].id = index + 1;
    recipes[index].title = newRecipe.value.title;
    recipes[index].type = newRecipe.value.type;
    recipes[index].ingredients = newRecipe.value.ingredients.split(",");
  };
  const add = (newRecipe) => {
    recipes.push({
      id: recipes.length + 1,
      title: newRecipe.title,
      type: newRecipe.type,
      ingredients: newRecipe.ingredients.split(","),
    });
  };
  return { recipes, val, newRecipe, del, get, edit, add };
});
