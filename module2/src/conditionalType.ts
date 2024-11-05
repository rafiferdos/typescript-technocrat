type a1 = null;
type b1 = undefined;
type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type borolox = {
  car: string;
  smartwatch: string;
  smartphone: string;
  home: string;
};

type CheckProperty<T> = T extends keyof borolox ? true : false;

type HasHome = CheckProperty<"smartwatch">;

type AreaNumber = {
  height: number;
  width: number;
};
type AreaString = {
  [key in "height" | "width" | "depth"]: string;
};

type ConvertedArea = {
  [key in keyof AreaNumber]: string;
};

type faltuJinish<T> = {
  [key in keyof T]: T[key];
};

const person1: faltuJinish<{
  taka: number;
  poisha: number;
  money: string;
}> = {
  taka: 1200,
  poisha: 3.44,
  money: "taka re baba",
};

type Home = {
  room?: string;
  window: string;
  door: string;
};
type Animal = {
  hand?: string;
  leg: string;
  eye: string;
};

type animalHome = Pick<Animal, "eye" | "hand">;
type onlyEye = Omit<Animal, "hand" | "leg">;
type requiredHome = Required<Home>;
type partialAnimal = Partial<Animal>;

type AnimalReadonly = Readonly<Animal>;
const animal1: AnimalReadonly = {
  hand: "has",
  leg: "has",
  eye: "has",
};
// animal1.hand = 'no'

type AutoAdd = Record<string, string>;
type AutoAdd2 = {
  [x: string]: string;
};

const sampleObj: AutoAdd = {
  a: "height",
  b: "width",
  c: "cursed",
};
const sampleObj2: AutoAdd2 = {
  a: "height",
  b: "width",
  c: "cursed",
};

const emptyObj: Record<string, unknown> = {};
