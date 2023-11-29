export const MuscleEnum = {
  TRAPEZIUS: "trapezius",
  UPPER_BACK: "upper-back",
  LOWER_BACK: "lower-back",
  CHEST: "chest",
  BICEPS: "biceps",
  TRICEPS: "triceps",
  FOREARM: "forearm",
  BACK_DELTOIDS: "back-deltoids",
  FRONT_DELTOIDS: "front-deltoids",
  ABS: "abs",
  HAND: "hand",
  OBLIQUES: "obliques",
  ABDUCTOR: "adductor",
  ABDUCTORS: "abductors",
  HAMSTRING: "hamstring",
  QUADRICEPS: "quadriceps",
  CALVES: "calves",
  GLUTEAL: "gluteal",
  HEAD: "head",
  NECK: "neck",
  KNEES: "knees",
  KNEESBACK: "kneesback",
  LEFT_SOLEUS: "left-soleus",
  RIGHT_SOLEUS: "right-soleus",
  HANDBACK: "handback"
} as const;

export type Muscle = (typeof MuscleEnum)[keyof typeof MuscleEnum];

export type TMuscleSelect = Record<Muscle, boolean>;

export const ModelType = {
  POSTERIOR: "posterior",
  ANTERIOR: "anterior"
} as const;

type ModelType = (typeof ModelType)[keyof typeof ModelType];

export interface IModelProps {
  data?: TMuscleSelect[];
  type?: ModelType;
}
