export interface Figure {
  ID: number;
  nom_fr: string;
  nom_sk: string;
  image: string;
  description: string;
  groupe_musc_1_ID: number;
  groupe_musc_2_ID: number;
  objectif_ID: number;
  energetique: string;
}

export interface Ingredient {
  ID: string;
  nom: string;
  proteines: number;
  lipides: number;
  glucides: number;
  calories: number;
  ratio_unite: number;
}
