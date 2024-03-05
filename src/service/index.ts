import * as recipes from "./recipeService"
import * as ingredientes from "./ingredientsService"
import * as preparations from "./preparationService"

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath: "https://nvvbocyvivzxcqraipkd.supabase.co/storage/v1/object/public/ingredients",
  },
}