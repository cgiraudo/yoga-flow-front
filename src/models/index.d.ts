import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type IngredientModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class IngredientModel {
  readonly id: string;
  readonly nom: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<IngredientModel, IngredientModelMetaData>);
  static copyOf(source: IngredientModel, mutator: (draft: MutableModel<IngredientModel, IngredientModelMetaData>) => MutableModel<IngredientModel, IngredientModelMetaData> | void): IngredientModel;
}