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
  const val = ref(0)



  //Functions
  const del = (id) => {
    recipes.splice(id, 1);
  };
  const get = (index) => {
    val.value = index
  }
  return { recipes, val, del, get };
});
