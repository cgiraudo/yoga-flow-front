export interface Ingredient {
  ID: number;
  nom: string;
  proteines100g: number;
  lipides100g: number;
  glucides100g: number;
  calories100g: number;
  ratio_unite: number;
}

export interface Recette {
  ID: number;
  nom: string;
  instructions_ingredients: string;
  instructions_preparation: string;
}
