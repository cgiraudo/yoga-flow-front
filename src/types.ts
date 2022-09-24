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
  ID: number;
  nom: string;
  proteines100g?: number;
  lipides100g?: number;
  glucides100g?: number;
  calories100g?: number;
}
